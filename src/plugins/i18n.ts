import yaml from 'js-yaml'
import { createI18n } from 'vue-i18n'

// 导入 YAML 文件
import chIndex from '../../locales/ch/index.yaml?raw'
import enIndex from '../../locales/en/index.yaml?raw'

// 解析 YAML 文件
const chMessages = yaml.load(chIndex) as Record<string, any>
const enMessages = yaml.load(enIndex) as Record<string, any>

// 创建 i18n 实例
export const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: 'en', // 默认语言
  fallbackLocale: 'en', // 回退语言
  messages: {
    ch: chMessages,
    en: enMessages,
  },
})

export default i18n
