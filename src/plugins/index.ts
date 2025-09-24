/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
// Types

// plugins/index.ts
import type { App } from 'vue'
import { createPinia } from 'pinia'
import router from '../router'
import vuetify from './vuetify'

export function registerPlugins (app: App) {
  const pinia = createPinia()
  // 正确的注册顺序：
  app.use(pinia)
  app.use(vuetify)
  app.use(router)
}
