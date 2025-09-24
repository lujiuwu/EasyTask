// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    layoutMode: 'water-fall', // waterfall | normal-list
  }),
  actions: {
    setLayoutMode (mode: string) {
      this.layoutMode = mode
    },
  },
})
