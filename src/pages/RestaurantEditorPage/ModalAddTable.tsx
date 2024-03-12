import { Formik, Form, FormikProps } from 'formik'
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
import './RestaurantEditorPage.scss'

import {
  // createRestaurantValuesType,
  // editRestaurantValuesType, 
  // restaurantType,
} from 'shared/types/restaurantsEntity'

import { useAppDispatch, useAppSelector } from 'redux/hooks'

import {
  createRestaurantTable,

} from 'pages/AdminPanelPage/userRestaurantsReduser'

type Props = {
    openModal: boolean;
    handleClose: () => void;
}


interface FormValues {
  title: string
  seatsCount: number 
  // whereTable: string
}

const initialValues: FormValues = {
  title: '',
  seatsCount: 0,
  // whereTable: '',
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Обов'язкове поле"),
  seatsCount: Yup.number().required("Обов'язкове поле"),
  // whereTable: Yup.string().required("Обов'язкове поле"),
})

const ModalAddTable = ({openModal, handleClose }: Props) => {
  const dispatch = useAppDispatch()
//   const [openModal, setOpenModal] = useState(false)
//   const handleOpen = () => setOpenModal(true)
//   const handleClose = () => setOpenModal(false)
  

  const userRestaurantsCurrent = useAppSelector((state) => state.userRestaurants.userRestaurantsCurrent);

  console.log("userRestaurantsCurrent", userRestaurantsCurrent)
  const handleTableTitleChange = (
    value: string,
    props: FormikProps<FormValues>
  ) => {
    props.setFieldValue('title', value) // Встановлюємо значення title
  }

  const handleCountTableChange = (
    value: string,
    props: FormikProps<FormValues>
  ) => {
    const parsedValue = parseInt(value) // Спробувати перетворити введене значення в число
    console.log(parsedValue)
    if (!isNaN(parsedValue)) {
      // Якщо введено число
      props.setFieldValue('seatsCount', parsedValue) // Встановити введене число як значення countTable
    } else {
      props.setFieldValue('seatsCount', value) // Якщо введено не число, встановити значення з радіокнопок
    }
  }

  const handleSubmit = (values: FormValues) => {
    const selectedRestaurant = userRestaurantsCurrent[0]; 

    if (selectedRestaurant) {
      const formDataWithStaticData = {
        restaurantId: selectedRestaurant.id, 
        floorId: 1, 
        ...values,
      };
      dispatch(createRestaurantTable(formDataWithStaticData));
      console.log('Form submitted with values:', formDataWithStaticData);
      handleClose();
    }
  };
  // const handleWhereTableChange = (
  //   value: string,
  //   props: FormikProps<FormValues>
  // ) => {
  //   props.setFieldValue('whereTable', value)
  // }

  return (
      <Dialog
        open={openModal}
        onClose={handleClose}
        className="restaurantEditor-modal"
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          // onSubmit={(
          //   values: tableType | tableType
          // ) => {

          //     dispatch(createRestaurantTable(values))

          //   // if (onSubmitAction === 'add') {
          //   //   dispatch(createRestaurantTable(values))
          //   // } else if (onSubmitAction === 'edit' && selectedRestaurant) {
          //   //   dispatch(editRestaurant({ ...values, id: selectedRestaurant.id }))
          //   // }
          //   handleClose()
          // }}
          // onSubmit={(values) => {
          //   // Додайте `restaurantId` та `floorId` до об'єкта зі значеннями форми
          //   const formDataWithStaticData = {
          //     ...values,
          //     restaurantId: restaurantId,
          //     floorId: floorId
          //   };
          //   // dispatch(createRestaurantTable(formDataWithStaticData))
          //   // Ваша логіка обробки надсилання даних на бекенд
          //   console.log('Form submitted with values:', formDataWithStaticData);
          //   handleClose();
          // }}
          onSubmit={handleSubmit}
        >
          {(props) => (
            <Form className="restaurantEditor-form flex flex-col items-center justify-center gap-[32px] p-[16px] w-[406px]">
              <FormControl component="fieldset" className="label">
                <TextField
                  id="standard-basic"
                  label="Стіл 1"
                  variant="standard"
                  placeholder="Введіть назву столика"
                  name="title"
                  value={props.values.title || ''}
                  onChange={(e) =>
                    handleTableTitleChange(e.target.value, props)
                  }
                />
              </FormControl>
              <FormControl
                component="fieldset"
                className="input flex justify-center"
              >
                <RadioGroup
                  name="seatsCount"
                  value={props.values.seatsCount}
                  onChange={(e) =>
                    handleCountTableChange(e.target.value, props)
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
                  // className='restaurantEditor-form'
                  id="Інша кількість"
                  label="Інша кількість"
                  variant="standard"
                  placeholder="Введіть кількість місць"
                  name="seatsCount"
                  value={
                    props.values.seatsCount !== null &&
                    !isNaN(props.values.seatsCount)
                      ? props.values.seatsCount
                      : ''
                  }
                  onChange={(e) =>
                    handleCountTableChange(e.target.value, props)
                  }
                />
              </FormControl>

              {/* <FormControl component="fieldset" className="">
                <RadioGroup
                  name="whereTable"
                  onChange={(e) =>
                    handleWhereTableChange(e.target.value, props)
                  }
                  className="flex flex-wrap justify-center flex-row gap-[25px] w-[395px]"
                >
                  <FormControlLabel
                    value="Біля вікна"
                    control={
                      <Radio
                        sx={{
                          '& .MuiSvgIcon-root': {
                            fontSize: 18,
                          },
                        }}
                      />
                    }
                    label="Біля вікна"
                    className="flex items-center gap-[4px] w-[118px] h-[20px] text-text-color font-sans text-small text-center font-normal leading-4"
                  />
                  <FormControlLabel
                    value="На терасі"
                    control={
                      <Radio
                        sx={{
                          '& .MuiSvgIcon-root': {
                            fontSize: 18,
                          },
                        }}
                      />
                    }
                    label="На терасі"
                    className="flex items-center gap-[4px] w-[118px] h-[20px] text-text-color font-sans text-small text-center font-normal leading-4"
                  />
                  <FormControlLabel
                    value="В залі"
                    control={
                      <Radio
                        sx={{
                          '& .MuiSvgIcon-root': {
                            fontSize: 18,
                          },
                        }}
                      />
                    }
                    label="В залі"
                    className="flex items-center gap-[4px] w-[118px] h-[20px] text-text-color font-sans text-small text-center font-normal leading-4"
                  />
                </RadioGroup>
              </FormControl> */}

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
            </Form>
          )}
        </Formik>
      </Dialog>
  )
}
export default ModalAddTable

// import PageTitleSection from 'shared/typography/PageTitleSection'
// import { useState } from 'react'
// import { Formik, Field, Form, FormikProps, FieldProps } from 'formik'
// import Radio from '@mui/material/Radio'
// import RadioGroup from '@mui/material/RadioGroup'
// import FormControlLabel from '@mui/material/FormControlLabel'
// import FormControl from '@mui/material/FormControl'
// import FormLabel from '@mui/material/FormLabel'

// import * as Yup from 'yup'
// // import { restaurantType } from "shared/types/restaurantsEntity";
// import AdminContainer from 'shared/AdminContainer/AdminContainer'
// // import ButtonTFMain from "shared/buttons/ButtonTFMain/ButtonTFMain";
// import ButtonTFDisabled from 'shared/buttons/ButtonTFDisabled/ButtonTFDisabled'
// import ButtonTFSecondary from 'shared/buttons/ButtonTFSecondary/ButtonTFSecondary'
// import { Dialog } from '@mui/material'
// import '../../shared/mainSidebar/adminSidebar/SidebarNavigation.scss'
// type Props = {}

// interface FormValues {
//   // id: number | null
//   countTable: string
//   whereTable: string
// }

// const initialValues: FormValues = {
//   // id: null,
//   countTable: '',
//   whereTable: '',
// }

// const validationSchema = Yup.object().shape({
//   // id: Yup.number(),
//   countTable: Yup.string(),
//   whereTable: Yup.string(),
// })

// const RestaurantEditorPage = (props: Props) => {
//   const [openModal, setOpenModal] = useState(false)
//   const handleOpen = () => setOpenModal(true)
//   const handleClose = () => setOpenModal(false)
//   const [countTable, setCountTable] = useState('')
//   const [whereTable, setWhereTable] = useState('')

//   // Відповідає за оновлення стану

//   const handleCountTableChange = (
//     value: string,
//     props: FormikProps<FormValues>
//   ) => {
//     props.setFieldValue('countTable', value)
//   }

//   const handleWhereTableChange = (
//     value: string,
//     props: FormikProps<FormValues>
//   ) => {
//     props.setFieldValue('whereTable', value)
//   }

//   // console.log(countTable)
//   // console.log(whereTable)
//   // const [selectedRestaurant, setSelectedRestaurant] = useState<restaurantType>({
//   //   id: 0,
//   //   title: "",
//   //   description: "",
//   //   location: "",
//   //   city: "",
//   //   type: "",
//   //   user: {
//   //     id: 0,
//   //     email: "",
//   //     bio: "",
//   //     image: "",
//   //   },

//   // });

//   // Викликається під час відправлення форми
//   const handleSubmit = (values: FormValues) => {
//     // Отримати значення з форми
//     const { countTable, whereTable } = values

//     // Опрацювати ці значення, наприклад, відправити їх на сервер
//     console.log(`Кількість столів: ${countTable}`)
//     console.log(`Розташування столів: ${whereTable}`)

//     // Після відправки даних можна виконати додаткові дії, наприклад, закрити модальне вікно
//     handleClose()
//   }

//   return (
//     <div className="select-modal">
//       <div className="flex">
//         <div className="w-[80%]">
//           <AdminContainer>
//             <div>
//               <div className="flex items-center justify-between p-[0_8px] border-b-2 border-border-title border-solid">
//                 <PageTitleSection>Конструктор зали</PageTitleSection>
//               </div>

//               <div className="mt-[32px]">
//                 <div className=" flex direction-column h-[611px] border border-solid border-border-title"></div>
//                 <div className="mt-[40px] flex items-center justify-end p-[8px_12px] ">
//                   <ul className="flex gap-[20px] p-[10px_0]">
//                     <li>
//                       <ButtonTFSecondary label={'Скасувати'} />
//                     </li>
//                     <li>
//                       <ButtonTFDisabled label={'Зберегти'} />
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </AdminContainer>
//         </div>
//         <div className="flex flex-col items-start gap-[38px] w-[358px] p-[40px_24px_24px_24px] bg-[#F7F2FA]">
//           <h2 className="text-text-color font-sans text-p font-medium leading-8">
//             Додайте необхідну кількість столів
//           </h2>
//           <div className="flex items-center p-[13px_0] justify-between pt-[19px] border-b-[0.5px] border-solid border-gray-500 h-[56px] w-[310px] ">
//             <p>Номери столів</p>
//             <button className="text-large" onClick={handleOpen}>
//               +
//             </button>
//           </div>
//           <p className="pt-[298px] pb-[32px] text-text-color font-sans text-p font-medium leading-8">
//             Клікніть на столик, щоб його редагувати
//           </p>
//           <p className="text-text-color font-sans text-p font-medium leading-8">
//             Перетягніть номери на відповідні столи зали{' '}
//           </p>
//         </div>
//       </div>

//       <Dialog open={openModal} onClose={handleClose}>
//         <div className="flex flex-col gap-[32px] p-[16px]">
//           <h1>Стіл 1</h1>
//           <div className="flex flex-col gap-[32px] p-[16px] w-[257px]">
//             <Formik
//               initialValues={initialValues}
//               validationSchema={validationSchema}
//               onSubmit={(values) => {
//                 console.log('Form submitted with values:', values)
//                 handleClose()
//               }}
//             >
//               {(props: FormikProps<FormValues>) => (
//                 <Form className="">
//                   <FormControl>
//                     <RadioGroup
//                       // aria-labelledby="demo-radio-buttons-group-label"
//                       name="countTable"
//                       // value={countTable}
//                       onChange={(e) =>
//                         handleCountTableChange(e.target.value, props)
//                       }
//                       className="flex flex-wrap flex-row gap-[25px] w-[395px]"
//                     >
//                       <FormControlLabel
//                         value="2 місця"
//                         control={
//                           <Radio
//                             sx={{
//                               '& .MuiSvgIcon-root': {
//                                 fontSize: 18,
//                               },
//                             }}
//                           />
//                         }
//                         label="2 місця"
//                         className="flex items-center gap-[4px] w-[103px] h-[20px] text-text-color font-sans text-small text-center font-normal leading-4"
//                       />
//                       <FormControlLabel
//                         value="4 місця"
//                         control={
//                           <Radio
//                             sx={{
//                               '& .MuiSvgIcon-root': {
//                                 fontSize: 18,
//                               },
//                             }}
//                           />
//                         }
//                         label="4 місця"
//                         className="flex items-center gap-[4px] w-[103px] h-[20px] text-text-color font-sans text-small text-center font-normal leading-4"
//                       />
//                       <FormControlLabel
//                         value="6 місць"
//                         control={
//                           <Radio
//                             sx={{
//                               '& .MuiSvgIcon-root': {
//                                 fontSize: 18,
//                               },
//                             }}
//                           />
//                         }
//                         label="6 місць"
//                         className="flex items-center gap-[4px] w-[103px] h-[20px] text-text-color font-sans text-small text-center font-normal leading-4"
//                       />
//                       <FormControlLabel
//                         value="8 місць"
//                         control={
//                           <Radio
//                             sx={{
//                               '& .MuiSvgIcon-root': {
//                                 fontSize: 18,
//                               },
//                             }}
//                           />
//                         }
//                         label="8 місць"
//                         className="flex items-center gap-[4px] w-[103px] h-[20px] text-text-color font-sans text-small text-center font-normal leading-4"
//                       />
//                       <FormControlLabel
//                         value="10 місць"
//                         control={
//                           <Radio
//                             sx={{
//                               '& .MuiSvgIcon-root': {
//                                 fontSize: 18,
//                               },
//                             }}
//                           />
//                         }
//                         label="10 місць"
//                         className="flex items-center gap-[4px] w-[103px] h-[20px] text-text-color font-sans text-small text-center font-normal leading-4"
//                       />
//                       <FormControlLabel
//                         value="12 місць"
//                         control={
//                           <Radio
//                             sx={{
//                               '& .MuiSvgIcon-root': {
//                                 fontSize: 18,
//                               },
//                             }}
//                           />
//                         }
//                         label="12 місць"
//                         className="flex items-center gap-[4px] w-[103px] h-[20px] text-text-color font-sans text-small text-center font-normal leading-4"
//                       />
//                     </RadioGroup>
//                     <Field name="countTable" />
//                   </FormControl>

//                   <FormControl>
//                     <RadioGroup
//                       // aria-labelledby="demo-radio-buttons-group-label"
//                       name="whereTable"
//                       value={whereTable}
//                       onChange={(e) =>
//                         handleWhereTableChange(e.target.value, props)
//                       }
//                       className="flex flex-wrap flex-row gap-[25px] w-[395px]"
//                     >
//                       <FormControlLabel
//                         value="Біля вікна"
//                         control={
//                           <Radio
//                             sx={{
//                               '& .MuiSvgIcon-root': {
//                                 fontSize: 18,
//                               },
//                             }}
//                           />
//                         }
//                         label="Біля вікна"
//                         className="flex items-center gap-[4px] w-[118px] h-[20px] text-text-color font-sans text-small text-center font-normal leading-4"
//                       />
//                       <FormControlLabel
//                         value="На терасі"
//                         control={
//                           <Radio
//                             sx={{
//                               '& .MuiSvgIcon-root': {
//                                 fontSize: 18,
//                               },
//                             }}
//                           />
//                         }
//                         label="На терасі"
//                         className="flex items-center gap-[4px] w-[118px] h-[20px] text-text-color font-sans text-small text-center font-normal leading-4"
//                       />
//                       <FormControlLabel
//                         value="В залі"
//                         control={
//                           <Radio
//                             sx={{
//                               '& .MuiSvgIcon-root': {
//                                 fontSize: 18,
//                               },
//                             }}
//                           />
//                         }
//                         label="В залі"
//                         className="flex items-center gap-[4px] w-[118px] h-[20px] text-text-color font-sans text-small text-center font-normal leading-4"
//                       />
//                     </RadioGroup>
//                     <Field name="whereTable" />
//                   </FormControl>
//                   <ul className="flex items-center gap-[12px]">
//                     <li>
//                       <button
//                         type="button"
//                         onClick={handleClose}
//                         className="font-sans text-[14px] text-text-color text-center font-normal leading-6 tracking-normal"
//                       >
//                         Скасувати
//                       </button>
//                     </li>

//                     <li>
//                       <button
//                         type="submit"
//                         className="w-[131px] p-[12px_24px] rounded-[100px] bg-stepper font-sans text-[14px] text-text-color text-center font-[300] leading-6 tracking-[0.15px]"
//                       >
//                         Підтвердити
//                       </button>
//                     </li>
//                   </ul>
//                 </Form>
//               )}
//             </Formik>
//           </div>
//         </div>
//       </Dialog>
//     </div>
//   )
// }
// export default RestaurantEditorPage
