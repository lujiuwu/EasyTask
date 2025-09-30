import { QueryClient } from '@tanstack/vue-query'

export function useQueryClient () {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5分钟内数据被认为是新鲜的
        gcTime: 10 * 60 * 1000, // 10分钟后清理缓存
        refetchInterval: 5 * 60 * 1000,
      },
    },
  })

  return queryClient
}
