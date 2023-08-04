import type { ConfigFn } from 'postcss-load-config'
import postcssPresetEnv from 'postcss-preset-env'

const config: ConfigFn = ({ env }) => ({
  plugins: [postcssPresetEnv({ stage: 3 })],
})

export default config
