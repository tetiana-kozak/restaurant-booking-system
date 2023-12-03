import * as Yup from 'yup'

export const createRestaurantSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Назва закладу повинна мати щонайменше 3 символи!')
    .required(`Це поле є обов'язковим!`),
  description: Yup.string(),
  location: Yup.string(),
  city: Yup.string().required(`Це поле є обов'язковим!`),
  type: Yup.string(),
})
