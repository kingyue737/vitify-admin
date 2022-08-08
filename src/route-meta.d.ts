export {}

import 'vue-router'
import type { Role } from '@/api/users'

declare module 'vue-router' {
  interface RouteMeta {
    icon?: string // drawer item icon
    drawerGroup?: 'admin' | 'PUC' // groups will be separated by divider line in drawer
    title?: string // drawer item and breadcrumb text
    subtitle?: string
    roles?: Role[] // authorized user groups
    dataCy?: string // for cypress location
    hidden?: boolean // hide this route in drawer if True
    breadcrumb?: 'hidden' | 'disabled' // default is enabled
  }
}
