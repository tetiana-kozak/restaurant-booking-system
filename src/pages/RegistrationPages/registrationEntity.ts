export type UserSignInType = {
  email: string
  password: string
}

export type RegistrationErrorType = {
  statusCode: number
  message: string
}

export type initialStateSignInType = {
  signInErrorData: RegistrationErrorType
}

export type UserSignUpType = {
  first_name: string
  last_name: string
  email: string
  password: string
  confirmedPassword: string
}
