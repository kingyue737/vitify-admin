import { setupWorker, rest } from 'msw'
import type { IUserData } from '@/api/users'

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
  rest.get(url('/users/:username'), (req, res, ctx) => {
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
          date_joined: '2021-11-08T07:35:09.709Z',
          last_login: '2022-08-08T12:35:09.709Z',
        },
        {
          id: 2,
          groups: [1],
          username: 'lodgepole',
          name: 'Ada Zhang',
          email: '',
          date_joined: '2021-04-08T23:45:09.709Z',
          last_login: '2022-07-02T00:13:29.709Z',
        },
        {
          id: 3,
          groups: [2],
          username: 'fuant',
          name: 'Antony Fu',
          date_joined: '2022-07-08T21:32:00.709Z',
          last_login: '2022-08-08T12:18:11.709Z',
        },
        {
          id: 4,
          groups: [2],
          name: 'Ivan You',
          username: 'xiaoyouyou',
          date_joined: '2022-07-08T12:35:09.709Z',
          last_login: '2022-08-08T12:35:09.709Z',
        },
        {
          id: 5,
          groups: [2],
          name: 'Johnny Leider',
          username: 'johnnyleider',
          date_joined: '2022-01-21T12:35:09.709Z',
          last_login: '2022-08-05T22:47:32.709Z',
        },
      ])
    )
  }),
  rest.post(url('/token'), (req, res, ctx) => {
    return res(
      ctx.json({
        access: 'admin',
        refresh: 'admin',
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
