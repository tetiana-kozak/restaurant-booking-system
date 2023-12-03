import Logo from 'components/Logo/Logo'

import './Sidebar.scss'
import SidebarNavigation from 'components/SidebarNavigation/SidebarNavigation'
import HotelSearch from './HotelSearch'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <>
      <div className="sidebar-container">
        <Logo  />
        <HotelSearch/>
        <SidebarNavigation />
      </div>
    </>
  )
}
export default Sidebar
