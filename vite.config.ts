import { fileURLToPath } from 'url'

import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import legacy from '@vitejs/plugin-legacy'
// @ts-ignore
import vueTemplateBabelCompiler from 'vue-template-babel-compiler'
import scriptSetup from 'unplugin-vue2-script-setup/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VuetifyResolver } from 'unplugin-vue-components/resolvers'
import { createSvgPlugin } from 'vite-plugin-vue2-svg'
import { splitVendorChunkPlugin } from 'vite'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   target: 'chrome88',
  // },
  server: {
    port: 9527,
  },
  plugins: [
    createVuePlugin({
      jsx: true,
      vueTemplateOptions: {
        compiler: vueTemplateBabelCompiler,
      },
    }),
    scriptSetup(),
    legacy({
      // Plugin does not use browserslistrc https://github.com/vitejs/vite/issues/2476
      modernPolyfills: ['web.structured-clone', 'es.array.at'],
      renderLegacyChunks: false,
      // ignoreBrowserslistConfig: true,
    }),
    Components({
      resolvers: [VuetifyResolver()],
      dts: false,
      types: [],
    }),
    AutoImport({
      imports: [
        '@vue/composition-api',
        'vue-router',
        'pinia',
        // "vue-i18n",
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/stores'],
      vueTemplate: false,
    }),
    createSvgPlugin(),
    splitVendorChunkPlugin(),
    Inspect(),
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
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    globals: true,
    include: ['test/**/*.test.ts', 'src/**/__tests__/*'],
    environment: 'jsdom',
    // deps: {
    //   inline: ['@vue', '@vueuse'],
    // },
    setupFiles: ['./test/vitest.setup.ts'],
  },
})
