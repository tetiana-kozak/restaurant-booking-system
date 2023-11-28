import * as Yup from 'yup'

const passwordRulles = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,}$/
const emailRulles =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRulles, {
      message: 'Please, enter a valid email!',
    })
    .required('This field is required!'),
  password: Yup.string()
    .min(3, 'Password must have at least 3 characters!')
    // .matches(passwordRulles, {
    //   message: 'Please, create a stronger password!',
    // })
    .required('This field is required!'),
  confirmedPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Passwords must match!')
    .required('This field is required!'),
})
