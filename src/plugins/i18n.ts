import yaml from 'js-yaml'
import { createI18n } from 'vue-i18n'
import type { I18nMessages } from '@/types/i18n'

// 导入 YAML 文件
import chIndex from '../../locales/ch/index.yaml?raw'
import enIndex from '../../locales/en/index.yaml?raw'
import koIndex from '../../locales/ko/index.yaml?raw'

// 解析 YAML 文件
const chMessages = yaml.load(chIndex) as I18nMessages
const enMessages = yaml.load(enIndex) as I18nMessages
const koMessages = yaml.load(koIndex) as I18nMessages

// 从 localStorage 获取保存的语言设置
function getInitialLocale () {
  const savedLocale = localStorage.getItem('app-locale')
  return savedLocale && ['en', 'ch', 'ko'].includes(savedLocale) ? savedLocale : 'en'
}

// 创建 i18n 实例
export const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: getInitialLocale(), // 从 localStorage 读取初始语言
  fallbackLocale: 'en', // 回退语言
  messages: {
    ch: chMessages,
    en: enMessages,
    ko: koMessages,
  },
})

export default i18n
