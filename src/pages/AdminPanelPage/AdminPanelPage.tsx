import AllRestaurantsTable from 'pages/AdminPanelPage/AllRestaurantsTable/AllRestaurantsTable'
import ModalContainer from 'shared/modals/editRestaurantModal/ModalContainer/ModalContainer'
import PageTitleSection from 'shared/typography/PageTitleSection'
import { useState } from 'react'
import { restaurantType } from 'shared/types/restaurantsEntity'
import AdminContainer from 'shared/AdminContainer/AdminContainer'
import {UserSidebar} from 'assets/icons/UserSidebar';
 
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
    <AdminContainer>
      <div>
        <div className="flex items-center justify-between p-[0_8px] border-b-2 border-border-title border-solid">
        <PageTitleSection>Адміністратор</PageTitleSection>
        <button className='flex items-center justify-center w-[48px] h-[48px] rounded-100 border-solid border-[#000] border'>
          <UserSidebar />
        </button>
        </div>

        <div className="mt-[32px]">
          <div className="p-[0px_16px] flex items-center justify-between mb-[32px]">
            <h2 className=' text-text-color text-center font-sans text-p font-normal leading-8'>Таблиця закладів</h2>
            <button className="text-large" onClick={handleOpen}>
              +
            </button>
          </div>
          <div>
            <ul className="flex gap-[67.25px] p-[0px_40px] justify-between items-center bg-button-secondary rounded-[5px]">
              <li className="p-[12px_0] w-[179px] text-white text-center font-sans text-small font-normal leading-6">Назва закладу</li>
              <li className="p-[12px_0] w-[141px] text-white text-center font-sans text-small font-normal leading-6">Тип</li>
              <li className="p-[12px_0] w-[239px] text-white text-center font-sans text-small font-normal leading-6">Адреса</li>
              <li className="p-[12px_0] w-[117px] text-white text-center font-sans text-small font-normal leading-6">Редагувати</li>
              <li className="p-[12px_0] w-[103px] text-white text-center font-sans text-small font-normal leading-6">Видалити</li>
            </ul>
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
    </AdminContainer>
  )
}
export default AdminPanelPage

