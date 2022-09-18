import { setupWorker, rest } from 'msw'
import type { IUserData, Token } from '@/api/users'

const baseURL =
  import.meta.env.VITE_API_URL ||
  `${window.location.protocol}//${window.location.hostname}:9529/api/v1`
const url = (path: string) => {
  return baseURL + path
}

const groups = [
  { id: 1, name: 'admin' },
  { id: 2, name: 'staff' },
]

export const worker = setupWorker(
  rest.get(url('/users/:id'), (req, res, ctx) => {
    return res(ctx.json({ id: 99, groups: [1] }))
  }),
  rest.get(url('/users'), (req, res, ctx) => {
    return res(
      ctx.json<IUserData[]>([
        {
          id: 1,
          groups: [1],
          username: 'kingyue737',
          name: 'Yue JIN',
          email: 'yuejin13@fudan.edu.cn',
          joinDate: '2021-11-08T07:35:09.709Z',
        },
        {
          id: 2,
          groups: [1],
          username: 'lodgepole',
          name: 'Ada Zhang',
          email: '',
          joinDate: '2021-04-08T23:45:09.709Z',
        },
        {
          id: 3,
          groups: [2],
          username: 'fuant',
          name: 'Antony Fu',
          joinDate: '2022-07-08T21:32:00.709Z',
        },
        {
          id: 4,
          groups: [2],
          name: 'Ivan You',
          username: 'xiaoyouyou',
          joinDate: '2022-07-08T12:35:09.709Z',
        },
        {
          id: 5,
          groups: [2],
          name: 'Johnny Leider',
          username: 'johnnyleider',
          joinDate: '2022-01-21T12:35:09.709Z',
        },
      ])
    )
  }),
  rest.post(url('/auth/access-token'), (req, res, ctx) => {
    return res(
      ctx.json<Token>({
        accessToken: 'admin',
        refreshToken: 'admin',
      })
    )
  }),
  rest.get(url('/groups'), (req, res, ctx) => {
    return res(ctx.json(groups))
  }),
  rest.get(url('/groups/:id'), (req, res, ctx) => {
    return res(ctx.json(groups.find((g) => g.id === Number(req.params.id))))
  })
)
