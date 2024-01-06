import { Link, useNavigate } from 'react-router-dom'
import { Form, Formik } from 'formik'
import TextInput from 'shared/inputs/TextInputs/TextInput'
import PasswordInput from 'shared/inputs/PasswordInput/PasswordInput'
import VisitorBackgroundContainer from 'shared/containers/VisitorBackgroundContainer/VisitorBackgroundContainer'
import ButtonTFMain from 'shared/buttons/ButtonTFMain/ButtonTFMain'
import VisitorPageTitle from 'shared/typography/VisitorPageTitle'
import ButtonTFDisabled from 'shared/buttons/ButtonTFDisabled/ButtonTFDisabled'
import { useState } from 'react'
import { signUp } from '../registrationUtils'
import { checkRegistrationError } from '../checkRegistrationError'
import { RegistrationErrorType } from '../registrationEntity'
import { signUpSchema } from '../registrationSchemas'

type Props = {}

const SignUpPage = (props: Props) => {
  let navigate = useNavigate()
  const [registrationErrorData, setRegistrationErrorData] =
    useState<RegistrationErrorType>()

  return (
    <div className="mx-0 my-0 h-full  md:mx-24 md:my-40">
      <VisitorBackgroundContainer>
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
            signUp(values, setRegistrationErrorData, navigate)
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
                      <p className=" text-normal md:text-p">
                        Введіть Ваші дані
                      </p>
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

                    {registrationErrorData
                      ? checkRegistrationError(registrationErrorData)
                      : null}
                  </div>

                  <p className="text-center ">
                    Уже маєте акаунт?
                    <span className=" text-button-primary hover:text-hover-btn-primary">
                      <Link to={'/sign-in'}> Увійти</Link>
                    </span>
                  </p>
                </div>
              </Form>
            )
          }}
        </Formik>
      </VisitorBackgroundContainer>
    </div>
  )
}
export default SignUpPage
