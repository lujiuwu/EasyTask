import fs from 'node:fs'
import path from 'node:path'
import yaml from 'js-yaml'

// 读取所有语言文件
const localesDir = path.join(process.cwd(), 'locales')

// 生成嵌套键的类型
function generateKeys (obj, prefix = '') {
  let keys = []
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key
    if (typeof value === 'object' && value !== null) {
      keys = keys.concat(generateKeys(value, fullKey))
    } else {
      keys.push(fullKey)
    }
  }
  return keys
}

// 读取英文文件作为基础结构
const enFile = path.join(localesDir, 'en', 'index.yaml')
const enContent = fs.readFileSync(enFile, 'utf8')
const enData = yaml.load(enContent)

// 生成所有键
const allKeys = generateKeys(enData)

// 生成嵌套接口
function generateInterface (obj, name = 'I18nMessages') {
  let result = `export interface ${name} {\n`

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      const interfaceName = `${name}_${key.charAt(0).toUpperCase() + key.slice(1)}`
      result += `  ${key}: ${interfaceName}\n`
      result += generateInterface(value, interfaceName)
    } else {
      result += `  ${key}: string\n`
    }
  }

  result += '}\n\n'
  return result
}

// 生成 TypeScript 类型定义
const typeDefinition = `// 自动生成的 i18n 类型定义
// 请勿手动修改此文件

export type I18nKey = ${allKeys.map(key => `'${key}'`).join(' | ')}

${generateInterface(enData)}

declare module 'vue-i18n' {
  interface DefineLocaleMessage extends I18nMessages {}
}

declare module '@intlify/core-base' {
  interface DefineLocaleMessage extends I18nMessages {}
}
`

// 写入类型定义文件
const outputPath = path.join(process.cwd(), 'src', 'types', 'i18n.d.ts')
fs.mkdirSync(path.dirname(outputPath), { recursive: true })
fs.writeFileSync(outputPath, typeDefinition)

console.log('✅ i18n 类型定义已生成:', outputPath)
console.log(`📝 共生成 ${allKeys.length} 个翻译键`)
