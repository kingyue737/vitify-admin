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
