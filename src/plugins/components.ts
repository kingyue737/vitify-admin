import VChart from 'vue-echarts'
import VHeadCard from '@/components/VHeadCard.vue'
import type { InstallPlugin } from '@/utils/types'

export const install: InstallPlugin = (vue) => {
  vue.component('VHeadCard', VHeadCard)
  vue.component('VChart', VChart)
}
