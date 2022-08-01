import LoginPage from '../login.vue'
import { fireEvent } from '@testing-library/vue'
import { renderWithVuetify } from '@/../test/helpers'

describe('login page', () => {
  it('login correctly', async () => {
    const { getByText, getByLabelText } = renderWithVuetify(LoginPage)
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
