import VisitorPageTitle from 'shared/typography/VisitorPageTitle'
import successIcon from 'assets/icons/success.svg'
import ButtonTFMain from 'shared/buttons/ButtonTFMain/ButtonTFMain'
import ButtonTFSecondary from 'shared/buttons/ButtonTFSecondary/ButtonTFSecondary'
import { useNavigate } from 'react-router-dom'

type Props = {}
const SuccessPage = (props: Props) => {
  let navigate = useNavigate()
  return (
    <div className="max-w-568 m-auto py-36 px-16 md:px-0 flex flex-col gap-50">
      <VisitorPageTitle>Реєстрація ресторатора</VisitorPageTitle>
      <div className="flex flex-col gap-20 justify-center items-center">
        <img
          src={successIcon}
          alt="success-icon"
          className="w-120 h-120 md:w-185 md:h-185"
        />
        <VisitorPageTitle>Успішно!</VisitorPageTitle>
        <p className="text-normal md:text-p">Ви успішно зареєструвались</p>
      </div>
      <div className="flex justify-center items-center">
        <ButtonTFMain
          label="Створення ресторану"
          onClick={() => navigate('/admin-panel')}
        />
      </div>
    </div>
  )
}
export default SuccessPage
