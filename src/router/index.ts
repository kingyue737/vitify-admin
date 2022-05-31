import Vue from 'vue'
import Router, { type RouteConfig } from 'vue-router'
import AppLayout from '@/views/layout/AppLayout.vue'

/* Router modules */
import demoRoutes from '@/router/modules/demo'

Vue.use(Router)

/**
  Note: sub-menu only appear when children.length>=1
  Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
*/

/**
  name:'router-name'             the name field is required when using <keep-alive>, it should also match its component's name property
                                 detail see : https://vuejs.org/v2/guide/components-dynamic-async.html#keep-alive-with-Dynamic-Components
  meta: {
    roles: ['admin', 'editor']   will control the page roles (allow setting multiple roles)
    title: 'title'               the name showed in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon showed in the sidebar
    hidden: true                 if true, this route will not show in the sidebar (default is false)
    breadcrumb: false            if false, the item will be hidden in breadcrumb (default is true)
    noCache: true                if true, the page will not be cached (default is false)
  }
*/

/**
  ConstantRoutes
  a base page that does not have permission requirements
  all roles can be accessed
*/
export const constantRoutes: RouteConfig[] = [
  {
    path: '/login',
    component: () => import('@/views/account/LoginPage.vue'),
    meta: { hidden: true },
  },
  {
    path: '/',
    redirect: { path: '/demo/demo-page' },
    meta: { hidden: true },
  },
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes: RouteConfig[] = [
  ...demoRoutes,
  {
    path: '/user-manage',
    meta: {
      title: 'managerPage',
      icon: '$mdi-account-group',
      roles: ['admin'],
      drawerGroup: 'admin',
      dataCy: 'userManage',
    },
    component: AppLayout,
    children: [
      {
        name: 'userManage',
        path: '',
        component: () => import('@/views/account/UserManage.vue'),
      },
    ],
  },
  {
    path: '/reset-password',
    component: AppLayout,
    meta: { hidden: true },
    children: [
      {
        name: 'resetPassword',
        path: '',
        component: () => import('@/views/account/ResetPassword.vue'),
      },
    ],
  },
]

const createRouter = () =>
  new Router({
    mode: 'history',
    base: import.meta.env.BASE_URL,
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    routes: constantRoutes,
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  void ((router as any).matcher = (newRouter as any).matcher) // reset router
}

export default router
