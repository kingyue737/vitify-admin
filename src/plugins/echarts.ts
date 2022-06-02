import * as echarts from 'echarts/core'

import {
  LineChart,
  type LineSeriesOption,
  BarChart,
  type BarSeriesOption,
  EffectScatterChart,
  type EffectScatterSeriesOption,
  ScatterChart,
  type ScatterSeriesOption,
} from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import {
  DataZoomComponent,
  type DataZoomComponentOption,
  LegendComponent,
  type LegendComponentOption,
  TooltipComponent,
  type TooltipComponentOption,
  ToolboxComponent,
  type ToolboxComponentOption,
  GridComponent,
  type GridComponentOption,
  TitleComponent,
  type TitleComponentOption,
  MarkPointComponent,
  type MarkPointComponentOption,
  DatasetComponent,
  type DatasetComponentOption,
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
