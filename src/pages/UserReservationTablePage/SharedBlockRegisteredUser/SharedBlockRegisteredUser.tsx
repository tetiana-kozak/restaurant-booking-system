import { InfoIcon } from 'assets/icons/Info';
import ButtonTFMain from 'components/Buttons/ButtonTFMain/ButtonTFMain';
import { useNavigate } from 'react-router-dom';


const SharedBlockRegisteredUser = () => {
  const navigate = useNavigate();

  //ЗМІНИТИ РЕДІРЕКТ, коли буде створено сторінку та роут "Особистий кабінет"
  const redirectToPersonalOffice = () => {
    navigate('sign-in');
  }

  return (
    <div>
      <div className="w-552">
        <h2 className="font-sans text-h2 text-text-color mb-50">
          Вітаємо, User
        </h2>
        <p className="font-sans text-p mb-30">
          Забудьте про довгі черги та незручні дзвінки.
        </p>
        <p className="font-sans text-p mb-30">
          Наш онлайн-сервіс дозволить вам здійснити бронювання в будь-який час
          доби, навіть коли ресторан закритий.
        </p>
        <p className="font-sans text-p mb-50">
          Звісно, ви можете забронювати столик як гість, але щоб мати можливість
          відстежувати свої бронювання столиків та користуватися всіма
          перевагами нашого сервісу, будь ласка, увійдіть в свій особистий
          аккаунт або зареєструйтесь.
        </p>
      </div>
      <div className="w-552 flex items-center justify-center gap-40 mb-264">
        <ButtonTFMain onClick={redirectToPersonalOffice} label={"Особистий кабінет"} />
      </div>
      <div className="w-552 flex items-center flex-start gap-20">
        <InfoIcon />
        <p className="font-sans text-p"> Інформація для рестораторів</p>
      </div>
    </div>
  )
}

export default SharedBlockRegisteredUser
