import type { ConfigFn } from 'postcss-load-config'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const postcssPresetEnv: typeof import('postcss-preset-env')['default'] = require('postcss-preset-env')

const config: ConfigFn = ({ env }) => ({
  plugins: [postcssPresetEnv({ stage: 3 })],
})

export default config
