import AllRestaurantsTable from 'pages/AdminPanelPage/AllRestaurantsTable/AllRestaurantsTable'
import ModalContainer from 'shared/modals/editRestaurantModal/ModalContainer/ModalContainer'
import PageTitleSection from 'shared/typography/PageTitleSection'
import { useState } from 'react'
import { restaurantType } from 'shared/types/restaurantsEntity'
import AddIcon from '@mui/icons-material/Add'


type Props = {};
const AdminPanelPage = (props: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const [selectedRestaurant, setSelectedRestaurant] = useState<restaurantType>({
    id: 0,
    title: "",
    description: "",
    location: "",
    city: "",
    type: "",
    user: {
      id: 0,
      email: "",
      bio: "",
      image: "",
    },
  });

  return (
    <AdminContainer>
      <div>
        <PageTitleSection>Адміністратор</PageTitleSection>
        <div className="mt-[32px]">
          <div className="flex items-center justify-between mb-[32px]">
            <h2 className="text-p">Створити заклад</h2>
            <button className="text-large" onClick={handleOpen}>
              <AddIcon />
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
        title={"Додати заклад"}
        onSubmitAction={"add"}
      />
    </AdminContainer>
  );
};
export default AdminPanelPage;
