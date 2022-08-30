import service from '@/utils/request'
export const ROLES = ['developer', 'admin', 'staff', 'guest'] as const
export type Role = typeof ROLES[number]
export type Group = {
  id?: number
  name: string
  permissions: number[]
}

export interface IUserData {
  id: number
  username: string
  name?: string
  email?: string
  groups: number[]
  date_joined: string
  last_login: string
}
export type LoginForm = {
  username: string
  password: string
}

export const getUsers = () => service.get<IUserData[]>('/users')

export const getUserByName = (username: string) =>
  service.get<IUserData>(`/users/${username}`)

export const createUser = (user: IUserData) => service.post('/users', user)

export const updateUser = (user: IUserData) =>
  service.patch(`/users/${user.username}`, user)

export const deleteUser = (user: IUserData) =>
  service.delete(`/users/${user.username}`)

export const login = (data: LoginForm) => service.post('/token', data)

export const logout = () => service.post('/users/logout')

export const refreshToken = (data: any) => service.post('/token/refresh', data)

export const getGroup = (id: number) => service.get(`/groups/${id}`)

export const getGroups = () => service.get<Group[]>('/groups')

export const resetPassword = (username: string, password: string) =>
  service.post(`/users/${username}/alter_user_password/`, {
    username,
    password,
  })

export const selfResetPassword = (
  username: string,
  old_password: string,
  new_password: string
) =>
  service.post(`/users/${username}/alter_user_password/`, {
    old_password,
    new_password,
  })
