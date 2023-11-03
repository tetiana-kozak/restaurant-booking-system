import TextInput from 'components/Inputs/TextInput/TextInput'
import { Form, Formik } from 'formik'
import {
  createRestaurant,
  editRestaurant,
} from 'pages/AdminPanelPage/userRestaurantsReduser'
import { useAppDispatch } from 'redux/hooks'
import {
  createRestaurantValuesType,
  editRestaurantValuesType,
  restaurantType,
} from 'types/restaurantsEntity'
import { createRestaurantSchema } from 'utils/validationSchemas/validationSchemas'
import ModalActions from '../ModalActions/ModalActions'
import TextareaInput from 'components/Inputs/TextInput/TextareaInput'
import SelectInput from 'components/Inputs/TextInput/SelectInput'

type Props = {
  handleClose: () => void
  selectedRestaurant: restaurantType | undefined
  onSubmitAction: string
}

const RestaurantInfoForm = ({
  handleClose,
  selectedRestaurant,
  onSubmitAction,
}: Props) => {
  const dispatch = useAppDispatch()

  return (
    <>
      <Formik
        initialValues={{
          title: selectedRestaurant?.title || '',
          city: selectedRestaurant?.city || '',
          type: selectedRestaurant?.type || '',
          description: selectedRestaurant?.description || '',
          location: selectedRestaurant?.location || '',
        }}
        validationSchema={createRestaurantSchema}
        onSubmit={(
          values: createRestaurantValuesType | editRestaurantValuesType
        ) => {
          if (onSubmitAction === 'add') {
            dispatch(createRestaurant(values))
          } else if (onSubmitAction === 'edit' && selectedRestaurant) {
            dispatch(editRestaurant({ ...values, id: selectedRestaurant.id }))
          }
          handleClose()
        }}
      >
        <Form className="flex flex-col gap-30 w-full">
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
            label={'Короткий опис закладу'}
            placeholder={'Введіть короткий опис закладу'}
          />

          <ModalActions handleClose={handleClose} />
        </Form>
      </Formik>
    </>
  )
}
export default RestaurantInfoForm
