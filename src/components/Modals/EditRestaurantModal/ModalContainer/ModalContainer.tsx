import './ModalContainer.scss'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material'
import RestaurantInfoForm from '../RestaurantInfoForm/RestaurantInfoForm'
import { restaurantType } from 'types/restaurantsEntity'
import ModalActions from '../ModalActions/ModalActions'

type Props = {
  handleClose: () => void
  openModal: boolean
  title: string
  selectedRestaurant?: restaurantType | undefined
  onSubmitAction: string
}

const ModalContainer = ({
  handleClose,
  openModal,
  title,
  selectedRestaurant,
  onSubmitAction,
}: Props) => {
  return (
    <Dialog open={openModal} onClose={handleClose} className="main-modal">
      <DialogTitle className="main-modal_title">{title}</DialogTitle>
      <DialogContent>
        <RestaurantInfoForm
          handleClose={handleClose}
          selectedRestaurant={selectedRestaurant}
          onSubmitAction={onSubmitAction}
        />
      </DialogContent>
      <DialogActions>
        <ModalActions handleClose={handleClose} isSubmitButtonDisabled={true} />
      </DialogActions>
    </Dialog>
  )
}
export default ModalContainer
