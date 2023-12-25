import { Form, Formik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import TextInput from 'shared/inputs/TextInputs/TextInput'
import PasswordInput from 'shared/inputs/PasswordInput/PasswordInput'
import { configureAxios } from 'shared/axios/configureAxios'
import { UserSignInType, signInErrorType } from './signInEntity'
import VisitorBackgroundContainer from 'shared/containers/VisitorBackgroundContainer/VisitorBackgroundContainer'
import VisitorPageTitle from 'shared/typography/VisitorPageTitle'
import ButtonTFMain from 'shared/buttons/ButtonTFMain/ButtonTFMain'
import { signInSchema } from './signInSchema'
import { useState } from 'react'
import { checkSignInErrorStatus } from './checkSignInError'

type Props = {}

const SignInPage = (props: Props) => {
  let navigate = useNavigate()
  const [signInErrorData, setSignInErrorData] = useState<signInErrorType>()

  const signIn = async (values: UserSignInType) => {
    const params = {
      user: {
        ...values,
      },
    }
    await configureAxios
      .post('/users/login', params)
      .then((response) => {
        if (response.data.user.token) {
          localStorage.setItem(
            'token',
            JSON.stringify(response.data.user.token)
          )
          navigate('/admin-panel')
        }
      })
      .catch((error) => {
        console.log('error signin', error)
        setSignInErrorData(error.response.data)
      })
  }

  return (
    <div className="mx-24 my-40 h-calc-container-height ">
      <VisitorBackgroundContainer>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={signInSchema}
          onSubmit={(values) => {
            signIn(values)
          }}
        >
          <Form>
            <div className="max-w-568 m-auto py-36 flex flex-col gap-40 ">
              <VisitorPageTitle>Вхід</VisitorPageTitle>

              <div className="inputs-standard flex flex-col gap-20">
                <p className=" text-p">Введіть Ваші дані</p>
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
                <ButtonTFMain label="Підтвердити" />
                {signInErrorData
                  ? checkSignInErrorStatus(signInErrorData)
                  : null}
              </div>

              <p className="text-center ">
                Немає акаунту?
                <span className=" text-button-primary hover:text-hover-btn-primary">
                  <Link to={'/sign-up'}> Зареєструватись</Link>
                </span>
              </p>
            </div>
          </Form>
        </Formik>
      </VisitorBackgroundContainer>
    </div>
  )
}
export default SignInPage
