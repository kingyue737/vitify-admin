export {}

import 'vue-router'
import type { RouteConfig } from 'vue-router'
import type { Role } from '@/api/users'

declare module 'vue-router' {
  interface RouteMeta {
    /** Drawer item icon */
    icon?: string
    /** Groups will be separated by divider line in drawer */
    drawerGroup?: 'admin' | 'PUC'
    /** Determine the order of item in drawer */
    drawerIndex?: number
    /** Drawer item and breadcrumb text */
    title?: string
    /** Subtitle in drawer item */
    subtitle?: string
    /** Authorized user groups */
    roles?: Role[]
    /** For cypress location */
    dataCy?: string
    /** Hide this route in drawer if truthy */
    hidden?: boolean
    /** Default is enabled */
    breadcrumb?: 'hidden' | 'disabled'
  }
  type RouteRecordRaw = RouteConfig // shim plugins for vue-router v4
}
