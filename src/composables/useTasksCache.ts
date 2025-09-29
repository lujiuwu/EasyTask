import { useQueryClient } from '@tanstack/vue-query'

export function useTasksCache () {
  const queryClient = useQueryClient()

  const getCachedTasks = () => {
    return queryClient.getQueryData(['tasks'])
  }

  const isStale = () => {
    return queryClient.isStale(['tasks'])
  }

  return {
    getCachedTasks,
    isStale,
  }
}
