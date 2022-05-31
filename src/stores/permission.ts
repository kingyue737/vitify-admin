import { defineStore } from 'pinia'
import type { RouteConfig } from 'vue-router'
import type { Role } from '@/api/types'
import { isPermitted } from '@/utils/permission'
import { asyncRoutes, constantRoutes } from '@/router/'

const hasPermission = (roles: Role[], route: RouteConfig) => {
  if (route.meta?.roles) {
    return isPermitted(route.meta.roles, roles)
  } else {
    return true
  }
}

const filterAsyncRoutes = (routes: RouteConfig[], roles: Role[]) => {
  const res: RouteConfig[] = []
  routes.forEach((route) => {
    const r = { ...route }
    if (hasPermission(roles, r)) {
      if (r.children) {
        r.children = filterAsyncRoutes(r.children, roles)
      }
      res.push(r)
    }
  })
  return res
}

export const usePermissionStore = defineStore('permission', {
  state: () => {
    const routes: RouteConfig[] = []
    const dynamicRoutes: RouteConfig[] = []
    return {
      routes,
      dynamicRoutes,
    }
  },
  actions: {
    generateRoutes(roles: Role[]) {
      // @ts-ignore: unknown error
      this.routes = filterAsyncRoutes(asyncRoutes, roles).concat(constantRoutes)
      this.dynamicRoutes = this.routes
    },
  },
})
