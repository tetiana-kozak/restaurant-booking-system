import AllRestaurantsTable from 'pages/AdminPanelPage/AllRestaurantsTable/AllRestaurantsTable'
import ModalContainer from 'shared/modals/editRestaurantModal/ModalContainer/ModalContainer'
import PageTitleSection from 'shared/typography/PageTitleSection'
import { useState } from 'react'
import { restaurantType } from 'shared/types/restaurantsEntity'

type Props = {}
const AdminPanelPage = (props: Props) => {
  const [openModal, setOpenModal] = useState(false)
  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)

  const [selectedRestaurant, setSelectedRestaurant] = useState<restaurantType>({
    id: 0,
    title: '',
    description: '',
    location: '',
    city: '',
    type: '',
    user: {
      id: 0,
      email: '',
      bio: '',
      image: '',
    },
  })

  return (
    <>
      <div>
        <PageTitleSection>Адміністратор</PageTitleSection>
        <div className="mt-[32px]">
          <div className="flex items-center justify-between mb-[32px]">
            <h2>Таблиця закладів</h2>
            <button className="text-large" onClick={handleOpen}>
              +
            </button>
          </div>
          <AllRestaurantsTable
            setSelectedRestaurant={setSelectedRestaurant}
            selectedRestaurant={selectedRestaurant}
          />
        </div>
      </div>

      <ModalContainer
        handleClose={handleClose}
        openModal={openModal}
        title={'Додати заклад'}
        onSubmitAction={'add'}
      />
    </>
  )
}
export default AdminPanelPage
