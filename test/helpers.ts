import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify'

export function mountComposable(composable: () => any) {
  let result: ReturnType<typeof composable>
  const app = createApp({
    setup() {
      result = composable()
      return () => {}
    },
  })
  app.mount(document.createElement('div'))

  return {
    composable: result,
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
    return mount(component, mountOptions)
  } else {
    return shallowMount(component, mountOptions)
  }
}
