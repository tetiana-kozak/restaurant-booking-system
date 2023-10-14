import TextInput from 'components/Inputs/TextInput/TextInput'
import { Form, Formik } from 'formik'
import { createRestaurant } from 'pages/RestaurantListPage/userRestaurantsReduser'
import { useAppDispatch } from 'redux/hooks'
import { createRestaurantValuesType } from 'types/restaurantsEntity'
import { createRestaurantSchema } from 'utils/validationSchemas/validationSchemas'
import ModalActions from '../ModalActions/ModalActions'
import TextareaInput from 'components/Inputs/TextInput/TextareaInput'
import SelectInput from 'components/Inputs/TextInput/SelectInput'

type Props = {
  handleClose: (isModalOpen: boolean) => void
}

const RestaurantInfoForm = ({ handleClose }: Props) => {
  const dispatch = useAppDispatch()
  return (
    <>
      <Formik
        initialValues={{
          title: '',
          city: '',
          type: '',
          description: '',
          location: '',
        }}
        validationSchema={createRestaurantSchema}
        onSubmit={(values: createRestaurantValuesType, actions) => {
          dispatch(createRestaurant(values))
          actions.resetForm()
        }}
      >
        <Form>
          <TextInput
            name={'title'}
            id={'restaurant-name-input'}
            label={'Назва закладу'}
            placeholder={'Введіть назву закладу'}
          />

          <SelectInput
            name={'city'}
            id={'restaurant-city-input'}
            label={'Місто'}
          />

          <TextInput
            name={'location'}
            id={'restaurant-location-input'}
            label={'Адреса закладу'}
            placeholder={'Введіть адресу закладу'}
          />

          <TextInput
            name={'type'}
            id={'restaurant-type-input'}
            label={'Тип закладу'}
            placeholder={'Введіть тип закладу'}
          />

          <TextareaInput
            name={'description'}
            id={'restaurant-description-input'}
            label={'Короткий опис'}
            placeholder={'Введіть короткий опис закладу'}
          />

          <ModalActions handleClose={handleClose} />
        </Form>
      </Formik>
    </>
  )
}
export default RestaurantInfoForm
