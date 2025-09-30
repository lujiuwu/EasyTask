import { useQueryClient } from '@tanstack/vue-query'

export function useTasksCache () {
  const queryClient = useQueryClient()

  const getCachedTasks = () => {
    return queryClient.getQueryData(['tasks'])
  }

  const isStale = () => {
    const query = queryClient.getQueryCache().find({ queryKey: ['tasks'] })
    return query ? query.isStale() : true
  }

  return {
    getCachedTasks,
    isStale,
  }
}
