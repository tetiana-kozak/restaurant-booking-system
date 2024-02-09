import { configureAxios } from 'shared/axios/configureAxios'
import { NavigateFunction } from 'react-router'
import { UserSignInType, UserSignUpType } from './registrationEntity'

export const signIn = async (
  values: UserSignInType,
  navigate: NavigateFunction,
  showToastMessage: (message: string) => void
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
      if (error.code === 'ERR_NETWORK') {
        showToastMessage('Ой... Щось пішло не так! Спробуйте пізніше.')
      } else if (error.response.data.statusCode === 422) {
        showToastMessage(error.response.data.message)
      }
    })
}

export const signUp = async (
  values: UserSignUpType,
  setIsUserRegistered: (isUserRegistered: boolean) => void,
  showToastMessage: (message: string) => void
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
        setIsUserRegistered(true)
      }
    })
    .catch((error) => {
      console.log('error signup', error)
      if (error.code === 'ERR_NETWORK') {
        showToastMessage('Ой... Щось пішло не так! Спробуйте пізніше.')
      } else if (error.response.data.statusCode === 422) {
        showToastMessage(error.response.data.message)
      } else {
        showToastMessage('Ой... Щось пішло не так! Спробуйте пізніше.')
      }
    })
}
