import type { VuetifyParsedTheme } from 'vuetify/types/services/theme'

export function useVuetify() {
  const instance = getCurrentInstance()
  if (!instance) {
    throw new Error(`useVuetify should be called in setup().`)
  }
  return instance.proxy.$vuetify
}

export function useParsedTheme() {
  // parsedTheme is only for internal usage and not typed in vuetify
  return (useVuetify().theme as any).parsedTheme as VuetifyParsedTheme
}
