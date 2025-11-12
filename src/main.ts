/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import { VueQueryPlugin } from '@tanstack/vue-query'
import VueDatePicker from '@vuepic/vue-datepicker'
import { createHead } from '@vueuse/head'
import introJs from 'intro.js'
// Composables

import { VueMasonryPlugin } from 'vue-masonry'
import Toast, { type PluginOptions } from 'vue-toastification'
import { useQueryClient } from '@/composables/useQueryClient'

// Plugins
import { registerPlugins } from '@/plugins'
import { i18n } from '@/plugins/i18n'

// Stores
import { useAppStore } from '@/stores/app'

// Components
import App from './App.vue'
import '@vuepic/vue-datepicker/dist/main.css'
import 'vue-toastification/dist/index.css'
import 'uno.css'

// Styles
import 'unfonts.css'
import 'intro.js/introjs.css'
import '@/assets/css/introjs.css'

const app = createApp(App)
const queryClient = useQueryClient()
const head = createHead()
const options: PluginOptions = {
  // You can set your default options here
}
app.use(head)
app.use(VueMasonryPlugin)
app.use(VueQueryPlugin, {
  queryClient,
})
app.use(Toast, options)
app.use(i18n)
app.component('VueDatePicker', VueDatePicker)
// 配置全局属性
app.config.globalProperties.$introJs = introJs

registerPlugins(app)

// 初始化应用状态
const appStore = useAppStore()
appStore.initLocale()
// 同步 store 中的语言设置到 i18n 实例
if (appStore.locale) {
  i18n.global.locale.value = appStore.locale
}

app.mount('#app')
