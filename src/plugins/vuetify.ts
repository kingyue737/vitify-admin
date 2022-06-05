import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import i18n from '@/locales'
import icons from './icons'
import type { VuetifyParsedTheme } from 'vuetify/types/services/theme'
import { Ripple, Resize, Scroll } from 'vuetify/lib/directives'
Vue.use(Vuetify, {
  directives: {
    Ripple,
    Resize,
    Scroll,
  },
})

const theme = {
  primary: '#0096C7',
  secondary: '#03A9F4',
  accent: '#9C27b0',
  info: '#00CAE3',
}

Vue.observable(theme)
export default new Vuetify({
  lang: {
    t: (key: string, ...params: (string | number)[]) =>
      i18n.t(key, params) as string,
  },
  theme: {
    themes: {
      dark: theme,
      light: theme,
    },
    options: { customProperties: true },
  },
  icons: {
    iconfont: 'mdiSvg',
    values: {
      ...icons,
    },
  },
  breakpoint: {
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1280,
      lg: 1920,
    },
    mobileBreakpoint: 'xs',
    scrollBarWidth: 0,
  },
})

export function useVuetify() {
  return getCurrentInstance()?.proxy.$vuetify
}

export function useParsedTheme() {
  // parsedTheme is only for internal usage and not typed in vuetify
  return (useVuetify()?.theme as any).parsedTheme as VuetifyParsedTheme
}
