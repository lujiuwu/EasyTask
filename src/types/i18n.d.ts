// 自动生成的 i18n 类型定义
// 请勿手动修改此文件

export type I18nKey = 'language.ch' | 'language.en' | 'language.ko' | 'language.actions.success' | 'language.actions.error' | 'login.username.label' | 'login.username.placeholder' | 'login.username.errors.min' | 'login.username.errors.max' | 'login.username.errors.regex' | 'login.password.label' | 'login.password.placeholder' | 'login.password.errors.min' | 'login.password.errors.max' | 'login.login' | 'login.register' | 'login.forgot-password' | 'login.remember-me' | 'login.login-success' | 'login.login-error' | 'tool-bar.filter.types.all' | 'tool-bar.filter.types.unfinished' | 'tool-bar.filter.types.finished' | 'tool-bar.col.types.oneLine' | 'tool-bar.col.types.twoLine' | 'tool-bar.col.types.card' | 'tool-bar.layout.types.list' | 'tool-bar.layout.types.grid' | 'tool-bar.layout.types.table' | 'tool-bar.sort.types.createTime' | 'tool-bar.sort.types.updateTime' | 'footer-nav.tasks' | 'footer-nav.milestones' | 'footer-nav.setting' | 'intro.alert.title' | 'intro.alert.open' | 'intro.alert.close' | 'intro.steps.first-step' | 'intro.steps.second-step' | 'intro.steps.prev-step' | 'intro.steps.next-step' | 'intro.steps.skip-step' | 'intro.steps.done-step' | 'intro.contents.first-step.title' | 'intro.contents.first-step.intro' | 'intro.contents.second-step.title' | 'intro.contents.second-step.intro' | 'intro.contents.third-step.title' | 'intro.contents.third-step.intro' | 'pages.tasks.title' | 'pages.tasks.placeholder' | 'pages.tasks.search.tasks' | 'pages.tasks.tabs.all' | 'pages.tasks.tabs.normal' | 'pages.tasks.tabs.schedule' | 'pages.tasks.tabs.important' | 'pages.tasks.tabs.daily' | 'pages.tasks.tabs.work' | 'pages.tasks.item.total-number' | 'pages.tasks.item.delete.title' | 'pages.tasks.item.delete.content' | 'pages.tasks.item.delete.cancel' | 'pages.tasks.item.delete.delete' | 'pages.tasks.item.detail.title' | 'pages.tasks.item.detail.id' | 'pages.tasks.item.detail.sub-tasks' | 'pages.tasks.item.detail.create-time' | 'pages.tasks.item.detail.update-time' | 'pages.tasks.item.detail.type' | 'pages.tasks.item.detail.status' | 'pages.tasks.item.detail.not-found' | 'pages.tasks.item.detail.add-sub-task' | 'pages.tasks.item.detail.save-changes' | 'pages.tasks.item.actions.finish' | 'pages.tasks.item.actions.delete' | 'pages.tasks.item.actions.edit' | 'pages.tasks.item.actions.cancel' | 'pages.tasks.item.actions.confirm' | 'pages.tasks.star.title' | 'pages.tasks.star.id' | 'pages.tasks.star.tasks-id' | 'pages.tasks.star.star-time' | 'pages.milestones.title' | 'pages.milestones.placeholder' | 'pages.milestones.search.milestones' | 'pages.milestones.item.total-number' | 'pages.milestones.item.delete.title' | 'pages.milestones.item.delete.content' | 'pages.milestones.item.delete.cancel' | 'pages.milestones.item.delete.delete' | 'pages.milestones.item.detail.title' | 'pages.milestones.item.detail.id' | 'pages.milestones.item.detail.sub-tasks' | 'pages.milestones.item.detail.create-time' | 'pages.milestones.item.detail.start-at' | 'pages.milestones.item.detail.target-at' | 'pages.milestones.item.detail.type' | 'pages.milestones.item.detail.status' | 'pages.milestones.item.detail.not-found' | 'pages.milestones.item.detail.add-sub-task' | 'pages.milestones.item.detail.save-changes' | 'pages.milestones.item.table.id' | 'pages.milestones.item.table.create-time' | 'pages.milestones.item.table.target-at' | 'pages.milestones.item.table.mark' | 'pages.milestones.item.table.description' | 'pages.setting.title' | 'pages.setting.placeholder' | 'pages.setting.user.function.switchLanguage.title' | 'pages.setting.user.function.switchLanguage.cancel' | 'pages.setting.user.function.switchLanguage.confirm' | 'pages.setting.user.function.switchLanguage.language' | 'pages.setting.user.function.switchLanguage.languages.ch' | 'pages.setting.user.function.switchLanguage.languages.en' | 'pages.setting.user.function.switchLanguage.languages.ko' | 'pages.setting.user.function.login-out.title' | 'pages.setting.user.function.login-out.cancel' | 'pages.setting.user.function.login-out.confirm' | 'pages.setting.useful-functions.title' | 'pages.setting.useful-functions.items.about-system' | 'pages.setting.useful-functions.items.about-account' | 'pages.setting.useful-functions.items.prefer-setting' | 'pages.setting.other.title' | 'pages.setting.other.items.other-functions'

