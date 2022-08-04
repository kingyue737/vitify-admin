import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { castToVueI18n } from 'vue-i18n-bridge'

import en from '@/locales/en.json'
import zh from '@/locales/zh.json'

Vue.use(VueI18n, { bridge: true })

const i18n = castToVueI18n(
  createI18n(
    {
      legacy: false,
      locale: 'zh',
      messages: { zh, en },
      missingWarn: false,
      fallbackWarn: false,
    },
    VueI18n
  )
)
Vue.use(i18n)

export default i18n
