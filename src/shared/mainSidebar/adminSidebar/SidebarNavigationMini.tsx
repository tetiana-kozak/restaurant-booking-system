import { Link, useNavigate } from "react-router-dom";

// import SidebarSelect from "./SidebarSelect";

import {
  CheckIcon,
  ApertureSidebar,
  Gridsidebar,
  HomeSidebar,
  LinkSidebar,
  UserSidebar,
  LogOut,
} from "../../../assets/icons/UserSidebar";

import LogoSvg from "assets/icons/logo.svg";

type Props = {};

const SidebarNavigationMini = (props: Props) => {
  const navigate = useNavigate();

  const handelLogOut = () => {
    console.log("Log Out");
    navigate("/sign-up");
  };

  return (
    <>
      <div className="mb-[28px]">
        <div className="mb-[60px] ml-[0px] pt-[48px] h-[36px] w-[42px]">
          <img
            src={LogoSvg}
            alt="Table Flow Logo"
            className="h-[36px] w-[42px]"
          />
        </div>
        <div className="flex h-[56px] w-[48px]">
          {/* <SidebarSelect /> */}
        </div>
      </div>

      <nav className="w-[37px]">
        <ul className="flex flex-col gap-[4px] w-[36px]">
          <Link to={"/admin-panel"} className="flex gap-[12px] p-[18px_8px]">
            <HomeSidebar />
          </Link>
          <Link
            to={"restaurant-editor"}
            className="flex gap-[12px] p-[18px_8px]"
          >
            <Gridsidebar />
          </Link>
          <Link
            to={"restaurant-booking"}
            className="flex gap-[12px] p-[18px_8px]"
          >
            <CheckIcon />
          </Link>
          <Link
            to={"personal-cabinet"}
            className="flex gap-[12px] p-[18px_8px]"
          >
            <UserSidebar />
          </Link>
          <Link to={"generate-link"} className="flex gap-[12px] p-[18px_8px]">
            <LinkSidebar />
          </Link>
          <Link to={"change-colors"} className="flex gap-[12px] p-[18px_8px]">
            <ApertureSidebar />
          </Link>
        </ul>
      </nav>

      <button
        onClick={handelLogOut}
        type="button"
        className="flex mt-[110px] gap-[16px] p-[18px_8px] cursor-pointer"
      >
        <LogOut />
      </button>
    </>
  );
};
export default SidebarNavigationMini;
