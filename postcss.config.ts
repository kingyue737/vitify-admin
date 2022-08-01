// import postcssPresetEnv from 'postcss-preset-env'
import type { ConfigFn } from 'postcss-load-config'

const postcssPresetEnv =
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('postcss-preset-env') as typeof import('postcss-preset-env')

const config: ConfigFn = ({ env }) => ({
  plugins: [postcssPresetEnv({ stage: 3 })],
})

export default config
