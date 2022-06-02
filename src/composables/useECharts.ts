import type { PropType } from '@vue/composition-api'
import type { ECOption } from '@/plugins/echarts'
import { INIT_OPTIONS_KEY, THEME_KEY } from 'vue-echarts'
import { merge } from 'lodash'
import { useVuetify, useParsedTheme } from '@/plugins/vuetify'
export const defaultProps = {
  dataset: {
    type: Array as PropType<any[][]>,
    required: false,
    default: null,
  },
}

export function useDefaultOption(option: ECOption, toolbox: boolean): ECOption {
  const defaultOption: ECOption = {
    backgroundColor: 'transparent',
    // color: [getParsedTheme().primary.darken1],
    title: {
      show: false,
      left: 'center',
      textStyle: {
        fontWeight: 'bold',
      },
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: { animation: true },
      extraCssText: 'z-index: 2',
      appendToBody: true,
    },
    toolbox: {
      show: toolbox,
      feature: {
        dataZoom: { filterMode: 'none' },
        restore: {},
        saveAsImage: {
          backgroundColor: useVuetify()?.theme.dark ? '#100C2A' : 'auto',
          excludeComponents: ['toolbox', 'dataZoom'],
        },
      },
      iconStyle: {
        borderColor: useVuetify()?.theme.currentTheme.primary as string,
      },
    },
  }
  return merge(defaultOption, option)
}

export function defaultDataZoom(axis?: 'x' | 'y'): ECOption['dataZoom'] {
  const axisIndex = {
    xAxisIndex: axis === 'x' ? 0 : undefined,
    yAxisIndex: axis === 'y' ? 0 : undefined,
  }
  return [
    {
      filterMode: 'none',
      type: 'inside',
      ...axisIndex,
    },
    {
      filterMode: 'none',
      type: 'slider',
      ...axisIndex,
    },
  ]
}

export function defaultTimeAxis(): ECOption['xAxis'] {
  return {
    type: 'time',
    axisLabel: {
      formatter: {
        day: '{dayStyle|{MM}/{dd}}',
      },
      rich: {
        dayStyle: {
          fontWeight: 'bold',
        },
      },
    },
    axisLine: { show: true, onZero: false },
    axisTick: { show: true },
  }
}

export function defaultAxis(): ECOption['xAxis'] & ECOption['yAxis'] {
  return {
    type: 'value',
    nameLocation: 'middle',
    nameTextStyle: {
      padding: 20,
    },
    axisTick: { show: false },
    axisLine: { show: false },
  }
}

export function useChartGlobalOption() {
  const vuetify = useVuetify()
  provide(
    THEME_KEY,
    computed(() => (vuetify?.theme.dark ? 'dark' : undefined))
  )
  // provide(INIT_OPTIONS_KEY)
}
