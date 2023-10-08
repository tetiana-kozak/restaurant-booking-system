import RegisterButton from 'components/Buttons/RegisterButton/RegisterButton'
import TextInput from 'components/Inputs/TextInput/TextInput'
import { Form, Formik } from 'formik'
import { createRestaurant } from 'pages/RestaurantListPage/userRestaurantsReduser'
import { useAppDispatch } from 'redux/hooks'
import { createRestaurantValuesType } from 'types/restaurantsEntity'
import { createRestaurantSchema } from 'utils/validationSchemas/validationSchemas'
import ModalActions from '../ModalActions/ModalActions'

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

          <TextInput
            name={'description'}
            id={'restaurant-description-input'}
            label={'Restaurant description'}
            placeholder={'Enter your restaurant description'}
          />

          <TextInput
            name={'location'}
            id={'restaurant-location-input'}
            label={'Restaurant location'}
            placeholder={'Enter your restaurant location'}
          />

          <ModalActions handleClose={handleClose} />
        </Form>
      </Formik>
    </>
  )
}
export default RestaurantInfoForm
