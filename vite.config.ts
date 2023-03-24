import path from 'path'
import { defineConfig } from 'vite'
import vue2 from '@vitejs/plugin-vue2'
import legacy from '@vitejs/plugin-legacy'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { createSvgPlugin } from '@kingyue/vite-plugin-vue2-svg'
import { splitVendorChunkPlugin } from 'vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Inspect from 'vite-plugin-inspect'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import browserslistToEsbuild from 'browserslist-to-esbuild'
import Replace from '@rollup/plugin-replace'
import * as mdicons from '@mdi/js'
import { mapKeys, kebabCase } from 'lodash'

// https://vitejs.dev/config/
export default defineConfig({
  build: { target: browserslistToEsbuild() },
  server: {
    port: 9527,
  },
  plugins: [
    vue2(),
    Pages(),
    Layouts(),
    legacy({
      modernPolyfills: true,
      renderLegacyChunks: false,
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
    splitVendorChunkPlugin(),
    VueI18n({
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: false,
      include: [path.resolve(__dirname, 'src/locales/**')],
    }),
    Inspect(),
    Replace({
      exclude: ['node_modules/**', 'src/plugins/vuetify.ts'],
      values: mapKeys(mdicons, (v, k) => kebabCase(k)),
      sourceMap: false,
      preventAssignment: false,
    }),
  ],
  css: {
    devSourcemap: true,
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
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'vue-echarts': 'vue-echarts/dist/index.esm.min.js',
      'vue-i18n-bridge':
        'vue-i18n-bridge/dist/vue-i18n-bridge.runtime.esm-bundler.js',
    },
  },
  test: {
    alias: { vue: 'vue/dist/vue.runtime.mjs' },
    globals: true,
    include: ['test/**/*.test.ts', 'src/**/__tests__/*'],
    environment: 'jsdom',
    deps: {
      inline: ['vuetify', '@vueuse', 'echarts'],
    },
    setupFiles: ['./test/vitest.setup.ts'],
  },
})
