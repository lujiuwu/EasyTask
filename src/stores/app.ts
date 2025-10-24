import _ from 'lodash'
export const useAppStore = defineStore('app', {
  state: () => ({
    layoutMode: 'water-fall', // water-fall | normal-list
    filter: 'all', // all | finished | unfinished
    type: 'all', // all | normal | schedule | important | daily | work
    col: '1', // 1 | 2 | 4
    tabIndex: 'all', // all | normal | schedule | important | daily | work
    locale: 'en', // 当前语言设置
  }),
  actions: {
    setLayoutMode (mode: string) {
      this.layoutMode = mode
    },
    setFilter (filter: string) {
      this.filter = filter
    },
    setType (type: string) {
      this.type = type
    },
    setCol (col: string) {
      this.col = col
    },
    setTabIndex (tabIndex: string) {
      this.tabIndex = tabIndex
    },
    setLocale (locale: string) {
      this.locale = locale
      // 持久化存储到 localStorage
      localStorage.setItem('app-locale', locale)
    },
    // 从 localStorage 初始化语言设置
    initLocale () {
      const savedLocale = localStorage.getItem('app-locale')
      if (savedLocale && ['en', 'ch', 'ko'].includes(savedLocale)) {
        this.locale = savedLocale
      }
    },
  },
})
