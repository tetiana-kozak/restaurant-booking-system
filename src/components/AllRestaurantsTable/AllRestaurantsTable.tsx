import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { IconButton, Modal } from '@mui/material'
import ModalContainer from 'components/Modals/ModalContainer/ModalContainer'
import {
  deleteRestaurant,
  getUserRestaurantsList,
} from 'pages/RestaurantListPage/userRestaurantsReduser'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { restaurantType } from 'types/restaurantsEntity'
import './AllRestaurantsTable.scss'

type Props = {}

const AllRestaurantsTable = (props: Props) => {
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

  const [selectedRestaurantId, setSelectedRestaurantId] = useState(1)

  const [openModal, setOpenModal] = useState(true)
  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)

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
                <span>Location:</span> {restaurant.location}
              </div>
            </li>
            <div>
              <IconButton
                onClick={() => {
                  setOpenModal(true)
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

      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalContainer handleClose={handleClose}>sdssds</ModalContainer>
      </Modal>
    </>
  )
}
export default AllRestaurantsTable
