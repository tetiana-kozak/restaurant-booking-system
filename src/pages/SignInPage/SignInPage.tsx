import { Form, Formik } from 'formik'
import './SignInPage.scss'
import { SignInSchema } from 'validationSchemas/validationSchemas'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import TextInput from 'components/Inputs/TextInput/TextInput'
import PasswordInput from 'components/Inputs/PasswordInput/PasswordInput'

type Props = {}

type UserData = {
  email: string
  password: string
}

const SignInPage = (props: Props) => {
  let navigate = useNavigate()

  const signIn = async (values: UserData) => {
    await axios
      .post(
        'https://table-flow-fca566db5b85.herokuapp.com/api/v1/users/login',
        values
      )
      .then((response) => {
        console.log('response login ', response)
        if (response.data.token) {
          localStorage.setItem('token', JSON.stringify(response.data.token))
          navigate('/main')
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
            console.log(values)
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

            <button type="submit" className="button">
              Sign In
            </button>
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
