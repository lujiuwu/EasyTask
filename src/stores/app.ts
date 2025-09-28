import type { TaskItem } from '@/types/TaskItem'
import _ from 'lodash'
import { defineStore } from 'pinia'
import { TaskStatus } from '@/enum/task_status'
import { TaskType } from '@/enum/task_type'

export const useAppStore = defineStore('app', {
  state: () => ({
    layoutMode: 'water-fall', // water-fall | normal-list
    theme: 'light', // light | dark,
    originalListData: [
      {
        title: '阅读任务',
        id: 1,
        type: TaskType.NORMAL,
        status: TaskStatus.UNFINISHED,
        createTime: '2025-09-25 10:00:00',
        content: [
          { key: 1, text: '读《JavaScript高级程序设计》' },
          { key: 2, text: '读《你不知道的JavaScript》' },
          { key: 3, text: '读《JavaScript设计模式与开发实践》' },
          { key: 4, text: '读《ES6标准入门》', done: true, finishTime: '12:00:00', remark: '读完了，感觉不错' },
          { key: 5, text: '读《JavaScript权威指南》' },
        ],
        chips: [
          { label: '重要', color: 'red', icon: 'mdi-alert' },
          { label: '计划表', color: 'black' },
        ],
      },
      {
        title: '锻炼任务',
        id: 2,
        type: TaskType.SCHEDULE,
        status: TaskStatus.UNFINISHED,
        createTime: '2025-09-21 11:20:45',
        content: [
          { key: 13, text: '做20个仰卧起坐' },
          { key: 14, text: '做20个深蹲' },
          { key: 15, text: '练习瑜伽30分钟' },
        ],
      },
      {
        title: '学习任务',
        id: 3,
        type: TaskType.NORMAL,
        status: TaskStatus.UNFINISHED,
        createTime: '2025-09-20 12:30:15',
        content: [
          { key: 6, text: '学习Vue3基础' },
          { key: 7, text: '学习TypeScript基础' },
          { key: 8, text: '学习Vue3进阶' },
          { key: 9, text: '学习Pinia状态管理' },
          { key: 10, text: '学习Vue Router路由管理' },
          { key: 11, text: '学习Vuetify UI框架' },
          { key: 12, text: '学习项目实战' },
        ],
      },
      {
        title: '生活任务',
        id: 4,
        type: TaskType.DAILY,
        status: TaskStatus.UNFINISHED,
        createTime: '2025-09-19 10:15:20',
        content: [
          { key: 16, text: '整理房间' },
          { key: 17, text: '做饭' },
          { key: 18, text: '购物' },
          { key: 19, text: '洗衣服' },
        ],
        chips: [
          { label: '养成习惯', color: 'pink', icon: 'mdi-home' },
        ],
      },
      {
        title: '工作任务',
        id: 5,
        type: TaskType.WORK,
        status: TaskStatus.UNFINISHED,
        createTime: '2025-09-27 17:01:22',
        content: [
          { key: 20, text: '完成项目需求分析' },
          { key: 21, text: '编写项目技术文档' },
          { key: 22, text: '进行代码评审' },
          { key: 23, text: '部署上线' },
        ],
      },
      {
        title: '周内计划',
        createTime: '2025-08-26 12:14:17',
        id: 6,
        type: TaskType.SCHEDULE,
        status: TaskStatus.UNFINISHED,
        content: [],
      },
      {
        title: '周末计划',
        createTime: '2025-09-11 08:10:17',
        id: 7,
        type: TaskType.SCHEDULE,
        status: TaskStatus.FINISHED,
        content: [
          { key: 24, text: '看电影', done: true, finishTime: '12:00:00', remark: '看完了，感觉不错' },
          { key: 25, text: '逛街', done: true, finishTime: '', remark: '购物清单' },
        ],
      },
    ] as unknown as TaskItem[],
    currentFilter: 'all' as TaskStatus | string,
  }),
  getters: {
    listData: state => {
      if (state.currentFilter === 'all') {
        return state.originalListData
      }
      return _.filter(state.originalListData, item => item.status === state.currentFilter as TaskStatus)
    },
  },
  actions: {
    setLayoutMode (mode: string) {
      this.layoutMode = mode
    },
    setTheme (theme: string) {
      this.theme = theme
    },
    toggleTheme () {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    },
    toggleListData (filter: TaskStatus | string) {
      this.currentFilter = filter
      console.log('Current filter:', filter)
      console.log('Filtered data:', this.listData)
    },
    addTask (task: TaskItem) {
      this.originalListData.push(task)
    },
    filterItem (cnt: string) {
      const list = [] as { title: string, to: string, supItem?: string }[]
      if (cnt === '') {
        return list
      }
      _.filter(this.originalListData, item => {
        if (item.title.includes(cnt)) {
          list.push({ title: item.title, to: '/tasks/' + item.id })
        }
        if (item.content.length > 0) {
          _.filter(item.content, subItem => {
            if (subItem.text && subItem.text.includes(cnt)) {
              list.push({ title: subItem.text, supItem: item.title, to: '/tasks/' + item.id })
            }
          })
        }
      })
      return list
    },
    deleteTask (id: number) {
      _.remove(this.originalListData, item => item.id === id)
    },
  },
})
