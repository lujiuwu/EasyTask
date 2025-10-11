import { TaskStatus } from '@/enum/task_status'

export const filterItems = [
  { label: '全部', value: TaskStatus.ALL, icon: 'mdi-format-list-checks' },
  { label: '未完成', value: TaskStatus.UNFINISHED, icon: 'mdi-format-list-bulleted' },
  { label: '已完成', value: TaskStatus.FINISHED, icon: 'mdi-check' },
]
export const layoutItems = [
  { label: '列表', value: 'normal-list', icon: 'mdi-view-list' },
  { label: '瀑布', value: 'water-fall', icon: 'mdi-view-grid' },
]

export const colItems = [
  { label: '一列', value: '1', icon: 'mdi-land-rows-horizontal' },
  { label: '两列', value: '2', icon: 'mdi-format-columns' },
  { label: '卡片', value: '4', icon: 'mdi-apps' },
]

export const sortItems = [
  { label: '最近创建', value: 'createTime', icon: 'mdi-sort-clock-descending' },
  { label: '最近更新', value: 'updateTime', icon: 'mdi-sort-bool-descending' },
]
