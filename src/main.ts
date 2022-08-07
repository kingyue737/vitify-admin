import Vue from 'vue'
import App from './App.vue'
import '@/assets/styles/index.scss'
import { filename } from './utils/string'
import type { InstallPlugin } from './utils/types'

if (import.meta.env.VITE_MOCK) {
  import('./mocks').then((module) =>
    module.worker.start({
      onUnhandledRequest: 'bypass',
    })
  )
}

Vue.config.productionTip = false
const app = new Vue({
  ...Object.fromEntries(
    Object.entries(
      import.meta.glob<{ install: InstallPlugin }>('./plugins/*.ts', {
        eager: true,
      })
    )
      .map(([k, v]) => [filename(k), v.install?.(Vue)] as [string, any])
      .filter((entry) => entry[1])
  ),
  render: (h) => h(App),
})
app.$mount('#app')
