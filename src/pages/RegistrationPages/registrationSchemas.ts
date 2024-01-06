import * as Yup from 'yup'

const passwordRulles = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,}$/
const emailRulles =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const signUpSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(3, "Ім'я має складатись з мінімум 3 символів!")
    .required("Це поле є обов'язковим!"),
  last_name: Yup.string()
    .min(3, 'Прізвище має складатись з мінімум 3 символів!')
    .required("Це поле є обов'язковим!"),
  email: Yup.string()
    .matches(emailRulles, {
      message: 'Введено невалідний email!',
    })
    .required("Це поле є обов'язковим!"),
  password: Yup.string()
    .min(3, 'Пароль має складатись з мінімум 3 символів!')
    .matches(passwordRulles, {
      message: 'Будь ласка, створіть складніший пароль!',
    })
    .required("Це поле є обов'язковим!"),
  confirmedPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Паролі повинні співпадати!')
    .required("Це поле є обов'язковим!"),
})

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
