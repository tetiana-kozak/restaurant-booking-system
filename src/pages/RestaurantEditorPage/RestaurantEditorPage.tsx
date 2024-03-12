import { useState, useEffect } from 'react'
import PageTitleSection from 'shared/typography/PageTitleSection'
import { Formik, Form, FormikProps } from 'formik'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import * as Yup from 'yup'
import AdminContainer from 'shared/AdminContainer/AdminContainer'
//test
import ButtonTFMain from 'shared/buttons/ButtonTFMain/ButtonTFMain'
//test
import ButtonTFDisabled from 'shared/buttons/ButtonTFDisabled/ButtonTFDisabled'
import ButtonTFSecondary from 'shared/buttons/ButtonTFSecondary/ButtonTFSecondary'

import ButtonAddTableTFDisabled from 'shared/buttons/ButtonAddTableTFDisabled/ButtonAddTableTFDisabled'
import ButtonAddTableTFSecondary from 'shared/buttons/ButtonAddTableTFSecondary/ButtonAddTableTFSecondary'
import ButtonAddTableTFActive from 'shared/buttons/ButtonAddTableTFActive/ButtonAddTableTFActive'

import { Dialog } from '@mui/material'
import TextField from '@mui/material/TextField'
import './RestaurantEditorPage.scss'
// import ModalAddTable from './ModalAddTable'
// import ModalDeleteTable from './ModalDeleteTable'
import ModalEditingTable from './ModalEditingTable'

import {
  // restaurantTableType,
  // getTableType,
  tableType
} from 'shared/types/restaurantsEntity'

import { useAppDispatch, useAppSelector } from 'redux/hooks'

import {
  createRestaurantTable,
  getRestaurantTable,
} from 'pages/AdminPanelPage/userRestaurantsReduser'

// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
type Props = {}
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

// interface DroppableProvided {
//   droppableProps: {
//     // Об'єкт, що містить властивості, які слід передати до Droppable компонента
//     // Наприклад, класи, події, тощо.
//     [key: string]: any;
//   };
//   innerRef: React.RefObject<HTMLElement>;
//   // Інші властивості, які можуть бути використані в контексті даних
// }

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Обов'язкове поле"),
  seatsCount: Yup.number().required("Обов'язкове поле"),
  // whereTable: Yup.string().required("Обов'язкове поле"),
})

// interface Table {
//   restaurantId: number;
//   floorId: number;
//   title: string;
//   seatsCount: number;
// }

// const tables: Table[] = [
//   { restaurantId: 150, floorId: 2, title: '1', seatsCount: 2 },
//   { restaurantId: 150, floorId: 2, title: '2', seatsCount: 3 },
//   { restaurantId: 150, floorId: 2, title: '3', seatsCount: 3 },
//   { restaurantId: 150, floorId: 2, title: '4', seatsCount: 3 },
//   { restaurantId: 150, floorId: 2, title: '5', seatsCount: 3 },
//   { restaurantId: 150, floorId: 2, title: '6', seatsCount: 3 },
//   { restaurantId: 150, floorId: 2, title: '7', seatsCount: 3 },
// ];

