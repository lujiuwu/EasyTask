import { computed } from 'vue'
import { useAccountStore } from '@/stores/account'
import { SecureStorage } from '@/utils/storage'

export function useAuth () {
  const accountStore = useAccountStore()

  // 获取认证头
  const getAuthHeaders = () => {
    return SecureStorage().getTokens()
  }

  // 检查是否已认证
  const isAuthenticated = computed(() => {
    const token = accountStore.getToken()
    return !!token
  })

  // 设置认证信息
  const setAuth = (token: string) => {
    accountStore.setToken(token)
    SecureStorage().setTokens(token)
  }

  // 清除认证信息
  const clearAuth = () => {
    accountStore.setToken('')
    localStorage.removeItem('auth_tokens')
  }

  return {
    getAuthHeaders,
    isAuthenticated,
    setAuth,
    clearAuth,
  }
}
