/* Replace this component by Vue 3 built-in Teleport in the future */
import PortalVue from 'portal-vue'
import type { InstallPlugin } from '@/utils/types'

export const install: InstallPlugin = (vue) => {
  vue.use(PortalVue)
}
