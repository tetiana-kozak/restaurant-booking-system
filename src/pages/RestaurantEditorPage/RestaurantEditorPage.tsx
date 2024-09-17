import { useState, useEffect } from 'react'
import PageTitleSection from 'shared/typography/PageTitleSection'
import AdminContainer from 'shared/AdminContainer/AdminContainer'

import ButtonTFMain from 'shared/buttons/ButtonTFMain/ButtonTFMain'
import ButtonTFDisabled from 'shared/buttons/ButtonTFDisabled/ButtonTFDisabled'
import ButtonTFSecondary from 'shared/buttons/ButtonTFSecondary/ButtonTFSecondary'

import ModalAddTable from './ModalAddTable'
import ModalEditingTable from './ModalEditingTable'

import { tableType } from 'shared/types/restaurantsEntity'

import { useAppDispatch, useAppSelector } from 'redux/hooks'

import { getRestaurantTable } from 'pages/AdminPanelPage/userRestaurantsReduser'

// import {
//   DragDropContext,
//   Droppable,
//   Draggable,
//   DraggableLocation,
//   MovementMode,
// } from "react-beautiful-dnd";

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './RestaurantEditorPage.scss'

type Props = {}

// type DropResult = {
//   draggableId: string; // ідентифікатор перетягуваного елемента
//   type: string; // тип дропаблу
//   reason?: string; // причина, по якій викликано подію (не завжди доступна)
//   source: DraggableLocation; // місце, з якого елемент почав перетягуватися
//   destination?: DraggableLocation | null; // місце, куди елемент було перетягнуто (або null, якщо елемент було відпущено за межами дропаблу)
//   mode: MovementMode; // режим пересування (може бути FLUID або SNAP)
// };

