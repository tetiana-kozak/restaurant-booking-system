import { Formik, Form } from 'formik'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import * as Yup from 'yup'

import ButtonAddTableTFDisabled from 'shared/buttons/ButtonAddTableTFDisabled/ButtonAddTableTFDisabled'
import ButtonAddTableTFSecondary from 'shared/buttons/ButtonAddTableTFSecondary/ButtonAddTableTFSecondary'
import ButtonAddTableTFActive from 'shared/buttons/ButtonAddTableTFActive/ButtonAddTableTFActive'

import { Dialog } from '@mui/material'
import TextField from '@mui/material/TextField'

import ModalDeleteTable from './ModalDeleteTable'
import './RestaurantEditorPage.scss'

import { tableType } from 'shared/types/restaurantsEntity'

import { useAppDispatch, useAppSelector } from 'redux/hooks'

import {
  //   deleteRestaurantTable,
  editRestaurantTable,
} from 'pages/AdminPanelPage/userRestaurantsReduser'
import { useState } from 'react'

type Props = {
  openModal: boolean
  handleClose: () => void
  tableInfo?: tableType | null
}

interface FormValues {
  title: string
  seatsCount: number
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Обов'язкове поле"),
  seatsCount: Yup.number().required("Обов'язкове поле"),
})

const ModalEditingTable = ({ openModal, handleClose, tableInfo }: Props) => {
  const dispatch = useAppDispatch()

  const initialValues: FormValues = {
    title: tableInfo?.title || '',
    seatsCount: tableInfo?.seatsCount || 0,
  }
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const handleOpenDelete = () => setOpenDeleteModal(true)
  const handleCloseDelete = () => setOpenDeleteModal(false)

  const userRestaurantsCurrent = useAppSelector(
    (state) => state.userRestaurants.userRestaurantsCurrent
  )

  console.log('tableInfo', tableInfo)

  //   const handleDeleteTable = (id: number | undefined) => {
  //     if (id) {
  //       dispatch(deleteRestaurantTable(id))
  //       handleClose() // Закриття модального вікна після видалення столу
  //     }
  //   }

  //   const handleTableTitleChange = (
  //     value: string,
  //     props: FormikProps<FormValues>
  //   ) => {
  //     props.setFieldValue('title', value) // Встановлюємо значення title
  //   }

  //   const handleCountTableChange = (
  //     value: string,
  //     props: FormikProps<FormValues>
  //   ) => {
  //     const parsedValue = parseInt(value) // Спробувати перетворити введене значення в число
  //     console.log(parsedValue)
  //     if (!isNaN(parsedValue)) {
  //       // Якщо введено число
  //       props.setFieldValue('seatsCount', parsedValue) // Встановити введене число як значення countTable
  //     } else {
  //       props.setFieldValue('seatsCount', value) // Якщо введено не число, встановити значення з радіокнопок
  //     }
  //   }

  const handleSubmit = (values: FormValues) => {
    const selectedRestaurant = userRestaurantsCurrent[0]

    if (selectedRestaurant) {
      const formDataWithStaticData = {
        id: tableInfo?.id || 0,
        floorId: 54,
        ...values,
      }
      dispatch(editRestaurantTable(formDataWithStaticData))
      console.log('Form submitted with values:', formDataWithStaticData)
      handleClose()
    }
  }

  return (
    <>
      {tableInfo && (
        <Dialog
          open={openModal}
          onClose={handleClose}
          className="restaurantEditor-modal"
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {(props) => (
              <Form className="restaurantEditor-form flex flex-col items-center justify-center gap-[32px] p-[16px] w-[406px]">
                <p className="w-[257px] h-[39px] p-[10px] flex items-center justify-between pt-[19px] border-b-[0.5px] border-solid border-gray-500">
                  Редагування столу
                </p>

                <FormControl component="fieldset" className="input">
                  <TextField
                    id="standard-basic"
                    label="Стіл 1"
                    variant="standard"
                    placeholder="Введіть назву столика"
                    name="title"
                    value={props.values.title}
                    onChange={props.handleChange}
                    error={props.touched.title && Boolean(props.errors.title)}
                    helperText={props.touched.title && props.errors.title}
                  />
                </FormControl>
                <FormControl
                  component="fieldset"
                  className="input flex justify-center"
                >
                  <RadioGroup
                    name="seatsCount"
                    value={props.values.seatsCount.toString()}
                    onChange={(e) =>
                      props.setFieldValue(
                        'seatsCount',
                        parseInt(e.target.value)
                      )
                    }
                    className="flex flex-wrap items-center justify-center flex-row gap-[25px] w-[374px] pb-[18px]"
                  >
                    <FormControlLabel
                      value="2"
                      control={
                        <Radio
                          sx={{
                            '& .MuiSvgIcon-root': {
                              fontSize: 18,
                            },
                          }}
                        />
                      }
                      label="2 місця"
                      className="flex items-center gap-[4px] w-[103px] h-[20px] text-text-color font-sans text-small text-center font-normal leading-4"
                    />
                    <FormControlLabel
                      value="4"
                      control={
                        <Radio
                          sx={{
                            '& .MuiSvgIcon-root': {
                              fontSize: 18,
                            },
                          }}
                        />
                      }
                      label="4 місця"
                      className="flex items-center gap-[4px] w-[103px] h-[20px] text-text-color font-sans text-small text-center font-normal leading-4"
                    />
                    <FormControlLabel
                      value="6"
                      control={
                        <Radio
                          sx={{
                            '& .MuiSvgIcon-root': {
                              fontSize: 18,
                            },
                          }}
                        />
                      }
                      label="6 місць"
                      className="flex items-center gap-[4px] w-[103px] h-[20px] text-text-color font-sans text-small text-center font-normal leading-4"
                    />
                    <FormControlLabel
                      value="8"
                      control={
                        <Radio
                          sx={{
                            '& .MuiSvgIcon-root': {
                              fontSize: 18,
                            },
                          }}
                        />
                      }
                      label="8 місць"
                      className="flex items-center gap-[4px] w-[103px] h-[20px] text-text-color font-sans text-small text-center font-normal leading-4"
                    />
                    <FormControlLabel
                      value="10"
                      control={
                        <Radio
                          sx={{
                            '& .MuiSvgIcon-root': {
                              fontSize: 18,
                            },
                          }}
                        />
                      }
                      label="10 місць"
                      className="flex items-center gap-[4px] w-[103px] h-[20px] text-text-color font-sans text-small text-center font-normal leading-4"
                    />
                    <FormControlLabel
                      value="12"
                      control={
                        <Radio
                          sx={{
                            '& .MuiSvgIcon-root': {
                              fontSize: 18,
                            },
                          }}
                        />
                      }
                      label="12 місць"
                      className="flex items-center gap-[4px] w-[103px] h-[20px] text-text-color font-sans text-small text-center font-normal leading-4"
                    />
                  </RadioGroup>

                  <TextField
                    id="Інша кількість"
                    label="Інша кількість"
                    variant="standard"
                    placeholder="Введіть кількість місць"
                    name="seatsCount"
                    type="number"
                    value={props.values.seatsCount}
                    onChange={props.handleChange}
                    error={
                      props.touched.seatsCount &&
                      Boolean(props.errors.seatsCount)
                    }
                    helperText={
                      props.touched.seatsCount && props.errors.seatsCount
                    }
                  />
                </FormControl>

                <ul className="flex items-center gap-[12px]">
                  <li>
                    <ButtonAddTableTFSecondary
                      onClick={handleClose}
                      label={'Скасувати'}
                    />
                  </li>
                  <li>
                    {props.dirty && props.isValid ? (
                      <ButtonAddTableTFActive label={'Підтвердити'} />
                    ) : (
                      <ButtonAddTableTFDisabled label={'Підтвердити'} />
                    )}
                  </li>
                </ul>
                {/* <button type="button" onClick={() => handleDeleteTable(tableInfo?.id)}>Видалити столик</button> */}
                <button type="button" onClick={handleOpenDelete}>
                  Видалити столик
                </button>
              </Form>
            )}
          </Formik>
        </Dialog>
      )}
      {/* {tableInfo && ( */}
      <ModalDeleteTable
        openModal={openDeleteModal}
        handleClose={handleCloseDelete}
        id={tableInfo?.id || 0}
      />
      {/* )} */}
    </>
  )
}
export default ModalEditingTable
