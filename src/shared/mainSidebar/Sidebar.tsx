import { useState } from "react";
import { Button } from "@mui/material";
import SidebarNavigation from "shared/mainSidebar/adminSidebar/SidebarNavigation";
import SidebarNavigationMini from "shared/mainSidebar/adminSidebar/SidebarNavigationMini";
import { ChevronLeft, ChevronRight } from "../../assets/icons/UserSidebar";

type Props = {
  onToggle: () => void;
};

const Sidebar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    props.onToggle();
  };

  return (
    <>
      <div className={`flex gap-[12px] bg-iframe_bg_color pl-[24px] ${isOpen ? "w-[109px]" : "w-[252px]"} h-[900px] shadow-slider rounded-r-lg`}>
        <div>{isOpen ? <SidebarNavigationMini /> : <SidebarNavigation />}</div>
        <div className="flex items-center justify-center p-[10px] w-[25px] h-[900px] bg-white border-solid border-l-button-disabled rounded-r-lg border-l">
          <Button onClick={handleToggle}>{isOpen ? <ChevronLeft /> : <ChevronRight />}</Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
