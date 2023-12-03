import { Link } from 'react-router-dom'
import './SidebarNavigation.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';

type Props = {}

const SidebarNavigation = (props: Props) => {
  return (
    <nav className="sidebar-menu  ">
      <ul className="sidebar-menu-list">
        <Link to={'/admin-panel'} className="flex gap-[12px]">
            <HomeOutlinedIcon />
            <li className="item icon-adm mb-[32px]">Адміністратор</li>
    
        </Link>
        <Link to={'restaurant-editor'} className="flex gap-[12px]">
          <GridViewOutlinedIcon />
          <li className="item icon-constructor mb-[32px]">Конструктор залу</li>
        </Link>
        <Link to={'restaurant-booking'} className="flex gap-[12px]">
          <CheckBoxOutlinedIcon />
          <li className="item icon-booking mb-[32px]">Бронювання</li>
        </Link>
        <Link to={'personal-cabinet'} className="flex gap-[12px]">
          <PersonOutlineOutlinedIcon/>
          <li className="item icon-cabinet mb-[32px]">Особистий кабінет</li>
        </Link>
        <Link to={'generate-link'} className="flex gap-[12px]">
          <LinkOutlinedIcon/>
          <li className="item icon-link mb-[32px]">Link</li>
        </Link>
        <Link to={'change-colors'} className="flex gap-[12px]">
          <ColorLensOutlinedIcon/>
          <li className="item icon-color ">Colors</li>
        </Link>
      </ul>
    </nav>
  )
}
export default SidebarNavigation
