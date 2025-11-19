/**
 * 任务状态
 */
export enum TaskStatus {
  FINISHED = 'finished',
  UNFINISHED = 'unfinished',
  ALL = 'all',
}

/**
 * 任务类型
 */
export enum TaskType {
  NORMAL = '#FFFFFF',
  SCHEDULE = '#E0F2F1',
  IMPORTANT = '#FFCDD2',
  DAILY = '#E3F2FD',
  WORK = '#EDE7F6',
  ALL = 'all',
}

/**
 * 任务 -- 时间线类型
 */
export enum TaskTimelineItemType {
  CREATE = 'primary',
  CREATE_SUB_TASK = 'info',
  FINISH = 'success',
  UPDATE = 'warning',
  DELETE = 'error',
}

/**
 * 任务 -- 时间线图标
 */
export enum TaskTimelineItemIcon {
  CREATE = 'mdi-plus',
  CREATE_SUB_TASK = 'mdi-plus-circle',
  FINISH = 'mdi-check-underline',
  UPDATE = 'mdi-pencil',
  DELETE = 'mdi-delete',
}
