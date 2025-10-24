import { useAccountStore } from '@/stores/account'
const TOKEN_KEY = 'auth_tokens'

export function SecureStorage () {
  const accountStore = useAccountStore()
  // 存储token
  function setTokens (tokens: string) {
    try {
      localStorage.setItem(TOKEN_KEY, tokens)
      accountStore.setToken(tokens)
    } catch (error) {
      console.error('Failed to store tokens:', error)
    }
  }

  // 获取token
  function getTokens () {
    // 优先从localStorage获取token
    const storedToken = localStorage.getItem(TOKEN_KEY)
    if (storedToken) {
      return { Authorization: `Bearer ${storedToken}` }
    }
    
    // 如果localStorage没有，从store获取
    const originToken = accountStore.getToken()
    if (originToken) {
      return { Authorization: `Bearer ${originToken}` }
    }
    
    return null
  }
  return {
    setTokens,
    getTokens,
  }
}
