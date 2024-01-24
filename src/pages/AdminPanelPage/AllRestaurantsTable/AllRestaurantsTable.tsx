import DeleteIcon from '@mui/icons-material/Delete'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import EditIcon from '@mui/icons-material/Edit'
import { IconButton } from '@mui/material'
import ModalContainer from 'shared/modals/editRestaurantModal/ModalContainer/ModalContainer'
import {
  deleteRestaurant,
  getUserRestaurantsList,
} from 'pages/AdminPanelPage/userRestaurantsReduser'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { restaurantType } from 'shared/types/restaurantsEntity'
import './AllRestaurantsTable.scss'
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'

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
      <TableContainer component={Paper} className="restaurants-table">
        <Table sx={{ minWidth: 650 }} aria-label="sticky table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                style={{
                  width: 150,
                  backgroundColor: '#503047',
                  color: 'white',
                }}
              >
                Назва закладу
              </TableCell>
              <TableCell align="center" style={{ width: 150 }}>
                Тип
              </TableCell>
              <TableCell align="center" style={{ width: 150 }}>
                Місто
              </TableCell>
              <TableCell align="center" style={{ width: 200 }}>
                Адреса
              </TableCell>
              <TableCell align="center">Опис</TableCell>
              <TableCell align="center" style={{ width: 110 }}>
                Редагувати
              </TableCell>
              <TableCell align="center" style={{ width: 110 }}>
                Видалити
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userRestaurantsList.map((restaurant) => (
              <TableRow
                key={restaurant.title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {restaurant.title}
                </TableCell>
                <TableCell align="center">{restaurant.type}</TableCell>
                <TableCell align="center">{restaurant.city}</TableCell>
                <TableCell align="center">{restaurant.location}</TableCell>
                <TableCell align="center">{restaurant.description}</TableCell>
                <TableCell align="center">
                  <IconButton
                    onClick={() => {
                      handleEditModalOpen()
                      setSelectedRestaurant(restaurant)
                    }}
                  >
                    <EditOutlinedIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="delete"
                    onClick={() => dispatch(deleteRestaurant(restaurant.id))}
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <ul className="list">
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
      </ul> */}

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
