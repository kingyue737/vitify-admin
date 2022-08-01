import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import { PiniaVuePlugin } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { render } from '@testing-library/vue'
import Router from 'vue-router'
import VueI18n from 'vue-i18n'
import { createI18n, castToVueI18n } from 'vue-i18n-bridge'
import en from '@/locales/en.json'
import zh from '@/locales/zh.json'

const messages = { zh, en }
export function mountComposable<T>(composable: () => T) {
  let result: T | undefined
  const app = createApp({
    pinia: createTestingPinia(),
    setup() {
      result = composable()
      return () => {}
    },
  })
  app.use(PiniaVuePlugin)
  app.mount(document.createElement('div'))

  return {
    composable: result!,
    vm: app,
  }
}

export function createWrapper(
  component: Parameters<typeof mount>[0],
  options: Parameters<typeof mount>[1] = {},
  shallow = false
) {
  const localVue = createLocalVue()
  localVue.use(VueI18n, { bridge: true })
  const vuetify = new Vuetify()
  const i18n = castToVueI18n(
    createI18n(
      { legacy: false, locale: 'zh', messages, missingWarn: false },
      VueI18n
    )
  )
  localVue.use(i18n)
  const mountOptions = { vuetify, localVue, i18n, ...options }
  if (!shallow) {
    return mount(component, mountOptions)
  } else {
    return shallowMount(component, mountOptions)
  }
}

export function renderWithVuetify(component: Parameters<typeof render>[0]) {
  const root = document.createElement('div')
  root.setAttribute('data-app', 'true')
  return render(
    component,
    {
      container: document.body.appendChild(root),
      vuetify: new Vuetify(),
      pinia: createTestingPinia(),
      router: new Router(),
      stubs: ['Portal'],
    },
    (vue) => {
      vue.use(PiniaVuePlugin)
      vue.use(VueI18n, { bridge: true })
      const i18n = castToVueI18n(
        createI18n(
          { legacy: false, locale: 'zh', messages, missingWarn: false },
          VueI18n
        )
      )
      vue.use(i18n)
      return { i18n }
    }
  )
}
