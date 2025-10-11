import { QueryClient } from '@tanstack/vue-query'

export function useQueryClient () {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5分钟内数据被认为是新鲜的
        gcTime: 10 * 60 * 1000, // 10分钟后清理缓存
        refetchOnWindowFocus: false, // 禁用窗口焦点时自动刷新
        refetchOnReconnect: false, // 禁用重连时自动刷新
        refetchOnMount: true, // 只在组件挂载时刷新
        retry: 1, // 减少重试次数
      },
    },
  })

  return queryClient
}
