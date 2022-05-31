import * as echarts from 'echarts/core'

import {
  LineChart,
  LineSeriesOption,
  BarChart,
  BarSeriesOption,
  EffectScatterChart,
  EffectScatterSeriesOption,
  ScatterChart,
  ScatterSeriesOption,
} from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import {
  DataZoomComponent,
  DataZoomComponentOption,
  LegendComponent,
  LegendComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  ToolboxComponent,
  ToolboxComponentOption,
  GridComponent,
  GridComponentOption,
  TitleComponent,
  TitleComponentOption,
  MarkPointComponent,
  MarkPointComponentOption,
  DatasetComponent,
  DatasetComponentOption,
} from 'echarts/components'

echarts.use([
  LineChart,
  BarChart,
  EffectScatterChart,
  ScatterChart,
  CanvasRenderer,
  DataZoomComponent,
  LegendComponent,
  TooltipComponent,
  ToolboxComponent,
  GridComponent,
  TitleComponent,
  MarkPointComponent,
  DatasetComponent,
])

export type ECOption = echarts.ComposeOption<
  | LineSeriesOption
  | BarSeriesOption
  | EffectScatterSeriesOption
  | ScatterSeriesOption
  | DataZoomComponentOption
  | LegendComponentOption
  | TooltipComponentOption
  | ToolboxComponentOption
  | GridComponentOption
  | TitleComponentOption
  | MarkPointComponentOption
  | DatasetComponentOption
>

export default echarts
