import axios, { type AxiosError } from 'axios'

const service = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    `${window.location.protocol}//${window.location.hostname}:9529/api/v1`,
  timeout: 120000,
})

const errHandler = async (error: AxiosError) => {
  const response = error.response
  const userStore = useUserStore()
  if (response) {
    switch (response.status) {
      case 401:
        // TODO: refresh token according to your backend
        // if (userStore.token) {
        //   return userStore.refreshToken().then((resp) => {
        //     return service(error.response!.config)
        //   })
        // }
        break
    }
    if (!response.headers['content-type']?.includes('text/html')) {
      throw response.data
    }
  }
  throw error
}

// Request interceptors
service.interceptors.request.use(
  async (config) => {
    // Add X-Access-Token header to every request, you can add other custom headers here
    const token = useUserStore().token
    if (token) {
      config.headers!.Authorization = `Bearer ${token}`
    }
    return config
  }
  // Add Error Handler Below
)

// Response interceptors
service.interceptors.response.use((response) => {
  return response
}, errHandler)

export default service
