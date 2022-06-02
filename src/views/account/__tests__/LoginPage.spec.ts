import LoginPage from '../LoginPage.vue'
import { createWrapper } from '@/../test/helpers'

test('Render correctly', async () => {
  const wrapper = createWrapper(LoginPage)
  expect(wrapper.text()).toContain('用户登录')
})
