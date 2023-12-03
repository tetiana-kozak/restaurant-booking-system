import { InfoIcon } from 'assets/icons/Info';
import ButtonTFMain from 'components/Buttons/ButtonTFMain/ButtonTFMain';
import ButtonTFPrimary from 'components/Buttons/ButtonTFPrimary/ButtonTFPrimary';
import { useNavigate } from 'react-router-dom';



const SharedBlockUnregisteredUser = () => {
  const navigate = useNavigate();

  const redirectToSignIn = () => {
    navigate('/sign-in');
  };

  const redirectToSignUp = () => {
    navigate('/sign-up');
  };

  return (
    <div>
      <div className="w-552">
        <h2 className="font-sans text-h2 text-text-color mb-50">
          Забронюйте столик онлайн
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
        <ButtonTFPrimary onClick={redirectToSignIn} label={"Реєстрація"}/>
        <ButtonTFMain onClick={redirectToSignUp} label={"Вхід"}/>
      </div>
      <div className="w-552 flex items-center flex-start gap-20">
        <InfoIcon />
        <p className="font-sans text-p"> Інформація для рестораторів</p>
      </div>
    </div>
  )
}

export default SharedBlockUnregisteredUser;
