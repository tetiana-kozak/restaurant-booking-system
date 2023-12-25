import { configureAxios } from 'shared/axios/configureAxios'
import { UserSignInType, signInErrorType } from './signInEntity'
import { NavigateFunction } from 'react-router'

export const signIn = async (
  values: UserSignInType,
  setSignInErrorData: (data: signInErrorType) => void,
  navigate: NavigateFunction
) => {
  const params = {
    user: {
      ...values,
    },
  }
  await configureAxios
    .post('/users/login', params)
    .then((response) => {
      if (response.data.user.token) {
        localStorage.setItem('token', JSON.stringify(response.data.user.token))
        navigate('/admin-panel')
      }
    })
    .catch((error) => {
      console.log('error signin', error)
      setSignInErrorData(error.response.data)
    })
}
