import { useState } from "react";

import SidebarNavigation from "shared/mainSidebar/adminSidebar/SidebarNavigation";
import SidebarNavigationMini from "shared/mainSidebar/adminSidebar/SidebarNavigationMini";

import { ChevronLeft } from "../../assets/icons/UserSidebar";

type Props = {};

const Sidebar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWidth, setIsWidth] = useState("261px");

  const handleToggle = () => {
    if (isOpen === false) {
      setIsOpen(true);
      setIsWidth("104px");
    } else {
      setIsOpen(false);
      setIsWidth("261px");
    }
  };
console.log(isWidth)
  const sidebarWidthClass = isOpen ? "w-[109px]" : "w-[252px]";

  return (
    <>
      <div
        className={`flex gap-[12px] bg-iframe_bg_color pl-[24px] ${sidebarWidthClass} h-[900px] shadow-slider rounded-r-lg`}
      >
        <div>{isOpen ? <SidebarNavigationMini /> : <SidebarNavigation />}</div>
        <div className="flex items-center justify-center p-[10px] w-[25px] h-[900px] bg-white border-solid border-l-button-disabled rounded-r-lg border-l">
          <button
            onClick={handleToggle}
            className="w-[25px] h-[900px]"
            // className="flex items-center justify-center p-[10px] w-[25px] h-[900px] ml-[20px] bg-white border-solid border-l-button-disabled rounded-r-lg cursor-pointer"
          >
            <ChevronLeft />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
