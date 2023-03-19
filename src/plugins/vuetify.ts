import Vuetify from 'vuetify/lib'
import type { VuetifyParsedTheme } from 'vuetify/types/services/theme'
import { Ripple, Resize, Scroll } from 'vuetify/lib/directives'
import { useDark } from '@vueuse/core'
import en from 'vuetify/lib/locale/en'
import zh from 'vuetify/lib/locale/zh-Hans'
import type { InstallPlugin } from '@/utils/types'
import { filename } from '@/utils/string'
import type { Component } from 'vue'

const svgIcons = Object.fromEntries(
  Object.entries(
    import.meta.glob<Component>('@/assets/icons/*.svg', {
      eager: true,
      import: 'default',
    })
  ).map(([k, v]) => [filename(k), { component: v }])
)
const theme = {
  primary: localStorage.getItem('theme-primary') || '#0096C7',
  secondary: '#03A9F4',
  accent: '#9C27b0',
  info: '#00CAE3',
}

export const install: InstallPlugin = (vue) => {
  vue.use(Vuetify, {
    directives: {
      Ripple,
      Resize,
      Scroll,
    },
  })
  return new Vuetify({
    lang: {
      locales: { zh, en },
      current: 'en',
    },
    theme: {
      dark: useDark().value,
      themes: {
        dark: theme,
        light: theme,
      },
      options: {
        themeCache: {
          // https://vuetifyjs.com/features/theme/#section-30ad30e330c330b730e5
          get: (key: VuetifyParsedTheme) => {
            return localStorage.getItem(`parsed-theme-${key.primary.base}`)
          },
          set: (key: VuetifyParsedTheme, value: string) => {
            localStorage.setItem(`parsed-theme-${key.primary.base}`, value)
          },
        },
        customProperties: true,
      },
    },
    icons: {
      iconfont: 'mdiSvg',
      values: {
        ...svgIcons,
      },
    },
    breakpoint: {
      thresholds: {
        xs: 600,
        sm: 960,
        md: 1280,
        lg: 1920,
      },
      mobileBreakpoint: 'sm',
      scrollBarWidth: 0,
    },
  })
}
