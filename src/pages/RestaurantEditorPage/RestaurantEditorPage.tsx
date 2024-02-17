import PageTitleSection from "shared/typography/PageTitleSection";
import { useState } from "react";
// import { restaurantType } from "shared/types/restaurantsEntity";
import AdminContainer from "shared/AdminContainer/AdminContainer";
// import ButtonTFMain from "shared/buttons/ButtonTFMain/ButtonTFMain";
import ButtonTFDisabled from "shared/buttons/ButtonTFDisabled/ButtonTFDisabled";
import ButtonTFSecondary from "shared/buttons/ButtonTFSecondary/ButtonTFSecondary";
import { Dialog } from "@mui/material";
import "../../shared/mainSidebar/adminSidebar/SidebarNavigation.scss";
type Props = {};
const RestaurantEditorPage = (props: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  // const [selectedRestaurant, setSelectedRestaurant] = useState<restaurantType>({
  //   id: 0,
  //   title: "",
  //   description: "",
  //   location: "",
  //   city: "",
  //   type: "",
  //   user: {
  //     id: 0,
  //     email: "",
  //     bio: "",
  //     image: "",
  //   },
  // });

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
                <div className=" flex direction-column h-[611px] border border-solid border-border-title"></div>
                <div className="mt-[40px] flex items-center justify-end p-[8px_12px] ">
                  <ul className="flex gap-[20px] p-[10px_0]">
                    <li>
                      <ButtonTFSecondary label={"Скасувати"} />
                    </li>
                    <li>
                      <ButtonTFDisabled label={"Зберегти"} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AdminContainer>
        </div>
        <div className=" flex flex-col items-start gap-[38px] w-[358px] p-[40px_24px_24px_24px] bg-[#F7F2FA]">
          <h2 className="text-text-color font-sans text-p font-medium leading-8">
            Додайте необхідну кількість столів
          </h2>
          <div className="flex items-center p-[13px_0] justify-between pt-[19px] border-b-[0.5px] border-solid border-gray-500 h-[56px] w-[310px] ">
            <p>Номери столів</p>
            <button className="text-large" onClick={handleOpen}>
              +
            </button>
          </div>
          <p className="pt-[298px] pb-[32px] text-text-color font-sans text-p font-medium leading-8">
            Клікніть на столик, щоб його редагувати
          </p>
          <p className="text-text-color font-sans text-p font-medium leading-8">
            Перетягніть номери на відповідні столи зали{" "}
          </p>
        </div>
      </div>
      <Dialog open={openModal} onClose={handleClose}>
        <h1>hello</h1>
      </Dialog>
    </div>
  );
};
export default RestaurantEditorPage;
