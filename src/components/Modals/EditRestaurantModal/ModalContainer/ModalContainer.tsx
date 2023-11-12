import './ModalContainer.scss'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material'
import RestaurantInfoForm from '../RestaurantInfoForm/RestaurantInfoForm'
import {
  createRestaurantValuesType,
  editRestaurantValuesType,
  restaurantType,
} from 'types/restaurantsEntity'
import ModalActions from '../ModalActions/ModalActions'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { Formik, Form } from 'formik'
import { createRestaurantSchema } from 'utils/validationSchemas/validationSchemas'
import {
  createRestaurant,
  editRestaurant,
} from 'pages/AdminPanelPage/userRestaurantsReduser'

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
  return (
    <Dialog open={openModal} onClose={handleClose} className="main-modal ">
      <Formik
        initialValues={{
          title: selectedRestaurant?.title || '',
          city: selectedRestaurant?.city || '',
          type: selectedRestaurant?.type || '',
          description: selectedRestaurant?.description || '',
          location: selectedRestaurant?.location || '',
        }}
        validationSchema={createRestaurantSchema}
        validateOnMount={true}
        onSubmit={(
          values: createRestaurantValuesType | editRestaurantValuesType
        ) => {
          if (onSubmitAction === 'add') {
            console.log('submit')
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
                <RestaurantInfoForm
                  handleClose={handleClose}
                  selectedRestaurant={selectedRestaurant}
                  onSubmitAction={onSubmitAction}
                />
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
