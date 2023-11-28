import './ModalContainer.scss'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material'
import RestaurantInfoForm from '../../../../pages/AdminPanelPage/modals/editRestaurantModal/RestaurantInfoForm/RestaurantInfoForm'
import {
  createRestaurantValuesType,
  editRestaurantValuesType,
  restaurantType,
} from 'types/restaurantsEntity'
import ModalActions from '../ModalActions/ModalActions'
import { useAppDispatch } from 'redux/hooks'
import { Formik, Form } from 'formik'
import {
  createRestaurant,
  editRestaurant,
} from 'pages/AdminPanelPage/userRestaurantsReduser'
import { createRestaurantSchema } from './createRestaurantSchema'

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
  const dispatch = useAppDispatch()

  const modalInitialValues = {
    title: selectedRestaurant?.title || '',
    city: selectedRestaurant?.city || '',
    type: selectedRestaurant?.type || '',
    description: selectedRestaurant?.description || '',
    location: selectedRestaurant?.location || '',
  }

  return (
    <Dialog open={openModal} onClose={handleClose} className="main-modal ">
      <Formik
        initialValues={modalInitialValues}
        validationSchema={createRestaurantSchema}
        validateOnMount={true}
        onSubmit={(
          values: createRestaurantValuesType | editRestaurantValuesType
        ) => {
          if (onSubmitAction === 'add') {
            dispatch(createRestaurant(values))
          } else if (onSubmitAction === 'edit' && selectedRestaurant) {
            dispatch(editRestaurant({ ...values, id: selectedRestaurant.id }))
          }
          handleClose()
        }}
      >
        {(formik) => {
          const isSubmitButtonDisabled = !formik.isValid || !formik.dirty
          return (
            <Form className="w-full">
              <DialogTitle className="main-modal_title">{title}</DialogTitle>
              <DialogContent className="px-40 pb-0 h-350">
                <RestaurantInfoForm />
              </DialogContent>
              <DialogActions className="modal-actions ">
                <ModalActions
                  handleClose={handleClose}
                  isSubmitButtonDisabled={isSubmitButtonDisabled}
                />
              </DialogActions>
            </Form>
          )
        }}
      </Formik>
    </Dialog>
  )
}
export default ModalContainer
