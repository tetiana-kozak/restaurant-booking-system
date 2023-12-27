export type UserSignInType = {
  email: string
  password: string
}

export type signInErrorType = {
  statusCode: number
  message: string
}

export type initialStateSignInType = {
  signInErrorData: signInErrorType
}
