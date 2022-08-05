import request from '@/utils/request'
import type { AxiosPromise } from 'axios'
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
  password: string
  first_name: string
  last_name: string
  email: string
  groups: number[]
  date_joined: string
  last_login: string
}
export type LoginForm = {
  username: string
  password: string
}

export const getUsers = (): AxiosPromise<IUserData[]> =>
  request({
    url: '/users',
    method: 'get',
  })

export const getUserInfo = (data: any) =>
  request({
    url: '/users/info',
    method: 'post',
    data,
  })

export const getUserByName = (username: string) =>
  request({
    url: `/users/${username}`,
    method: 'get',
  })

export const createUser = (user: IUserData) =>
  request({
    url: '/users',
    method: 'post',
    data: user,
  })

export const updateUser = (user: IUserData) =>
  request({
    url: `/users/${user.username}`,
    method: 'patch',
    data: user,
  })

export const deleteUser = (user: IUserData) =>
  request({
    url: `/users/${user.username}`,
    method: 'delete',
  })

export const login = (data: LoginForm) =>
  request({
    url: '/token',
    method: 'post',
    data,
  })

export const logout = () =>
  request({
    url: '/users/logout',
    method: 'post',
  })

export const refreshToken = (data: any) =>
  request({
    url: '/token/refresh',
    method: 'post',
    data,
  })

export const getGroup = (id: number) =>
  request({
    url: `/groups/${id}`,
    method: 'get',
  })

export const getGroups = () =>
  request({
    url: '/groups',
    method: 'get',
  })

export const resetPassword = (username: string, password: string) =>
  request({
    url: `/users/${username}/alter_user_password/`,
    method: 'post',
    data: {
      username,
      password,
    },
  })

export const selfResetPassword = (
  username: string,
  old_password: string,
  new_password: string
) =>
  request({
    url: `/users/${username}/set_password/`,
    method: 'post',
    data: {
      old_password,
      new_password,
    },
  })
