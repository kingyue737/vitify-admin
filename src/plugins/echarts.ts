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
  PieChart,
  type PieSeriesOption,
  RadarChart,
  type RadarSeriesOption,
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
  VisualMapComponent,
  type VisualMapComponentOption,
} from 'echarts/components'

echarts.use([
  LineChart,
  BarChart,
  PieChart,
  RadarChart,
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
  VisualMapComponent,
])

export type ECOption = echarts.ComposeOption<
  | LineSeriesOption
  | BarSeriesOption
  | PieSeriesOption
  | RadarSeriesOption
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
  | VisualMapComponentOption
>

export default echarts
