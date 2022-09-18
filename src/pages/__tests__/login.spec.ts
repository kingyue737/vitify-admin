import LoginPage from '../login.vue'
import { fireEvent } from '@testing-library/vue'
import { renderWithVuetify } from '@/../test/helpers'

describe('login page', () => {
  it('login correctly', async () => {
    const { getByText, getByLabelText } = renderWithVuetify(LoginPage)
    getByText('User Login')
    const userInput = getByLabelText('Username')
    await fireEvent.update(userInput, 'admin')

    const passwordInput = getByLabelText('Password')
    await fireEvent.update(passwordInput, 'admin123')

    const button = getByText('Login')
    await fireEvent.click(button)

    const store = useUserStore()
    expect(store.login).toBeCalledWith('admin', 'admin123')
  })
})
