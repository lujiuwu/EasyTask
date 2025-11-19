import { TaskStatus, TaskType } from '@/enum/task'

export const taskTypeOptions = [
  { title: '普通任务', value: TaskType.NORMAL },
  { title: '计划任务', value: TaskType.SCHEDULE },
  { title: '重要任务', value: TaskType.IMPORTANT },
  { title: '日常任务', value: TaskType.DAILY },
  { title: '工作任务', value: TaskType.WORK },
]

export const chipsOptions = [
  '重要',
  '计划表',
  '养成习惯',
]

export const taskStatusOptions = [
  { title: t('tool-bar.filter.types.unfinished'), value: TaskStatus.UNFINISHED },
  { title: t('tool-bar.filter.types.finished'), value: TaskStatus.FINISHED },
]
