import { setupWorker, rest } from 'msw'

const url = (path: string) => {
  return import.meta.env.VITE_API_URL + path
}

export const worker = setupWorker(
  rest.get(url('/users/:username'), (req, res, ctx) => {
    return res(ctx.json({ id: 99, groups: [0] }))
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
