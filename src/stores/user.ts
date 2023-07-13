import {
  getToken,
  getUser,
  refreshToken,
  getGroup,
  type Role,
} from '@/api/users'

export const useUserStore = defineStore('user', {
  state: () => {
    const roles: Role[] = []
    return {
      name: localStorage.getItem('username') || '',
      id: parseInt(localStorage.getItem('id') || '-1'),
      token: localStorage.getItem('access') || '',
      roles,
    }
  },
  actions: {
    async login(username: string, password: string) {
      const { data } = await getToken(username, password)
      Object.entries({
        access: data.accessToken,
        refresh: data.refreshToken,
        username,
      }).map(([k, v]: [string, string]) => localStorage.setItem(k, v))
      this.token = data.accessToken
      this.name = username
      await this.getUserInfo()
      useMessageStore().$reset()
    },
    async getUserInfo() {
      const { data: user } = await getUser(this.id)
      const { groups } = user
      // roles must be a non-empty array
      if (!groups || groups.length <= 0) {
        throw Error('getUserInfo: roles must be a non-null array!')
      }
      const roles: Role[] = []
      for (const id of groups) {
        roles.push((await getGroup(id)).data.name)
      }
      this.roles = roles
      localStorage.setItem('id', user.id.toString())
      this.id = user.id
    },
    logOut() {
      ;['access', 'refresh', 'username'].forEach((k) =>
        localStorage.removeItem(k)
      )
      this.$reset()
    },
    async refreshToken() {
      const response = await refreshToken(localStorage.getItem('refresh')!)
      localStorage.setItem('access', response.data.accessToken)
      localStorage.setItem('fresh', response.data.refreshToken)
      this.token = response.data.accessToken
      return response
    },
  },
})
