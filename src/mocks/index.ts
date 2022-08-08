import { setupWorker, rest } from 'msw'
import type { IUserData } from '@/api/users'

const url = (path: string) => {
  return import.meta.env.VITE_API_URL + path
}

export const worker = setupWorker(
  rest.get(url('/users/:username'), (req, res, ctx) => {
    return res(ctx.json({ id: 99, groups: [5] }))
  }),
  rest.get(url('/users'), (req, res, ctx) => {
    return res(
      ctx.json<IUserData[]>([
        {
          id: 1,
          groups: [5],
          username: 'kingyue737',
          name: 'Yue JIN',
          email: 'yuejin13@fudan.edu.cn',
          date_joined: '2021-11-08T07:35:09.709Z',
          last_login: '2022-08-08T12:35:09.709Z',
        },
        {
          id: 2,
          groups: [4],
          username: 'fuant',
          name: 'Antony Fu',
          date_joined: '2022-07-08T21:32:00.709Z',
          last_login: '2022-08-08T12:18:11.709Z',
        },
        {
          id: 1,
          groups: [4],
          name: 'Ivan You',
          username: 'xiaoyouyou',
          date_joined: '2022-07-08T12:35:09.709Z',
          last_login: '2022-08-08T12:35:09.709Z',
        },
        {
          id: 1,
          groups: [4],
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
  })
)
