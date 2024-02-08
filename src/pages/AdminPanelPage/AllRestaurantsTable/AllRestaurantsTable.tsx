import ModalContainer from 'shared/modals/editRestaurantModal/ModalContainer/ModalContainer'
import { getUserRestaurantsList } from 'pages/AdminPanelPage/userRestaurantsReduser'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { restaurantType } from 'shared/types/restaurantsEntity'
import './AllRestaurantsTable.scss'
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  Paper,
} from '@mui/material'
import TableHeadContent from './TableHeadContent'
import TableBodyContent from './TableBodyContent'

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
            <TableHeadContent />
          </TableHead>
          <TableBody>
            <TableBodyContent
              userRestaurantsList={userRestaurantsList}
              handleEditModalOpen={handleEditModalOpen}
              setSelectedRestaurant={setSelectedRestaurant}
            />
          </TableBody>
        </Table>
      </TableContainer>

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
