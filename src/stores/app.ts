import _ from 'lodash'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    layoutMode: 'water-fall', // water-fall | normal-list
    theme: 'light', // light | dark,
    filter: 'all', // all | finished | unfinished
  }),
  actions: {
    setLayoutMode (mode: string) {
      this.layoutMode = mode
    },
    setTheme (theme: string) {
      this.theme = theme
    },
  },
})
