/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
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

const app = createApp(App)

app.use(VueMasonryPlugin)

registerPlugins(app)

app.mount('#app')
