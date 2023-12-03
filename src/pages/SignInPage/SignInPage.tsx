import { Form, Formik } from 'formik'
import './SignInPage.scss'
import { Link, useNavigate } from 'react-router-dom'
import TextInput from 'shared/inputs/TextInputs/TextInput'
import PasswordInput from 'shared/inputs/PasswordInput/PasswordInput'
import RegisterButton from 'pages/SignInPage/RegisterButton/RegisterButton'
import { configureAxios } from 'shared/axios/configureAxios'
import { signInSchema } from './signInSchema'
import { UserSignInType } from './signInEntity'
import VisitorBackgroundContainer from 'shared/containers/VisitorBackgroundContainer/VisitorBackgroundContainer'

type Props = {}

const SignInPage = (props: Props) => {
  let navigate = useNavigate()

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
      .catch((error) => console.log('error', error))
  }
  return (
    <div className="mx-24 my-50 ">
      <VisitorBackgroundContainer>
        <div>
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
              <TextInput
                name={'email'}
                id={'email-input'}
                label={'Email *'}
                placeholder={'example@gmail.com'}
              />

              <PasswordInput
                name={'password'}
                id={'password-input'}
                label={'Password *'}
                placeholder={'***************'}
              />

              <RegisterButton>Sign In</RegisterButton>
            </Form>
          </Formik>
          <p className="account-message">
            Don’t have account yet?
            <span>
              <Link to={'/sign-up'}> New Account</Link>
            </span>
          </p>
        </div>
      </VisitorBackgroundContainer>
    </div>
  )
}
export default SignInPage
