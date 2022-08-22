import type { DefineComponent } from 'vue'

declare module 'vue' {
  export interface GlobalComponents {
    VChart: typeof import('vue-echarts')['default']
    VHeadCard: typeof import('@/components/VheadCard.vue')['default']
    Portal: DefineComponent<{
      disabled?: boolean
      name?: string
      order?: number
      slim?: boolean
      slotProps?: any
      tag?: string
      to: string
    }>
    PortalTarget: DefineComponent<{
      multiple?: boolean
      name: string
      slim?: boolean
      slotProps?: any
      tag?: string
      transition?: boolean | string | object
    }>
  }
}

export {}
