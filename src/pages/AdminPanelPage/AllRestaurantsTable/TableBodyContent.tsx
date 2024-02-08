import { IconButton, TableCell, TableRow } from '@mui/material'
import { restaurantType } from 'shared/types/restaurantsEntity'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import { useAppDispatch } from 'redux/hooks'
import { deleteRestaurant } from '../userRestaurantsReduser'

type Props = {
  userRestaurantsList: restaurantType[]
  handleEditModalOpen: () => void
  setSelectedRestaurant: (restaurant: restaurantType) => void
}

const TableBodyContent = ({
  userRestaurantsList,
  handleEditModalOpen,
  setSelectedRestaurant,
}: Props) => {
  const dispatch = useAppDispatch()

  return (
    <>
      {userRestaurantsList.length === 0 ? (
        <TableRow>
          <TableCell colSpan={7} align="center">
            У вас ще немає закладів
          </TableCell>
        </TableRow>
      ) : (
        <>
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
        </>
      )}
    </>
  )
}
export default TableBodyContent
