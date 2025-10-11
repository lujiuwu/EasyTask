import yaml from 'js-yaml'
import { createI18n } from 'vue-i18n'

// 导入 YAML 文件
import chBar from '../../locales/ch/bar.yaml?raw'
import chIntro from '../../locales/ch/intro.yaml?raw'
import chTasks from '../../locales/ch/tasks.yaml?raw'
import chTool from '../../locales/ch/tool.yaml?raw'

import enBar from '../../locales/en/bar.yaml?raw'
import enIntro from '../../locales/en/intro.yaml?raw'
import enTasks from '../../locales/en/tasks.yaml?raw'
import enTool from '../../locales/en/tool.yaml?raw'

// 解析 YAML 文件
const chTasksData = yaml.load(chTasks) as Record<string, any>
const chIntroData = yaml.load(chIntro) as Record<string, any>
const chBarData = yaml.load(chBar) as Record<string, any>
const chToolData = yaml.load(chTool) as Record<string, any>
const enTasksData = yaml.load(enTasks) as Record<string, any>
const enIntroData = yaml.load(enIntro) as Record<string, any>
const enBarData = yaml.load(enBar) as Record<string, any>
const enToolData = yaml.load(enTool) as Record<string, any>
// 合并消息 - 使用深度合并保持嵌套结构
const chMessages = {
  ...chTasksData,
  ...chIntroData,
  ...chBarData,
  ...chToolData,
}
const enMessages = {
  ...enTasksData,
  ...enIntroData,
  ...enBarData,
  ...enToolData,
}

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
