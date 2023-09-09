import axios, { InternalAxiosRequestConfig } from 'axios'

export const configureAxios = axios.create({
  baseURL: 'https://table-flow-fca566db5b85.herokuapp.com/api/v1',
})

const getAuthToken = () => JSON.parse(localStorage.getItem('token') || '')

const authInterceptor = (config: InternalAxiosRequestConfig<any>) => {
  config.headers['authorization'] = `Bearer ${getAuthToken()}`
  return config
}

configureAxios.interceptors.request.use(authInterceptor)
