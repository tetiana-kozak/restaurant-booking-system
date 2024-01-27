
import { InfoIcon } from 'assets/icons/Info';
import { useNavigate } from 'react-router-dom';
import ButtonTFMain from 'shared/buttons/ButtonTFMain/ButtonTFMain';

type Props = {};

const SharedBlockRegisteredUser = () => {
  const navigate = useNavigate();

  //ЗМІНИТИ РЕДІРЕКТ, коли буде створено сторінку та роут "Особистий кабінет"
  const redirectToPersonalOffice = () => {
    navigate('sign-in');
  }
  
  return (
    <>
      <div className="w-552">
        <h2 className="font-sans text-h2 text-text-color mb-50">
          Вітаємо, User
        </h2>
        <p className="font-sans text-p mb-30">
          Забудьте про довгі черги та незручні дзвінки.
        </p>
      </div>
      <div className="w-552 flex items-center justify-center gap-40 mb-264">
        <ButtonTFMain onClick={redirectToPersonalOffice} label={"Особистий кабінет"} />
      </div>
      <div className="w-552 flex items-center flex-start gap-20">
        <InfoIcon />
        <p className="font-sans text-p"> Інформація для рестораторів</p>
      </div>
    </>
  );
}

export default SharedBlockRegisteredUser;