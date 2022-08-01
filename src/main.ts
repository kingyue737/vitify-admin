import Vue from 'vue'
import './plugins/composition-api'
import pinia from './plugins/pinia'
import router from './plugins/router'
import './plugins/components'
import vuetify from './plugins/vuetify'
import './plugins/echarts'
import './plugins/portal-vue'
import i18n from './plugins/i18n'
import App from './App.vue'
import '@/assets/styles/index.scss'

Vue.config.productionTip = false
const app = createApp({
  router,
  pinia,
  i18n,
  vuetify,
  render: () => h(App),
})
app.mount('#app')
