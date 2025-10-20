import _ from 'lodash'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    layoutMode: 'water-fall', // water-fall | normal-list
    filter: 'all', // all | finished | unfinished
    type: 'all', // all | normal | schedule | important | daily | work
    col: '1', // 1 | 2 | 4
    tabIndex: 'all', // all | normal | schedule | important | daily | work
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
  },
})
