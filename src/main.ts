import Vue from 'vue'
import App from './App.vue'
import pinia from './plugins/pinia'
import router from './plugins/router'
import './plugins/components'
import vuetify from './plugins/vuetify'
import './plugins/echarts'
import './plugins/portal-vue'
import i18n from './plugins/i18n'
import '@/assets/styles/index.scss'

Vue.config.productionTip = false
const app = new Vue({
  router,
  pinia,
  i18n,
  vuetify,
  render: (h) => h(App),
})
app.$mount('#app')
