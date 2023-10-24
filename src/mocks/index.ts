import { setupWorker } from 'msw/browser'
import { http } from 'msw'

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

const users = [
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
]

export const worker = setupWorker(
  http.get(url('/users/:id'), async ({ request }) => {
    return Response.json({ id: 99, groups: [1] })
  }),
  http.get(url('/users'), async ({ request }) => {
    return Response.json(users)
  }),
  http.delete(url('/users/:id'), ({ params }) => {
    users.splice(users.map((x) => x.id).indexOf(Number(params.id)), 1)
    return new Response(null, { status: 204 })
  }),
  http.post(url('/auth/access-token'), async () => {
    return Response.json({
      accessToken: 'admin',
      refreshToken: 'admin',
    })
  }),
  http.get(url('/groups'), async () => {
    return Response.json(groups)
  }),
  http.get(url('/groups/:id'), async ({ params }) => {
    return Response.json(groups.find((g) => g.id === Number(params.id)))
  }),
)
