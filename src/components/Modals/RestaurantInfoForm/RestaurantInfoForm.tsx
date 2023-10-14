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
            label={'Restaurant name'}
            placeholder={'Enter your restaurant name'}
          />

          <SelectInput
            name={'city'}
            id={'restaurant-location-input'}
            label={'Restaurant city'}
            placeholder={'Choose a city'}
          />

          <TextInput
            name={'location'}
            id={'restaurant-location-input'}
            label={'Restaurant location'}
            placeholder={'Enter your restaurant location'}
          />

          <TextInput
            name={'type'}
            id={'restaurant-type-input'}
            label={'Restaurant type'}
            placeholder={'Enter your restaurant type'}
          />

          <TextareaInput
            name={'description'}
            id={'restaurant-description-input'}
            label={'Restaurant description'}
            placeholder={'Enter your restaurant description'}
          />

          <ModalActions handleClose={handleClose} />
        </Form>
      </Formik>
    </>
  )
}
export default RestaurantInfoForm
