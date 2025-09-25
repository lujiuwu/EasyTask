import { TaskType, TaskTypeDark } from '@/enum/task_type'

/**
 * 根据当前主题获取对应的任务类型颜色
 * @param taskType 任务类型
 * @param isDark 是否为暗色主题
 * @returns 对应的颜色值
 */
export function getTaskTypeColor (taskType: string, isDark: boolean): string {
  if (isDark) {
    // 暗色主题使用 TaskTypeDark
    switch (taskType) {
      case TaskType.NORMAL: {
        return TaskTypeDark.NORMAL
      }
      case TaskType.SCHEDULE: {
        return TaskTypeDark.SCHEDULE
      }
      case TaskType.IMPORTANT: {
        return TaskTypeDark.IMPORTANT
      }
      case TaskType.DAILY: {
        return TaskTypeDark.DAILY
      }
      case TaskType.WORK: {
        return TaskTypeDark.WORK
      }
      default: {
        return TaskTypeDark.NORMAL
      }
    }
  } else {
    // 亮色主题使用 TaskType
    return taskType
  }
}
