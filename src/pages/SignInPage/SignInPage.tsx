import { Form, Formik } from 'formik'
import './SignInPage.scss'
import { SignInSchema } from 'utils/validationSchemas/validationSchemas'
import { Link, useNavigate } from 'react-router-dom'
import TextInput from 'components/Inputs/TextInputs/TextInput'
import PasswordInput from 'components/Inputs/PasswordInput/PasswordInput'
import RegisterButton from 'components/Buttons/RegisterButton/RegisterButton'
import { configureAxios } from 'utils/axios/configureAxios'
import { UserSignInData } from 'types/usersEntity'

type Props = {}

const SignInPage = (props: Props) => {
  let navigate = useNavigate()

  const signIn = async (values: UserSignInData) => {
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
    <div className="form-container">
      <div>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={SignInSchema}
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
    </div>
  )
}
export default SignInPage
