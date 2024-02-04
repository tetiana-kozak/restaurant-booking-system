import { Link } from 'react-router-dom'

import {
  CheckIcon,
  ApertureSidebar,
  Gridsidebar,
  HomeSidebar,
  LinkSidebar,
  UserSidebar,
  LogOut,
} from '../../../assets/icons/UserSidebar'

import { GoChevronDown } from 'react-icons/go'
import LogoSvg from 'assets/icons/logo.svg'

// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

type Props = {}

const SidebarNavigationMini = (props: Props) => {
  const navigate = useNavigate()

  const handelLogOut = () => {
    //log out logic
    console.log('Log Out')
    navigate('/sign-up')
  }

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
        <div className="border-b-[0.5px] border-solid border-gray-500 flex h-[56px] w-[48px] ">
          <input className="bg-[#F7F2FA] pt-[4px] pb-[4px] w-[48px]"></input>
          {/* <button
          onClick={(event) => console.log(event)}
          type="button"
          className="w-[10px] mb-[5px] cursor-pointer"
        >
          <GoChevronDown />
        </button> */}
        </div>
        {/* <p className="text-[#CAC4D0] text-[12px] ml-[0px] mt-[4px]">
        Введіть назву
      </p> */}
      </div>

      <nav className="">
        <ul className="flex flex-col gap-[4px] w-[36px]">
          <Link to={'/admin-panel'} className="flex gap-[12px] p-[18px_8px]">
            <HomeSidebar />
            {/* <li className="font-sans text-normal text-text-color text-center font-normal leading-6">Адміністратор</li> */}
          </Link>
          <Link
            to={'restaurant-editor'}
            className="flex gap-[12px] p-[18px_8px]"
          >
            <Gridsidebar />
            {/* <li className="font-sans text-normal text-text-color text-center font-normal leading-6">Конструктор залу</li> */}
          </Link>
          <Link
            to={'restaurant-booking'}
            className="flex gap-[12px] p-[18px_8px]"
          >
            <CheckIcon />
            {/* <li className="font-sans text-normal text-text-color text-center font-normal leading-6">Бронювання</li> */}
          </Link>
          <Link
            to={'personal-cabinet'}
            className="flex gap-[12px] p-[18px_8px]"
          >
            <UserSidebar />
            {/* <li className="font-sans text-normal text-text-color text-center font-normal leading-6">Особистий кабінет</li> */}
          </Link>
          <Link to={'generate-link'} className="flex gap-[12px] p-[18px_8px]">
            <LinkSidebar />
            {/* <li className="font-sans text-normal text-text-color text-center font-normal leading-6">Link</li> */}
          </Link>
          <Link to={'change-colors'} className="flex gap-[12px] p-[18px_8px]">
            <ApertureSidebar />
            {/* <li className="font-sans text-normal text-text-color text-center font-normal leading-6">Colors</li> */}
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
  )
}
export default SidebarNavigationMini
