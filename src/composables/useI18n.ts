import type { I18nKey } from '@/types/i18n'
import { useI18n as useVueI18n } from 'vue-i18n'
import { useAppStore } from '@/stores/app'
import { i18n } from '@/plugins/i18n'

export function useI18n (): {
  t: (key: I18nKey, ...args: any[]) => string
  locale: any
  availableLocales: any
  switchLocale: (newLocale: string) => void
} {
  const { t, locale, availableLocales } = useVueI18n()
  const appStore = useAppStore()

  /**
   * 切换语言
   * @param newLocale 新的语言代码
   */
  const switchLocale = (newLocale: string) => {
    if (availableLocales.includes(newLocale)) {
      locale.value = newLocale
      // 同步更新 i18n 实例的全局 locale
      i18n.global.locale.value = newLocale
      // 同步到 store 并持久化存储
      appStore.setLocale(newLocale)
    }
  }

  return {
    t,
    locale,
    availableLocales,
    switchLocale,
  }
}

// 导出 t 函数用于全局自动导入
// 直接使用 i18n 实例，避免在非 setup 顶层调用 useI18n()
export function t (key: I18nKey, ...args: any[]): string {
  return i18n.global.t(key, ...args)
}
