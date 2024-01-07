import './Logo.scss'
import LogoSvg from './logo.svg'
type Props = {}

const Logo = (props: Props) => {
  return <div className="mb-[27px] ml-[52px]">
    <img src={LogoSvg} alt="Table Flow Logo" />
  </div>
}
export default Logo
