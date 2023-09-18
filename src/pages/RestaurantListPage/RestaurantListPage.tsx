import { useAppDispatch, useAppSelector } from 'redux/hooks'
import {
  createRestaurant,
  deleteRestaurant,
  editRestaurant,
  getUserRestaurantsList,
} from './userRestaurantsReduser'
import { useEffect, useState } from 'react'
import TextInput from 'components/Inputs/TextInput/TextInput'
import { Form, Formik } from 'formik'
import { createRestaurantSchema } from 'utils/validationSchemas/validationSchemas'
import {
  createRestaurantValuesType,
  restaurantType,
} from 'types/restaurantsEntity'
import RegisterButton from 'components/Buttons/RegisterButton/RegisterButton'
import DeleteIcon from '@mui/icons-material/Delete'
import { IconButton } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import './RestaurantListPage.scss'

type Props = {}
const RestaurantListPage = (props: Props) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUserRestaurantsList())
  }, [dispatch])

  const userRestaurantsList: restaurantType[] = useAppSelector((state) => {
    console.log(
      'state.userRestaurants.userRestaurantsList',
      state.userRestaurants.userRestaurantsList
    )
    return state.userRestaurants.userRestaurantsList
  })

  const [toggleModal, setToggleModal] = useState(false)
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(1)

  return (
    <>
      <div className="user-restaurants-list">
        <h1>User restaurants list</h1>
        <ul className="list">
          {userRestaurantsList.map((restaurant) => (
            <div key={restaurant.id} className="list-container">
              <li>{restaurant.title}</li>
              <div>
                <IconButton
                  onClick={() => {
                    setToggleModal(true)
                    setSelectedRestaurantId(restaurant.id)
                  }}
                >
                  <EditIcon />
                </IconButton>

                <IconButton
                  aria-label="delete"
                  onClick={() => dispatch(deleteRestaurant(restaurant.id))}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
          ))}
        </ul>

        {toggleModal ? (
          <div>
            <h2>Edit restaurant</h2>
            <div>
              <Formik
                initialValues={{
                  title: '',
                  description: '',
                  location: '',
                  id: selectedRestaurantId,
                }}
                validationSchema={createRestaurantSchema}
                onSubmit={(values: createRestaurantValuesType, actions) => {
                  dispatch(editRestaurant(values))
                  actions.resetForm()
                  setToggleModal(false)
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

                  <RegisterButton>Confirm</RegisterButton>
                </Form>
              </Formik>
            </div>
          </div>
        ) : (
          ''
        )}

        <div>
          <h2>New restaurant form</h2>
          <div>
            <Formik
              initialValues={{
                title: '',
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

                <RegisterButton>Add restaurant</RegisterButton>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  )
}
export default RestaurantListPage