export interface I18nMessages {
  language: I18nMessages_Language
  login: I18nMessages_Login
  'tool-bar': I18nMessages_Tool_Bar
  'footer-nav': I18nMessages_Footer_Nav
  intro: I18nMessages_Intro
  pages: I18nMessages_Pages
}

export interface I18nMessages_Language {
  ch: string
  en: string
  ko: string
  actions: I18nMessages_Language_Actions
}

export interface I18nMessages_Language_Actions {
  success: string
  error: string
}

export interface I18nMessages_Login {
  username: I18nMessages_Login_Username
  password: I18nMessages_Login_Password
  login: string
  register: string
  'forgot-password': string
  'remember-me': string
  'login-success': string
  'login-error': string
}

export interface I18nMessages_Login_Username {
  label: string
  placeholder: string
  errors: I18nMessages_Login_Username_Errors
}

export interface I18nMessages_Login_Username_Errors {
  min: string
  max: string
  regex: string
}

export interface I18nMessages_Login_Password {
  label: string
  placeholder: string
  errors: I18nMessages_Login_Password_Errors
}

export interface I18nMessages_Login_Password_Errors {
  min: string
  max: string
}

export interface I18nMessages_Tool_Bar {
  filter: I18nMessages_Tool_Bar_Filter
  col: I18nMessages_Tool_Bar_Col
  layout: I18nMessages_Tool_Bar_Layout
  sort: I18nMessages_Tool_Bar_Sort
}

export interface I18nMessages_Tool_Bar_Filter {
  types: I18nMessages_Tool_Bar_Filter_Types
}

export interface I18nMessages_Tool_Bar_Filter_Types {
  all: string
  unfinished: string
  finished: string
}

export interface I18nMessages_Tool_Bar_Col {
  types: I18nMessages_Tool_Bar_Col_Types
}

export interface I18nMessages_Tool_Bar_Col_Types {
  oneLine: string
  twoLine: string
  card: string
}

export interface I18nMessages_Tool_Bar_Layout {
  types: I18nMessages_Tool_Bar_Layout_Types
}

export interface I18nMessages_Tool_Bar_Layout_Types {
  list: string
  grid: string
  table: string
}

export interface I18nMessages_Tool_Bar_Sort {
  types: I18nMessages_Tool_Bar_Sort_Types
}

export interface I18nMessages_Tool_Bar_Sort_Types {
  createTime: string
  updateTime: string
}

export interface I18nMessages_Footer_Nav {
  tasks: string
  milestones: string
  setting: string
}

export interface I18nMessages_Intro {
  alert: I18nMessages_Intro_Alert
  steps: I18nMessages_Intro_Steps
  contents: I18nMessages_Intro_Contents
}

export interface I18nMessages_Intro_Alert {
  title: string
  open: string
  close: string
}

export interface I18nMessages_Intro_Steps {
  'first-step': string
  'second-step': string
  'prev-step': string
  'next-step': string
  'skip-step': string
  'done-step': string
}

export interface I18nMessages_Intro_Contents {
  'first-step': I18nMessages_Intro_Contents_First_Step
  'second-step': I18nMessages_Intro_Contents_Second_Step
  'third-step': I18nMessages_Intro_Contents_Third_Step
}

export interface I18nMessages_Intro_Contents_First_Step {
  title: string
  intro: string
}

export interface I18nMessages_Intro_Contents_Second_Step {
  title: string
  intro: string
}

export interface I18nMessages_Intro_Contents_Third_Step {
  title: string
  intro: string
}

export interface I18nMessages_Pages {
  tasks: I18nMessages_Pages_Tasks
  milestones: I18nMessages_Pages_Milestones
  setting: I18nMessages_Pages_Setting
}

