import AllRestaurantsTable from 'components/AllRestaurantsTable/AllRestaurantsTable'
import ModalContainer from 'components/Modals/ModalContainer/ModalContainer'
import PageTitleSection from 'components/Titles/PageTitleSection'
import { useState } from 'react'

type Props = {}
const AdminPanelPage = (props: Props) => {
  const [openModal, setOpenModal] = useState(false)
  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)

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
          <AllRestaurantsTable />
        </div>
      </div>

      <ModalContainer
        handleClose={handleClose}
        openModal={openModal}
        title={'Додати заклад'}
      />
    </>
  )
}
export default AdminPanelPage
