import Router from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from '~pages'
import { isPermitted } from '@/utils/permission'
import type { InstallPlugin } from '@/utils/types'

export const routes = setupLayouts(generatedRoutes)

// https://github.com/hannoeru/vite-plugin-pages/issues/277
if (routes[0]?.children[0]?.name === 'all') {
  routes.push(routes.shift())
}

export const install: InstallPlugin = (vue) => {
  vue.use(Router)

  const router = new Router({
    mode: 'history',
    routes,
  })

  router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore()
    // Determine whether the user has logged in
    if (userStore.token) {
      if (to.path === '/login') {
        // If is logged in, redirect to the home page
        next({ path: '/' })
      } else {
        // Check whether the user has obtained his permission roles
        if (userStore.roles.length === 0) {
          try {
            await userStore.getUserInfo()
          } catch (e) {
            // Remove token and redirect to login page
            userStore.resetToken()
            Message.error(e)
            next('/login')
            return
          }
        }
        if (!to.meta?.roles || isPermitted(to.meta.roles)) {
          next()
          return
        }
        // Redirect to 404 error page(TODO) if not permitted
        next({ name: 'all' })
      }
    } else {
      if (to.path === '/login') {
        next()
      } else {
        next('/login')
      }
    }
  })

  return router
}
