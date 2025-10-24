export const useAccountStore = defineStore('account', {
  state: () => ({
    username: '',
    password: '',
    token: '',
  }),
  actions: {
    setUsername (username: string) {
      this.username = username
    },
    setPassword (password: string) {
      this.password = password
    },
    setToken (token: string) {
      this.token = token
    },
    getToken () {
      return this.token
    },
  },
})
