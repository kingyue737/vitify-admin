import Vue from 'vue'
Vue.config.devtools = false
Vue.config.productionTip = false
import VueCompositionAPI from '@vue/composition-api'
import Vuetify from 'vuetify'
// import { config } from '@vue/test-utils'

Vue.use(Vuetify)
Vue.use(VueCompositionAPI)

// config.mocks['$t'] = () => ''
// config.mocks['$tc'] = () => ''
