import NProgress from 'nprogress'

NProgress.configure({ minimum: 0.3 })
export type Loading = {
  state: boolean
  error: string
}

export default async function withProgress(
  before: () => Promise<any>,
  errHandler: { (e: Error): any },
  after: Function
) {
  try {
    NProgress.start()
    await before()
  } catch (e) {
    if (errHandler && e instanceof Error) {
      errHandler(e)
    } else {
      console.error('uncaught error:')
      console.error(e)
    }
  } finally {
    after?.()
    NProgress.done()
  }
}

export async function withLoading(
  loading: Loading,
  before: () => Promise<any>
) {
  try {
    NProgress.start()
    Object.assign(loading, { state: true })
    await before()
    Object.assign(loading, { error: '' })
  } catch (e) {
    e instanceof Error && Object.assign(loading, { error: e.message })
    throw e
  } finally {
    NProgress.done()
    Object.assign(loading, { state: false })
  }
}
