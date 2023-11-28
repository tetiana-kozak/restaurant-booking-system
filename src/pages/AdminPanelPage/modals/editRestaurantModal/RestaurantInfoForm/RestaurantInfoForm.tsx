import './RestaurantInfoForm.scss'
import '../../../../../shared/inputs/InputsStandardStyles.scss'
import TextInput from 'shared/inputs/TextInputs/TextInput'
import TextareaInput from 'shared/inputs/TextInputs/TextareaInput'
import SelectInput from 'shared/inputs/TextInputs/SelectInput'

type Props = {}

const RestaurantInfoForm = (props: Props) => {
  return (
    <div className="main-modal_inputs inputs-standard">
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
  )
}
export default RestaurantInfoForm
