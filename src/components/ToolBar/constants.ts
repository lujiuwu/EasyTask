import type { I18nKey } from '@/types/i18n'
import { TaskStatus } from '@/enum/task_status'

export function getFilterItems (t: (key: I18nKey, ...args: any[]) => string) {
  return [
    { label: t('tool-bar.filter.types.all'), value: TaskStatus.ALL, icon: 'mdi-format-list-checks' },
    { label: t('tool-bar.filter.types.unfinished'), value: TaskStatus.UNFINISHED, icon: 'mdi-format-list-bulleted' },
    { label: t('tool-bar.filter.types.finished'), value: TaskStatus.FINISHED, icon: 'mdi-check' },
  ]
}

export function getLayoutItems (t: (key: I18nKey, ...args: any[]) => string) {
  return [
    { label: t('tool-bar.layout.types.list'), value: 'normal-list', icon: 'mdi-view-list' },
    { label: t('tool-bar.layout.types.grid'), value: 'water-fall', icon: 'mdi-view-grid' },
  ]
}

export function getColItems (t: (key: I18nKey, ...args: any[]) => string) {
  return [
    { label: t('tool-bar.col.types.oneLine'), value: '1', icon: 'mdi-land-rows-horizontal' },
    { label: t('tool-bar.col.types.twoLine'), value: '2', icon: 'mdi-format-columns' },
    { label: t('tool-bar.col.types.card'), value: '4', icon: 'mdi-apps' },
  ]
}

export function getSortItems (t: (key: I18nKey, ...args: any[]) => string) {
  return [
    { label: t('tool-bar.sort.types.createTime'), value: 'createTime', icon: 'mdi-sort-clock-descending' },
    { label: t('tool-bar.sort.types.updateTime'), value: 'updateTime', icon: 'mdi-sort-bool-descending' },
  ]
}
