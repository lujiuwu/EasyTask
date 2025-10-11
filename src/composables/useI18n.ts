import { useI18n as useVueI18n } from 'vue-i18n'

export function useI18n () {
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
