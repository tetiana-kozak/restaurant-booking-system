import { Form, Formik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import TextInput from 'shared/inputs/TextInputs/TextInput'
import PasswordInput from 'shared/inputs/PasswordInput/PasswordInput'
import VisitorBackgroundContainer from 'shared/containers/VisitorBackgroundContainer/VisitorBackgroundContainer'
import VisitorPageTitle from 'shared/typography/VisitorPageTitle'
import ButtonTFMain from 'shared/buttons/ButtonTFMain/ButtonTFMain'
import { signIn } from '../registrationUtils'
import ButtonTFDisabled from 'shared/buttons/ButtonTFDisabled/ButtonTFDisabled'
import { signInSchema } from '../registrationSchemas'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type Props = {}

const SignInPage = (props: Props) => {
  let navigate = useNavigate()

  const showToastMessage = (message: string) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    })
  }

  return (
    <div className="mx-0 my-0 h-full md:mx-24 md:my-40">
      <VisitorBackgroundContainer>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={signInSchema}
          onSubmit={(values) => {
            signIn(values, navigate, showToastMessage)
          }}
        >
          {(formik) => {
            const isSubmitButtonDisabled = !formik.isValid || !formik.dirty
            return (
              <Form>
                <div className="max-w-568 m-auto py-36 px-16 md:px-0  flex flex-col gap-40 ">
                  <VisitorPageTitle>Вхід</VisitorPageTitle>

                  <div className="inputs-standard flex flex-col gap-20">
                    <p className=" text-normal md:text-p">Введіть Ваші дані</p>
                    <TextInput
                      name={'email'}
                      id={'email-input'}
                      label={'Email *'}
                      placeholder={'example@gmail.com'}
                    />

                    <PasswordInput
                      name={'password'}
                      id={'password-input'}
                      label={'Пароль *'}
                      placeholder={'***************'}
                    />
                  </div>

                  <div className=" flex flex-col items-center">
                    {isSubmitButtonDisabled ? (
                      <ButtonTFDisabled label="Підтвердити" />
                    ) : (
                      <ButtonTFMain label="Підтвердити" />
                    )}
                  </div>

                  <p className="text-center ">
                    Немає акаунту?
                    <span className=" text-button-primary hover:text-hover-btn-primary">
                      <Link to={'/sign-up'}> Зареєструватись</Link>
                    </span>
                  </p>
                </div>
                <ToastContainer />
              </Form>
            )
          }}
        </Formik>
      </VisitorBackgroundContainer>
    </div>
  )
}
export default SignInPage
