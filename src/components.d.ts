declare module '@vue/runtime-dom' {
  export interface GlobalComponents {
    VChart: typeof import('vue-echarts')['default']
    VHeadCard: typeof import('@/components/VheadCard.vue')['default']
  }
}

export {}
