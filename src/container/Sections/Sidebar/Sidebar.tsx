import Logo from 'components/Logo/Logo'
import './Sidebar.scss'
import SidebarNavigation from 'components/SidebarNavigation/SidebarNavigation'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <>
      <div className="sidebar-container">
        <Logo />
        <SidebarNavigation />
      </div>
    </>
  )
}
export default Sidebar
