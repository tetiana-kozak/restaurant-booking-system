import { configureAxios } from 'shared/axios/configureAxios'
import { NavigateFunction } from 'react-router'
import {
  RegistrationErrorType,
  UserSignInType,
  UserSignUpType,
} from './registrationEntity'

export const signIn = async (
  values: UserSignInType,
  setRegistrationErrorData: (data: RegistrationErrorType) => void,
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
      setRegistrationErrorData(error.response.data)
    })
}

export const signUp = async (
  values: UserSignUpType,
  setRegistrationErrorData: (data: RegistrationErrorType) => void,
  navigate: NavigateFunction
) => {
  const params = {
    user: {
      ...values,
    },
  }
  await configureAxios
    .post('/users', params)
    .then((response) => {
      if (response.data.user.token) {
        localStorage.setItem('token', JSON.stringify(response.data.user.token))
        navigate('/admin-panel')
      }
    })
    .catch((error) => {
      console.log('error signup', error)
      setRegistrationErrorData(error.response.data)
    })
}
