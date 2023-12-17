import * as Yup from 'yup'

const emailRulles =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRulles, {
      message: 'Введено невалідний email!',
    })
    .required("Це поле є обов'язковим!"),
  password: Yup.string()
    .min(3, 'Пароль має складатись з мінімум 3 символів!')
    .required("Це поле є обов'язковим!"),
})
