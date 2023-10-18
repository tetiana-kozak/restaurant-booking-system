import './ModalContainer.scss'
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import RestaurantInfoForm from '../RestaurantInfoForm/RestaurantInfoForm'

type Props = {
  handleClose: () => void
  openModal: boolean
  title: string
}

const ModalContainer = ({ handleClose, openModal, title }: Props) => {
  return (
    <Dialog open={openModal} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <RestaurantInfoForm handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  )
}
export default ModalContainer
