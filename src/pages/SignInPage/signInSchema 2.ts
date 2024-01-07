import * as Yup from 'yup'

const emailRulles =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRulles, {
      message: 'Please, enter a valid email!',
    })
    .required('This field is required!'),
  password: Yup.string()
    .min(3, 'Password must have at least 3 characters!')
    .required('This field is required!'),
})
