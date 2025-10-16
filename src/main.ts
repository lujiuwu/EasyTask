/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import { VueQueryPlugin } from '@tanstack/vue-query'
import { createHead } from '@vueuse/head'
import introJs from 'intro.js'
// Composables

import { createApp } from 'vue'
import { VueMasonryPlugin } from 'vue-masonry'
import Toast, { type PluginOptions } from 'vue-toastification'
import { useQueryClient } from '@/composables/useQueryClient'

// Plugins
import { registerPlugins } from '@/plugins'
import { i18n } from '@/plugins/i18n'

// Components
import App from './App.vue'
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

// 配置全局属性
app.config.globalProperties.$introJs = introJs

registerPlugins(app)

app.mount('#app')
