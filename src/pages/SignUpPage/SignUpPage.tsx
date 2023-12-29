import { Link, useNavigate } from 'react-router-dom'
import { Form, Formik } from 'formik'
import TextInput from 'shared/inputs/TextInputs/TextInput'
import PasswordInput from 'shared/inputs/PasswordInput/PasswordInput'
import RegisterButton from 'pages/SignInPage/RegisterButton/RegisterButton'
import { configureAxios } from 'shared/axios/configureAxios'
import { UserSignUpType } from 'pages/SignUpPage/signUpEntity'
import { signUpSchema } from './signUpSchema'
import VisitorBackgroundContainer from 'shared/containers/VisitorBackgroundContainer/VisitorBackgroundContainer'
import ButtonTFMain from 'shared/buttons/ButtonTFMain/ButtonTFMain'
import VisitorPageTitle from 'shared/typography/VisitorPageTitle'

type Props = {}

const SignUpPage = (props: Props) => {
  let navigate = useNavigate()

  const signUp = async (values: UserSignUpType) => {
    const params = {
      user: {
        ...values,
      },
    }
    await configureAxios
      .post('/users', params)
      .then((response) => {
        if (response.data.user.token) {
          localStorage.setItem(
            'token',
            JSON.stringify(response.data.user.token)
          )
          navigate('/admin-panel')
        }
      })
      .catch((error) => console.log('error', error))
  }

  return (
    <div className="mx-0 my-0 h-full  md:mx-24 md:my-40">
      <VisitorBackgroundContainer>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmedPassword: '',
          }}
          validationSchema={signUpSchema}
          onSubmit={(values, actions) => {
            signUp(values)
          }}
        >
          <Form>
            <div className="max-w-568 m-auto py-36 px-16 md:px-0  flex flex-col gap-40">
              <VisitorPageTitle>Реєстрація</VisitorPageTitle>

              <div className="inputs-standard flex flex-col gap-50">
                <div className="flex flex-col gap-20">
                  <p className=" text-normal md:text-p">Введіть Ваші дані</p>
                  <TextInput
                    name={'name'}
                    id={'name-input'}
                    label={"Ім'я *"}
                    placeholder={"Введіть ваше ім'я"}
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
                <ButtonTFMain label="Підтвердити" />
              </div>

              <p className="text-center ">
                Уже маєте акаунт?
                <span className=" text-button-primary hover:text-hover-btn-primary">
                  <Link to={'/sign-in'}> Увійти</Link>
                </span>
              </p>
            </div>
          </Form>
        </Formik>
      </VisitorBackgroundContainer>
    </div>
  )
}
export default SignUpPage
