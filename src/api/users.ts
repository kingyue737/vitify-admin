import request from '@/utils/request'
import type { IUserData } from '@/api/types'

export const getUsers = () =>
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

export const login = (data: any) =>
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
