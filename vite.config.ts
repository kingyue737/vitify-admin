import path from 'path'
import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'
import legacy from '@vitejs/plugin-legacy'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { createSvgPlugin } from '@kingyue/vite-plugin-vue2-svg'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Inspect from 'vite-plugin-inspect'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import browserslistToEsbuild from 'browserslist-to-esbuild'
import postcssPresetEnv from 'postcss-preset-env'
import regexpPlugin from 'rollup-plugin-regexp'
import * as mdicons from '@mdi/js'
import browserslist from 'browserslist'

const mdi: Record<string, string> = {}
Object.keys(mdicons).forEach((key) => {
  const value = (mdicons as Record<string, string>)[key]
  mdi[
    key
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
      .replace(/([0-9]+)/g, '-$1')
  ] = value
})

// https://vitejs.dev/config/
export default defineConfig({
  build: { target: browserslistToEsbuild() },
  server: {
    port: 9527,
  },
  plugins: [
    regexpPlugin({
      exclude: ['node_modules/**'],
      find: /\b(?<![/\w])(mdi-[\w-]+)\b(?!\.)/,
      replace: (match: string) => {
        if (mdi[match]) {
          return mdi[match]
        } else {
          console.warn('[plugin-regexp] No matched svg icon for ' + match)
          return match
        }
      },
      sourcemap: false,
    }),
    vue2(),
    Pages(),
    Layouts(),
    legacy({
      modernPolyfills: true,
      renderLegacyChunks: false,
      modernTargets: browserslist.loadConfig({
        path: path.resolve(__dirname),
      }),
    }),
    Components({
      resolvers: [
        {
          type: 'component',
          resolve: (name) => {
            const blackList = ['VChart', 'VHeadCard']
            if (name.match(/^V[A-Z]/) && !blackList.includes(name))
              return { name, from: 'vuetify/lib' }
          },
        },
      ],
      dirs: [],
      dts: false,
      types: [],
    }),
    AutoImport({
      imports: [
        'vue',
        'pinia',
        'vue-router/composables',
        { 'vue-i18n-bridge': ['useI18n'] },
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/stores'],
      vueTemplate: false,
    }),
    createSvgPlugin({
      svgoConfig: {
        plugins: [
          'cleanupEnableBackground',
          'removeDoctype',
          'removeMetadata',
          'removeComments',
          'removeXMLNS',
          'removeXMLProcInst',
          'sortDefsChildren',
          'convertTransform',
        ],
      },
    }),
    VueI18n({
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: false,
      include: [path.resolve(__dirname, 'src/locales/**')],
    }),
    Inspect(),
  ],
  css: {
    devSourcemap: true,
    preprocessorMaxWorkers: true,
    // https://vitejs.dev/config/#css-preprocessoroptions
    preprocessorOptions: {
      sass: {
        additionalData: [
          // vuetify variable overrides
          '@import "@/assets/styles/vuetify-variables.scss"',
          '',
        ].join('\n'),
      },
    },
    postcss: {
      plugins: [postcssPresetEnv({ stage: 3 })],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'vue-i18n-bridge':
        'vue-i18n-bridge/dist/vue-i18n-bridge.runtime.esm-bundler.js',
    },
  },
  test: {
    globals: true,
    include: ['test/**/*.test.ts', 'src/**/__tests__/*'],
    environment: 'jsdom',
    setupFiles: ['./test/vitest.setup.ts'],
    onConsoleLog(log) {
      /* Suppress EOL warning from vue-i18n */
      if (log.startsWith('vue-i18n-bridge v10')) return false
    },
  },
})
