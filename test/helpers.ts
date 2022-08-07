import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify/lib'
import { PiniaVuePlugin } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { render } from '@testing-library/vue'
import Router from 'vue-router'
import Vue from 'vue'
import { install as installI18n } from '@/plugins/i18n'

export function mountComposable<T>(composable: () => T) {
  let result: T | undefined
  const app = new Vue({
    pinia: createTestingPinia(),
    setup() {
      result = composable()
      return () => {}
    },
  })
  Vue.use(PiniaVuePlugin)
  app.$mount(document.createElement('div'))

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
  const i18n = installI18n(localVue)
  const vuetify = new Vuetify()
  const mountOptions = { vuetify, localVue, i18n, ...options }
  if (!shallow) {
    return mount(component, mountOptions)
  } else {
    return shallowMount(component, mountOptions)
  }
}

export function renderWithVuetify(
  component: Parameters<typeof render>[0],
  options: Parameters<typeof render>[1] = {}
) {
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
      ...options,
    },
    (vue) => {
      const i18n = installI18n(vue)
      return { i18n }
    }
  )
}
