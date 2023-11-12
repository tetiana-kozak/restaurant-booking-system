import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { IconButton } from '@mui/material'
import ModalContainer from 'components/Modals/EditRestaurantModal/ModalContainer/ModalContainer'
import {
  deleteRestaurant,
  getUserRestaurantsList,
} from 'pages/AdminPanelPage/userRestaurantsReduser'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { restaurantType } from 'types/restaurantsEntity'
import './AllRestaurantsTable.scss'

type Props = {
  setSelectedRestaurant: (restaurant: restaurantType) => void
  selectedRestaurant: restaurantType | undefined
}

const AllRestaurantsTable = ({
  setSelectedRestaurant,
  selectedRestaurant,
}: Props) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUserRestaurantsList())
  }, [dispatch])

  const userRestaurantsList: restaurantType[] = useAppSelector((state) => {
    return state.userRestaurants.userRestaurantsList
  })

  const [openEditModal, setOpenEditModal] = useState(false)
  const handleEditModalOpen = () => setOpenEditModal(true)
  const handleEditModalClose = () => setOpenEditModal(false)

  return (
    <>
      <ul className="list">
        {userRestaurantsList.map((restaurant) => (
          <div key={restaurant.id} className="list-container">
            <li>
              <div>
                <span>Title:</span> {restaurant.title}
              </div>
              <div>
                <span>Description:</span> {restaurant.description}
              </div>
              <div>
                <span>City:</span> {restaurant.city}
              </div>
              <div>
                <span>Location:</span> {restaurant.location}
              </div>
            </li>
            <div>
              <IconButton
                onClick={() => {
                  handleEditModalOpen()
                  setSelectedRestaurant(restaurant)
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

      <ModalContainer
        handleClose={handleEditModalClose}
        openModal={openEditModal}
        title={'Редагувати заклад'}
        selectedRestaurant={selectedRestaurant}
        onSubmitAction={'edit'}
      />
    </>
  )
}
export default AllRestaurantsTable
