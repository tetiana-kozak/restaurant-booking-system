import { Dialog } from '@mui/material'

import { useAppDispatch } from 'redux/hooks'

import { deleteRestaurantTable } from 'pages/AdminPanelPage/userRestaurantsReduser'

import { toast } from 'react-toastify'
// import // createRestaurantValuesType,
// // editRestaurantValuesType,
// // restaurantType,
// "shared/types/restaurantsEntity";

import './RestaurantEditorPage.scss'
// import { useState } from 'react'

type Props = {
  openModal: boolean
  handleClose: () => void
  id: number | undefined
  //   handleDeleteTable: (id: number | undefined) => void;
}

const ModalDeleteTable = ({ openModal, handleClose, id }: Props) => {
  const dispatch = useAppDispatch()

  console.log('delete', id)

  const handleConfirmDelete = () => {
    if (id) {
      dispatch(deleteRestaurantTable(id))
      toast.success('Видалення пройшло успішно ', {
        position: toast.POSITION.TOP_RIGHT,
      })
      handleClose()
    }
  }

  return (
    <Dialog
      open={openModal}
      onClose={handleClose}
      className="restaurantEditor-deleteModal"
    >
      <div className="restaurantEditor-deleteModal flex flex-col items-center justify-center gap-[32px] p-[20px] w-[245px]">
        <p className="font-sans text-[16px] text-text-color text-center font-[400] leading-[19px]">
          Підтвердження видалення
        </p>

        <ul className="flex items-center gap-[12px]">
          <li>
            <button
              type="button"
              onClick={handleClose}
              className="p-[6px_12px] bg-transparent font-sans text-[14px] text-button-primary text-center font-[300] leading-6 tracking-[0.15px] cursor-pointer"
            >
              Ні
            </button>
          </li>

          <li>
            <button
              type="button"
              onClick={handleConfirmDelete}
              //   onClick={() => id && dispatch(deleteRestaurantTable(id))}
              className="p-[6px_12px] rounded-[100px] bg-button-primary font-sans text-[14px] text-text-color text-center font-medium leading-5 tracking-[0.15px] cursor-pointer"
            >
               Так
            </button>
          </li>
        </ul>
      </div>
    </Dialog>
  )
}
export default ModalDeleteTable
