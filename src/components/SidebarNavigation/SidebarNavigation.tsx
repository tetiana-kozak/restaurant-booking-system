import { Link } from 'react-router-dom'
import './SidebarNavigation.scss'

type Props = {}

const SidebarNavigation = (props: Props) => {
  return (
    <nav className="sidebar-menu">
      <ul className="sidebar-menu-list">
        <Link to={'/admin-panel'}>
          <li className="item icon-adm">Адміністратор</li>
        </Link>
        <Link to={'restaurant-editor'}>
          <li className="item icon-constructor">Конструктор залу</li>
        </Link>
        <Link to={'restaurant-booking'}>
          <li className="item icon-booking">Бронювання</li>
        </Link>
        <Link to={'restaurant-calendar'}>
          <li className="item icon-calendar">Календар</li>
        </Link>
      </ul>
    </nav>
  )
}
export default SidebarNavigation
