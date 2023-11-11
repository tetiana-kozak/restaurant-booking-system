import './RestaurantInfoForm.scss'
import TextInput from 'components/Inputs/TextInput/TextInput'
import { restaurantType } from 'types/restaurantsEntity'
import TextareaInput from 'components/Inputs/TextInput/TextareaInput'
import SelectInput from 'components/Inputs/TextInput/SelectInput'

type Props = {
  handleClose: () => void
  selectedRestaurant: restaurantType | undefined
  onSubmitAction: string
}

const RestaurantInfoForm = ({}: Props) => {
  return (
    <>
      <div className="main-modal_inputs">
        <TextInput
          name={'title'}
          id={'restaurant-name-input'}
          label={'Назва закладу*'}
          placeholder={'Введіть назву закладу'}
        />

        <SelectInput
          name={'city'}
          id={'restaurant-city-input'}
          label={'Місто*'}
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
      </div>
    </>
  )
}
export default RestaurantInfoForm
