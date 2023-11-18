import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

export const configureAxios = axios.create({
  baseURL: 'https://table-flow-fca566db5b85.herokuapp.com/api/v1',
})

const getAuthToken = () => {
  let tokenJSON = localStorage.getItem('token')
  if (tokenJSON === 'undefined') {
    localStorage.removeItem('token')
    tokenJSON = localStorage.getItem('token')
  }

  const token = tokenJSON ? JSON.parse(tokenJSON) : ''
  return token
}

const authInterceptor = (config: InternalAxiosRequestConfig<any>) => {
  config.headers['authorization'] = `Bearer ${getAuthToken()}`
  return config
}

const getErrorCode = (error: AxiosError, codeToCheck: number) => {
  return error.response && error.response.status === codeToCheck
  // ||
  // (error.response.data?.statusCode === codeToCheck)
}

const errorResponseInterceptorCb = (error: AxiosError) => {
  const isUnauthorizedError = getErrorCode(error, 401)
  if (isUnauthorizedError) {
    // store.dispatch('auth/logout')
    // router.replace({
    //   path: '/signin',
    //   query: { redirect: router.currentRoute.fullPath },
    // })
  }
  return Promise.reject(error)
}

configureAxios.interceptors.request.use(authInterceptor)
configureAxios.interceptors.response.use(
  (response) => response,
  errorResponseInterceptorCb
)
