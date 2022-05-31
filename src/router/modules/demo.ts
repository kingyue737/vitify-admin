import AppLayout from '@/views/layout/AppLayout.vue'
import type { RouteConfig } from 'vue-router'

const demoRoutes: RouteConfig[] = [
  {
    path: '/demo/demo-page',
    component: AppLayout,
    meta: {
      title: 'demoPage',
      icon: '$nustar',
      roles: ['developer'],
    },
    children: [
      {
        name: 'demoPage',
        path: '',
        components: {
          default: () => import('@/views/demo/DemoPage.vue'),
        },
      },
    ],
  },
]

export default demoRoutes
