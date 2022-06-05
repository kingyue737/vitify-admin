import LoginPage from '../LoginPage.vue'
import { render, fireEvent } from '@testing-library/vue'
import Vuetify from 'vuetify'
import { PiniaVuePlugin } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import Router from 'vue-router'

describe('LoginPage', () => {
  it('Login correctly', async () => {
    const { getByText, getByLabelText } = render(
      LoginPage,
      {
        vuetify: new Vuetify(),
        pinia: createTestingPinia(),
        router: new Router(),
      },
      (vue) => {
        vue.use(PiniaVuePlugin)
      }
    )
    getByText('用户登录')
    const userInput = getByLabelText('用户名')
    await fireEvent.update(userInput, 'admin')

    const passwordInput = getByLabelText('密码')
    await fireEvent.update(passwordInput, 'admin')

    const button = getByText('登录')
    await fireEvent.click(button)

    const store = useUserStore()
    expect(store.login).toBeCalledWith({ username: 'admin', password: 'admin' })
  })
})