const RestaurantEditorPage = (props: Props) => {
  const dispatch = useAppDispatch()
  const [openModal, setOpenModal] = useState(false)

  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)

  //openModalEditing
  const [openModalEditing, setOpenModalEditing] = useState(false)
  const [selectedTable, setSelectedTable] = useState<tableType | null>(null)

  const [selectedTables, setSelectedTables] = useState<tableType[]>([])

  console.log('selectedTables', selectedTables)

  useEffect(() => {
    dispatch(getRestaurantTable())
  }, [dispatch])

  const userRestaurantsTable: tableType[] = useAppSelector((state) => {
    return state.userRestaurants.userRestaurantsTable.tables
  })
  // console.log("getUserRestaurantsTable", userRestaurantsTable);

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

  //=======================================================

  const handleSelectTable = (table: tableType) => {
    setSelectedTables([...selectedTables, table])
  }

  //===================================
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)

  const onDragOverContainer = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const tableId = e.dataTransfer.getData('tableId')
    const selectedTable = userRestaurantsTable.find(
      (t) => t.id?.toString() === tableId
    )
    if (selectedTable) {
      handleSelectTable(selectedTable)
    }
  }

  const onDragStart = (index: number) => {
    setDraggedIndex(index)
  }

  // const onDragOver = (e: React.DragEvent<HTMLElement>) => {
  //   e.preventDefault()
  // }

  const onDragEnter = (index: number) => {
    if (draggedIndex === null || draggedIndex === index) return
    const newSelectedTables = [...selectedTables]
    const movedTable = newSelectedTables[draggedIndex]
    newSelectedTables.splice(draggedIndex, 1)
    newSelectedTables.splice(index, 0, movedTable)
    setSelectedTables(newSelectedTables)
    setDraggedIndex(index)
  }

  // const onDragEnd = () => {
  //   setDraggedIndex(null)
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
                <div
                  className="відмалювання кнопок flex items-center justify-center h-[611px] border border-solid border-border-title"
                  onDrop={onDrop}
                  onDragOver={onDragOverContainer}
                  
                >
                  {/* відмалювання кнопок */}
                  {selectedTables.map((table, index) => (
                    <button
                      key={table.id}
                      onClick={() => handleOpenEditing(table)}
                      onDragEnter={() => onDragEnter(index)}
                      className="w-[24px] h-[24px] bg-secondary rounded-[100px] shadow-slider font-sans text-[14px] text-text-color text-center font-[300] leading-4 cursor-pointer m-2"
                      draggable // Додаємо можливість перетягування
                      onDragStart={(e) => {
                        e.dataTransfer.setData(
                          'tableId',
                          table.id ? table.id.toString() : ''
                        )
                        onDragStart(index) // Викликаємо onDragStart для оновлення draggedIndex
                      }}
                    >
                      {table.title}
                    </button>
                  ))}
                </div>
                <div className="mt-[40px] flex items-center justify-end p-[8px_12px] ">
                  <ul className="flex gap-[20px] p-[10px_0]">
                    <li>
                      <ButtonTFSecondary label={'Скасувати'} />
                    </li>
                    <li>
                      {selectedTables.length === 0 ? (
                        <ButtonTFDisabled label={'Зберегти'} />
                      ) : (
                        <ButtonTFMain label={'Зберегти'} />
                      )}
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

          <ul className="button-item flex items-center flex-wrap w-[284px] gap-x-[24px] gap-y-[33px] p-[10px]">
            {userRestaurantsTable.map((table, index) => (
              <li
                key={table.id}
                draggable
                onDragStart={() => onDragStart(index)}
                onDragEnter={() => onDragEnter(index)}
                className="button-item flex items-center flex-wrap"
              >
                <button
                  key={table.id}
                  className="w-[24px] h-[24px] bg-secondary rounded-[100px] shadow-slider font-sans text-[14px] text-text-color text-center font-[300] leading-4 cursor-pointer"
                  onClick={() => handleOpenEditing(table)}
                  onDragStart={(e) =>
                    e.dataTransfer.setData(
                      'tableId',
                      table.id ? table.id.toString() : ''
                    )
                  }
                >
                  {table.title}
                </button>
              </li>
            ))}
          </ul>

          {/* <ul className="button-item flex items-center flex-wrap w-[284px] gap-x-[24px] gap-y-[33px] p-[10px]">
            {userRestaurantsTable.map((table, index) => (
              <li
                className="button-item flex items-center flex-wrap"
                draggable
                onDragStart={() => onDragStart(index)}
                onDragOver={onDragOver}
                onDragEnter={() => onDragEnter(index)}
                onDragEnd={onDragEnd}
                onClick={() => handleSelectTable(table)}
              >
                <button
                  key={table.id}
                  onClick={() => handleOpenEditing(table)}
                  className="w-[24px] h-[24px] bg-secondary rounded-[100px] shadow-slider font-sans text-[14px] text-text-color text-center font-[300] leading-4 cursor-pointer"
                >
                  {table.title}
                </button>
              </li>
            ))}
          </ul> */}

          {/* <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="constructorContainer">
                {(provided) => (
                  <ul
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="button-item flex items-center flex-wrap w-[284px] gap-x-[24px] gap-y-[33px] p-[10px]"
                  >
          
                    {userRestaurantsTable.map((table, index) => (
                      <Draggable
                        key={table.id}
                        draggableId={table.title}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="button-item flex items-center flex-wrap"
                            onClick={() => handleSelectTable(table)} // Додати обробник кліків для вибору столика
                          >
                            <button
                              key={table.id}
                              onClick={() => handleOpenEditing(table)}
                              className="w-[24px] h-[24px] bg-secondary rounded-[100px] shadow-slider font-sans text-[14px] text-text-color text-center font-[300] leading-4 cursor-pointer"
                            >
                              {table.title}
                            </button>
                          </li>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext> */}
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
      <ModalAddTable openModal={openModal} handleClose={handleClose} />

      <ToastContainer />
    </div>
  )
}
export default RestaurantEditorPage