const RestaurantEditorPage = (props: Props) => {
  const dispatch = useAppDispatch()
  const [openModal, setOpenModal] = useState(false)

  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)

  //openModalEditing
  const [openModalEditing, setOpenModalEditing] = useState(false)
  const [selectedTable, setSelectedTable] = useState<tableType | null>(null)

  useEffect(() => {
    dispatch(getRestaurantTable())
  }, [dispatch])

  const userRestaurantsTable: tableType[] = useAppSelector((state) => {
    return state.userRestaurants.userRestaurantsTable.tables
  })
  console.log('getUserRestaurantsTable', userRestaurantsTable)

  const handleOpenEditing = (table: tableType) => {
    setSelectedTable(table)
    setOpenModalEditing(true)
  }

  const handleCloseEditing = () => {
    setOpenModalEditing(false)
    setSelectedTable(null)
  }

  //openModalEditing

  const userRestaurantsCurrent = useAppSelector(
    (state) => state.userRestaurants.userRestaurantsCurrent
  )

  console.log('userRestaurantsCurrent', userRestaurantsCurrent)

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
    const selectedRestaurant = userRestaurantsCurrent[0]
    if (!selectedRestaurant) {
      console.log('Виберіть ресторан')
      toast.error('Виберіть ресторан', {
        position: toast.POSITION.TOP_RIGHT,
      })
    } else if (selectedRestaurant) {
      const formDataWithStaticData = {
        restaurantId: selectedRestaurant.id,
        floorId: 54,
        ...values,
      }
      dispatch(createRestaurantTable(formDataWithStaticData))
      console.log('Form submitted with values:', formDataWithStaticData)
      handleClose()
    }
  }

  // const handleWhereTableChange = (
  //   value: string,
  //   props: FormikProps<FormValues>
  // ) => {
  //   props.setFieldValue('whereTable', value)
  // }

  // const handleDragEnd = (result: any) => {
  //   if (!result.destination) {
  //     return;
  //   }

  //   const items = Array.from(tables);
  //   const [reorderedItem] = items.splice(result.source.index, 1);
  //   items.splice(result.destination.index, 0, reorderedItem);
  //   // оновіть стан компонента з використанням нового порядку
  //   // setTables(items); // оновити стан, якщо `tables` зберігається в стані
  // };

  // const finalSpaceCharacters = [
  //   { id: '150', title: '1' },
  //   { id: '151', title: '2' },
  //   { id: '152', title: '3' },
  //   { id: '153', title: '4' },
  //   { id: '154', title: '5' },
  //   { id: '155', title: '6' },
  //   { id: '156', title: '7' },
  // ]

  // const finalSpaceCharacters = [
  //   { id: 'gary', name: 'Gary Goodspeed', thumb: '/images/gary.png' },
  //   { id: 'cato', name: 'Little Cato', thumb: '/images/cato.png' },
  //   { id: 'kvn', name: 'KVN', thumb: '/images/kvn.png' },
  //   { id: 'mooncake', name: 'Mooncake', thumb: '/images/mooncake.png' },
  //   { id: 'quinn', name: 'Quinn Ergon', thumb: '/images/quinn.png' }
  // ]

  // const [characters, updateCharacters] = useState(finalSpaceCharacters)

  // function handleOnDragEnd(result: any) {
  //   if (!result.destination) return

  //   const items = Array.from(characters)
  //   const [reorderedItem] = items.splice(result.source.index, 1)
  //   items.splice(result.destination.index, 0, reorderedItem)

  //   updateCharacters(items)
  // }

  return (
    <div className="select-modal">
      <div className="flex">
        <div className="w-[80%]">
          <AdminContainer>
            <div>
              <div className="flex items-center justify-between p-[0_8px] border-b-2 border-border-title border-solid">
                <PageTitleSection>Конструктор зали</PageTitleSection>
              </div>

              <div className="mt-[32px]">
                <div className=" flex direction-column h-[611px] border border-solid border-border-title">
                  {/* {newArray.length > 0 && */}
                  {/* {tables.map(({title}) => (
            <button>{title}</button>
          ))} */}
                  {/* <ModalDeleteTable
                    openModal={openDeleteModal}
                    handleClose={handleCloseDelete}
                  /> */}
                </div>
                <div className="mt-[40px] flex items-center justify-end p-[8px_12px] ">
                  <ul className="flex gap-[20px] p-[10px_0]">
                    <li>
                      <ButtonTFSecondary label={'Скасувати'} />
                    </li>
                    <li>
                      <ButtonTFDisabled label={'Зберегти'} />

                      <ButtonTFMain label={'test'} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AdminContainer>
        </div>
        <div className="flex flex-col items-start gap-[38px] w-[358px] p-[40px_24px_24px_24px] bg-[#F7F2FA]">
          <h2 className="text-text-color font-sans text-p font-medium leading-8">
            Додайте необхідну кількість столів
          </h2>
          <div className="flex items-center p-[13px_0] justify-between pt-[19px] border-b-[0.5px] border-solid border-gray-500 h-[56px] w-[310px]">
            <p>Номери столів</p>
            <button className="text-large" onClick={handleOpen}>
              +
            </button>
          </div>

          <ul>
            <li className="flex items-center flex-wrap gap-x-[24px] gap-y-[33px] w-[284px] p-[10px]">
              {userRestaurantsTable.map((table) => (
                <button
                  key={table.id}
                  onClick={() => handleOpenEditing(table)}
                  className="w-[24px] h-[24px] bg-secondary rounded-[100px] shadow-slider font-sans text-[14px] text-text-color text-center  font-[300] leading-4 cursor-pointer"
                >
                  {table.title}
                </button>
              ))}
            </li>
          </ul>
          <p className="pt-[298px] pb-[32px] text-text-color font-sans text-p font-medium leading-8">
            Клікніть на столик, щоб його редагувати
          </p>
          <p className="text-text-color font-sans text-p font-medium leading-8">
            Перетягніть номери на відповідні столи зали{' '}
          </p>
        </div>
      </div>

      <ModalEditingTable
        openModal={openModalEditing}
        handleClose={handleCloseEditing}
        tableInfo={selectedTable}
      />
      {/* <ModalAddTable openModal={openModal} handleClose={handleClose} /> */}

      {/* <div className="App">
      <div className="App-header">
          <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({id, title}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="flex items-center flex-wrap gap-x-[24px] gap-y-[33px] w-[284px] p-[10px]">
                          <div className="characters-thumb">
                          <button className="w-[24px] h-[24px] bg-secondary rounded-[100px] shadow-slider font-sans text-[14px] text-text-color text-center  font-[300] leading-4 cursor-pointer">{title}</button>
                          </div>
                   
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        </div>
        </div> */}

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
              {/* <button onClick={handleOpenDelete}>Видалити столик</button> */}
            </Form>
          )}
        </Formik>
      </Dialog>
      <ToastContainer />
    </div>
  )
}
export default RestaurantEditorPage
