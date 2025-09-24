import type { TaskItem } from './type'
export const listData: Array<TaskItem> = [
  {
    title: '阅读任务',
    id: 1,
    content: [
      { key: 1, text: '读《JavaScript高级程序设计》' },
      { key: 2, text: '读《你不知道的JavaScript》' },
      { key: 3, text: '读《JavaScript设计模式与开发实践》' },
      { key: 4, text: '读《ES6标准入门》', done: true },
      { key: 5, text: '读《JavaScript权威指南》' },
    ],
    chips: [
      { label: '重要', color: 'red', icon: 'mdi-alert' },
      { label: '计划表', color: 'yellow' },
    ],
  },
  {
    title: '锻炼任务',
    id: 2,
    content: [
      { key: 13, text: '做20个仰卧起坐' },
      { key: 14, text: '做20个深蹲' },
      { key: 15, text: '练习瑜伽30分钟' },
    ],
  },
  {
    title: '学习任务',
    id: 3,
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
    content: [
      { key: 20, text: '完成项目需求分析' },
      { key: 21, text: '编写项目技术文档' },
      { key: 22, text: '进行代码评审' },
      { key: 23, text: '部署上线' },
    ],
  },
]
