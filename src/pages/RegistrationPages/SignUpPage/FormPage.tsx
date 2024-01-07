import { Link } from 'react-router-dom'
import { Form, Formik } from 'formik'
import TextInput from 'shared/inputs/TextInputs/TextInput'
import PasswordInput from 'shared/inputs/PasswordInput/PasswordInput'
import ButtonTFMain from 'shared/buttons/ButtonTFMain/ButtonTFMain'
import VisitorPageTitle from 'shared/typography/VisitorPageTitle'
import ButtonTFDisabled from 'shared/buttons/ButtonTFDisabled/ButtonTFDisabled'
import { signUp } from '../registrationUtils'
import { signUpSchema } from '../registrationSchemas'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type Props = {
  setIsUserRegistered: (isUserRegistered: boolean) => void
}
const FormPage = ({ setIsUserRegistered }: Props) => {
  const showToastMessage = (message: string) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    })
  }

  return (
    <Formik
      initialValues={{
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirmedPassword: '',
      }}
      validationSchema={signUpSchema}
      onSubmit={(values, actions) => {
        signUp(values, setIsUserRegistered, showToastMessage)
      }}
    >
      {(formik) => {
        const isSubmitButtonDisabled = !formik.isValid || !formik.dirty

        return (
          <Form>
            <div className="max-w-568 m-auto py-36 px-16 md:px-0  flex flex-col gap-40">
              <VisitorPageTitle>Реєстрація ресторатора</VisitorPageTitle>

              <div className="inputs-standard flex flex-col gap-50">
                <div className="flex flex-col gap-20">
                  <p className=" text-normal md:text-p">Введіть Ваші дані</p>
                  <TextInput
                    name={'first_name'}
                    id={'first_name-input'}
                    label={"Ім'я *"}
                    placeholder={"Введіть ваше ім'я"}
                  />

                  <TextInput
                    name={'last_name'}
                    id={'last_name-input'}
                    label={'Прізвище *'}
                    placeholder={'Введіть ваше прізвище'}
                  />

                  <TextInput
                    name={'email'}
                    id={'email-input'}
                    label={'Email *'}
                    placeholder={'example@gmail.com'}
                  />
                </div>

                <div className="flex flex-col gap-20">
                  <p className=" text-normal md:text-p">Створіть пароль</p>

                  <PasswordInput
                    name={'password'}
                    id={'password-input'}
                    label={'Пароль *'}
                    placeholder={'***************'}
                  />

                  <PasswordInput
                    name={'confirmedPassword'}
                    id={'confirmed-password-input'}
                    label={'Підтвердіть пароль *'}
                    placeholder={'***************'}
                  />
                </div>
              </div>

              <div className=" flex flex-col items-center">
                {isSubmitButtonDisabled ? (
                  <ButtonTFDisabled label="Підтвердити" />
                ) : (
                  <ButtonTFMain label="Підтвердити" />
                )}
              </div>

              <p className="text-center ">
                Уже маєте акаунт?
                <span className=" text-button-primary hover:text-hover-btn-primary">
                  <Link to={'/sign-in'}> Увійти</Link>
                </span>
              </p>
            </div>
            <ToastContainer />
          </Form>
        )
      }}
    </Formik>
  )
}
export default FormPage
