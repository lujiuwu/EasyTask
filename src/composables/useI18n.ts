import { useI18n as useVueI18n } from 'vue-i18n'

export function useI18n (): {
  t: (key: string, ...args: any[]) => string
  locale: any
  availableLocales: any
  switchLocale: (newLocale: string) => void
} {
  const { t, locale, availableLocales } = useVueI18n()

  /**
   * 切换语言
   * @param newLocale 新的语言代码
   */
  const switchLocale = (newLocale: string) => {
    if (availableLocales.includes(newLocale)) {
      locale.value = newLocale
    }
  }

  return {
    t,
    locale,
    availableLocales,
    switchLocale,
  }
}
