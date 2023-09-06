import { Link, useNavigate } from 'react-router-dom'
import './SignUpPage.scss'
import { Form, Formik } from 'formik'
import { SignUpSchema } from 'utils/validationSchemas/validationSchemas'
import TextInput from 'components/Inputs/TextInput/TextInput'
import PasswordInput from 'components/Inputs/PasswordInput/PasswordInput'
import RegisterButton from 'components/Buttons/RegisterButton/RegisterButton'
import { configureAxios } from 'utils/axios/configureAxios'
import { UserSignUpData } from 'types2/usersEntity'

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
        console.log('response', response)
        localStorage.setItem('token', JSON.stringify(response.data.token))
        navigate('/main')
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
          validationSchema={SignUpSchema}
          onSubmit={(values, actions) => {
            console.log('values => ', values)
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
