import { Link } from 'react-router-dom'
import './SidebarNavigation.scss'

import { CheckIcon } from '../../assets/svgSidebar/check';
import {ApertureSidebar} from '../../assets/svgSidebar/aperturesidebar';
import {Gridsidebar} from '../../assets/svgSidebar/gridsidebar';
import {HomeSidebar} from '../../assets/svgSidebar/homesidebar';
import { LinkSidebar } from '../../assets/svgSidebar/linksidebar';
import { UserSidebar } from '../../assets/svgSidebar/usersidebar';




type Props = {}

const SidebarNavigation = (props: Props) => {
  return (
    <nav className="sidebar-menu  ">
      <ul className="sidebar-menu-list">
        <Link to={'/admin-panel'} className="flex gap-[12px]">
            <HomeSidebar />
            <li className="item icon-adm mb-[32px]">Адміністратор</li>
    
        </Link>
        <Link to={'restaurant-editor'} className="flex gap-[12px]">
          <Gridsidebar />
          <li className="item icon-constructor mb-[32px]">Конструктор залу</li>
        </Link>
        <Link to={'restaurant-booking'} className="flex gap-[12px]">
          <CheckIcon/> 
          <li className="item icon-booking mb-[32px]">Бронювання</li>
        </Link>
        <Link to={'personal-cabinet'} className="flex gap-[12px]">
          <UserSidebar/>
          <li className="item icon-cabinet mb-[32px]">Особистий кабінет</li>
        </Link>
        <Link to={'generate-link'} className="flex gap-[12px]">
          <LinkSidebar/>
          <li className="item icon-link mb-[32px]">Link</li>
        </Link>
        <Link to={'change-colors'} className="flex gap-[12px]">
          <ApertureSidebar/>
          <li className="item icon-color ">Colors</li>
        </Link>
      </ul>
    </nav>
  )
}
export default SidebarNavigation
