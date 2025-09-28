/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import { VueQueryPlugin } from '@tanstack/vue-query'
import introJs from 'intro.js'
// Composables
import { createApp } from 'vue'

import { VueMasonryPlugin } from 'vue-masonry'
// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

import 'uno.css'

// Styles
import 'unfonts.css'
import 'intro.js/introjs.css'
import '@/assets/css/introjs.css'

const app = createApp(App)

app.use(VueMasonryPlugin)
app.use(VueQueryPlugin)
app.config.globalProperties.$introJs = introJs

registerPlugins(app)

app.mount('#app')
