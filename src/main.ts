import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'

import App from './App.vue'
import VChart from 'vue-echarts'
import VHeadCard from '@/components/VHeadCard.vue'
import pinia from './plugins/pinia'
import router from './router/'
import '@/router/guards'
import vuetify from './plugins/vuetify'
import './plugins/echarts'
import i18n from '@/locales'
import '@/assets/styles/index.scss'

Vue.use(VueCompositionAPI)
Vue.config.productionTip = false

const app = createApp({
  router,
  pinia,
  i18n,
  vuetify,
  render: () => h(App),
})
app.component('VHeadCard', VHeadCard).component('VChart', VChart as any)

app.mount('#app')
