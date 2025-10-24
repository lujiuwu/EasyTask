export const useAccountStore = defineStore('account', {
  state: () => ({
    username: '',
    password: '',
  }),
  actions: {
    setUsername (username: string) {
      this.username = username
    },
    setPassword (password: string) {
      this.password = password
    },
  },
})
