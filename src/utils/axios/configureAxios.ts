import axios from 'axios'

export const configureAxios = axios.create({
  baseURL: 'https://table-flow-fca566db5b85.herokuapp.com/api/v1',
})
