import Vue from 'vue'
import VueI18n from 'vue-i18n'

// User defined lang
// @ts-expect-error the lib is not typed
import enLocal from 'vuetify/lib/locale/en'
// @ts-expect-error the lib is not typed
import zhLocal from 'vuetify/lib/locale/zh-Hans'

import en from '@/locales/en'
import zh from '@/locales/zh'

Vue.use(VueI18n)

const messages = {
  en: {
    ...en,
    $vuetify: enLocal,
  },
  zh: {
    ...zh,
    $vuetify: zhLocal,
  },
}

const i18n = new VueI18n({
  locale: 'zh',
  messages,
  silentTranslationWarn: true,
})

export default i18n
