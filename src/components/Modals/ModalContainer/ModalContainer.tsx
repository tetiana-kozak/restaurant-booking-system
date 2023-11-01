import './ModalContainer.scss'
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material'
import RestaurantInfoForm from '../RestaurantInfoForm/RestaurantInfoForm'
import { restaurantType } from 'types/restaurantsEntity'

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
    <Dialog open={openModal} onClose={handleClose}>
      <DialogTitle className="modal-title">{title}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
        }}
      ></IconButton>
      <DialogContent>
        <RestaurantInfoForm
          handleClose={handleClose}
          selectedRestaurant={selectedRestaurant}
          onSubmitAction={onSubmitAction}
        />
      </DialogContent>
    </Dialog>
  )
}
export default ModalContainer
