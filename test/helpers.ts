import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'

type RelaxedVue = Vue & { [key: string]: any }

export interface MountResult<R> {
  composable: R
  vm: Vue
}

export interface MountOptions {
  provider?: () => void
}

export function mountComposable<R>(
  composable: () => R,
  options?: MountOptions
): MountResult<R> {
  const app = new Vue({
    setup() {
      options?.provider?.()

      const result = composable()
      const wrapper = () => result
      return { wrapper }
    },

    render(createElement) {
      return createElement('div')
    },
  }) as RelaxedVue

  app.$mount()

  return {
    composable: app.wrapper(),
    vm: app,
  }
}

export function createWrapper(
  component: Parameters<typeof mount>[0],
  options: Parameters<typeof mount>[1] = {},
  shallow = false
) {
  const localVue = createLocalVue()
  const vuetify = new Vuetify()
  const mountOptions = { vuetify, localVue, ...options }
  if (!shallow) {
    return mount<RelaxedVue>(component, mountOptions)
  } else {
    return shallowMount<RelaxedVue>(component, mountOptions)
  }
}
