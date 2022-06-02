import router from './index'
import type { Route, RouteConfig } from 'vue-router'
import i18n from '@/locales'

const whiteList = ['/login']
const auth = import.meta.env.VITE_AUTH === 'true'

// Dynamically add accessible routes
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
          if (auth) {
            await userStore.getUserInfo()
          } else {
            userStore.setNoAuthUserInfo()
          }
          const permissionStore = usePermissionStore()
          permissionStore.generateRoutes(userStore.roles)
          permissionStore.dynamicRoutes.forEach((route) =>
            router.addRoute(route as RouteConfig)
          )
          // Hack: ensure addRoutes is complete
          // Set the replace: true, so the navigation will not leave a history record
          next({ path: to.fullPath, replace: true })
        } catch (err) {
          // Remove token and redirect to login page
          userStore.resetToken()
          Message.error(err || 'Has Error')
          next('/login')
        }
      } else {
        next()
      }
    }
  } else {
    // Has no token
    if (whiteList.indexOf(to.path) !== -1) {
      // In the free login whitelist, go directly
      next()
    } else {
      // Other pages that do not have permission to access are redirected to the login page.
      next('/login')
    }
  }
})

router.afterEach((to: Route) => {
  document.title = getPageTitle(
    to.meta?.title || to.matched[0].meta?.title || ''
  )
})

const getPageTitle = (key: string) => {
  const hasKey = i18n.te(key)
  if (hasKey) {
    const pageName = i18n.t(key)
    return `${pageName} | 核星前端解决方案`
  }
  return '核星前端解决方案'
}
