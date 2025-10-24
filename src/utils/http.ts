import axios, { type AxiosInstance, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'
import { SecureStorage } from './storage'

// 创建axios实例
const httpClient: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 1000 * 60 * 5,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 请求拦截器 - 自动添加认证头
httpClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 获取token并添加到请求头
    const tokenData = SecureStorage().getTokens()
    console.log('请求拦截器 - token数据:', tokenData)
    if (tokenData) {
      // 使用set方法设置headers
      // eslint-disable-next-line unicorn/no-array-for-each
      Object.entries(tokenData).forEach(([key, value]) => {
        config.headers.set(key, value as string)
      })
      console.log('请求拦截器 - 已添加认证头:', config.headers.get('Authorization'))
    } else {
      console.log('请求拦截器 - 没有找到token')
    }
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

// 响应拦截器 - 统一错误处理
httpClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  error => {
    // 处理401未授权错误
    if (error.response?.status === 401) {
      // 清除本地存储的认证信息
      localStorage.removeItem('auth_tokens')
      // 跳转到登录页
      window.location.href = '/auth'
      return Promise.reject(error)
    }

    // 其他错误处理将在组件中处理
    return Promise.reject(error)
  },
)

export default httpClient
