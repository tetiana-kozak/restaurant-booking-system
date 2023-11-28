import { Link, useNavigate } from 'react-router-dom'
import './SignUpPage.scss'
import { Form, Formik } from 'formik'
import TextInput from 'shared/inputs/TextInputs/TextInput'
import PasswordInput from 'shared/inputs/PasswordInput/PasswordInput'
import RegisterButton from 'pages/SignInPage/RegisterButton/RegisterButton'
import { configureAxios } from 'shared/axios/configureAxios'
import { UserSignUpData } from 'types/usersEntity'
import { signUpSchema } from './signUpSchema'

type Props = {}

const SignUpPage = (props: Props) => {
  let navigate = useNavigate()

  const signUp = async (values: UserSignUpData) => {
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
    <div className="form-container">
      <div>
        <Formik
          initialValues={{
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

            <PasswordInput
              name={'confirmedPassword'}
              id={'confirmed-password-input'}
              label={'Confirm Password *'}
              placeholder={'***************'}
            />

            <RegisterButton>Sign Up</RegisterButton>
          </Form>
        </Formik>
        <p className="account-message">
          I have an account.
          <span>
            <Link to={'/sign-in'}> Go to Sign in</Link>
          </span>
        </p>
      </div>
    </div>
  )
}
export default SignUpPage
