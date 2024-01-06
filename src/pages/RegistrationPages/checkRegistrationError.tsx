import { RegistrationErrorType } from './registrationEntity'

export const checkRegistrationError = (errorStatus: RegistrationErrorType) => {
  if (errorStatus.statusCode === 422) {
    return (
      <div className="text-error text-small pt-8 text-center">
        <p>{errorStatus.message}.</p>
        <p>Будь ласка, перевірте введені дані та спробуйте ще раз!</p>
      </div>
    )
  } else {
    return (
      <div className="text-error text-small pt-8 text-center">
        <p>Здається щось пішло не так.</p>
        <p> Спробуйте ще раз пізніше.</p>
      </div>
    )
  }
}
