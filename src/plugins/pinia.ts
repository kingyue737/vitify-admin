import { createPinia, PiniaVuePlugin } from 'pinia'
import type { InstallPlugin } from '@/utils/types'

export const install: InstallPlugin = (vue) => {
  vue.use(PiniaVuePlugin)
  return createPinia()
}
