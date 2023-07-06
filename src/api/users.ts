import service from '@/utils/request'

export type Role = 'superuser' | 'admin' | 'staff'
export type Group = {
  id?: number
  name: Role
  permissions: number[]
}

export interface IUserData {
  id: number
  username: string
  name?: string
  email?: string
  groups: number[]
  joinDate: string
}

export type Token = {
  accessToken: string
  refreshToken: string
  // tokenType: string
  // expiresAt: number
  // issuedAt: number
  // refreshTokenExpiresAt: number
  // refreshTokenIssuedAt: number
}

export const getUsers = () => service.get<IUserData[]>('/users')

export const getUser = (userId: number) =>
  service.get<IUserData>(`/users/${userId}`)

export const createUser = (user: IUserData) => service.post('/users', user)

export const updateUser = (user: Partial<IUserData>) =>
  service.patch(`/users/${user.id}`, user)

export const deleteUser = (userId: number) => service.delete(`/users/${userId}`)

export const getToken = (username: string, password: string) =>
  service.post<Token>(
    '/auth/access-token',
    new URLSearchParams({ username, password }),
  )

export const refreshToken = (refreshToken: string) =>
  service.post<Token>('/auth/refresh-token', { refreshToken })

export const resetPassword = (newPassword: string, oldPassword: string) =>
  service.post(`/users/reset-password`, {
    newPassword,
    oldPassword,
  })

export const getGroup = (id: number) => service.get<Group>(`/groups/${id}`)

export const getGroups = () => service.get<Group[]>(`/groups`)
