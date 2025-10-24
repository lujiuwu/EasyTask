import type { I18nKey } from '@/types/i18n'
import { useI18n as useVueI18n } from 'vue-i18n'
import { useAppStore } from '@/stores/app'

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