export interface I18nMessages_Pages_Tasks {
  title: string
  placeholder: string
  search: I18nMessages_Pages_Tasks_Search
  tabs: I18nMessages_Pages_Tasks_Tabs
  item: I18nMessages_Pages_Tasks_Item
  star: I18nMessages_Pages_Tasks_Star
}

export interface I18nMessages_Pages_Tasks_Search {
  tasks: string
}

export interface I18nMessages_Pages_Tasks_Tabs {
  all: string
  normal: string
  schedule: string
  important: string
  daily: string
  work: string
}

export interface I18nMessages_Pages_Tasks_Item {
  'total-number': string
  delete: I18nMessages_Pages_Tasks_Item_Delete
  detail: I18nMessages_Pages_Tasks_Item_Detail
  actions: I18nMessages_Pages_Tasks_Item_Actions
}

export interface I18nMessages_Pages_Tasks_Item_Delete {
  title: string
  content: string
  cancel: string
  delete: string
}

export interface I18nMessages_Pages_Tasks_Item_Detail {
  title: string
  id: string
  'sub-tasks': string
  'create-time': string
  'update-time': string
  type: string
  status: string
  'not-found': string
  'add-sub-task': string
  'save-changes': string
}

export interface I18nMessages_Pages_Tasks_Item_Actions {
  finish: string
  delete: string
  edit: string
  cancel: string
  confirm: string
}

export interface I18nMessages_Pages_Tasks_Star {
  title: string
  id: string
  'tasks-id': string
  'star-time': string
}

export interface I18nMessages_Pages_Milestones {
  title: string
  placeholder: string
  search: I18nMessages_Pages_Milestones_Search
  item: I18nMessages_Pages_Milestones_Item
}

export interface I18nMessages_Pages_Milestones_Search {
  milestones: string
}

export interface I18nMessages_Pages_Milestones_Item {
  'total-number': string
  delete: I18nMessages_Pages_Milestones_Item_Delete
  detail: I18nMessages_Pages_Milestones_Item_Detail
  table: I18nMessages_Pages_Milestones_Item_Table
}

export interface I18nMessages_Pages_Milestones_Item_Delete {
  title: string
  content: string
  cancel: string
  delete: string
}

export interface I18nMessages_Pages_Milestones_Item_Detail {
  title: string
  id: string
  'sub-tasks': string
  'create-time': string
  'start-at': string
  'target-at': string
  type: string
  status: string
  'not-found': string
  'add-sub-task': string
  'save-changes': string
}

export interface I18nMessages_Pages_Milestones_Item_Table {
  id: string
  'create-time': string
  'target-at': string
  mark: string
  description: string
}

export interface I18nMessages_Pages_Setting {
  title: string
  placeholder: string
  user: I18nMessages_Pages_Setting_User
  'useful-functions': I18nMessages_Pages_Setting_Useful_Functions
  other: I18nMessages_Pages_Setting_Other
}

export interface I18nMessages_Pages_Setting_User {
  function: I18nMessages_Pages_Setting_User_Function
}

export interface I18nMessages_Pages_Setting_User_Function {
  switchLanguage: I18nMessages_Pages_Setting_User_Function_SwitchLanguage
  'login-out': I18nMessages_Pages_Setting_User_Function_Login_Out
}

export interface I18nMessages_Pages_Setting_User_Function_SwitchLanguage {
  title: string
  cancel: string
  confirm: string
  language: string
  languages: I18nMessages_Pages_Setting_User_Function_SwitchLanguage_Languages
}

export interface I18nMessages_Pages_Setting_User_Function_SwitchLanguage_Languages {
  ch: string
  en: string
  ko: string
}

export interface I18nMessages_Pages_Setting_User_Function_Login_Out {
  title: string
  cancel: string
  confirm: string
}

export interface I18nMessages_Pages_Setting_Useful_Functions {
  title: string
  items: I18nMessages_Pages_Setting_Useful_Functions_Items
}

export interface I18nMessages_Pages_Setting_Useful_Functions_Items {
  'about-system': string
  'about-account': string
  'prefer-setting': string
}

export interface I18nMessages_Pages_Setting_Other {
  title: string
  items: I18nMessages_Pages_Setting_Other_Items
}

export interface I18nMessages_Pages_Setting_Other_Items {
  'other-functions': string
}



declare module 'vue-i18n' {
  interface DefineLocaleMessage extends I18nMessages {}
}

declare module '@intlify/core-base' {
  interface DefineLocaleMessage extends I18nMessages {}
}
