import Logo from 'components/Logo/Logo'

import './Sidebar.scss'
import SidebarNavigation from 'components/SidebarNavigation/SidebarNavigation'
import HotelSearch from './HotelSearch'
import {Exit} from './Exit'
import ButtonSidebar from '../ButtonSidebar'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <>
     
        <div className="sidebar-container flex">
          <div>
            <Logo  />
            <HotelSearch/>
            <SidebarNavigation />
            <Exit />
          </div>
          <div className='buttonClose'><ButtonSidebar /></div>
          
        </div>
        
      
    </>
  )
}
export default Sidebar
