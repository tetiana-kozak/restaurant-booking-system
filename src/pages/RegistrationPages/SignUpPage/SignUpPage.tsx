import VisitorBackgroundContainer from 'shared/containers/VisitorBackgroundContainer/VisitorBackgroundContainer'
import { useState } from 'react'
import FormPage from './FormPage'
import SuccessPage from './SuccessPage'

type Props = {}

const SignUpPage = (props: Props) => {
  const [isUserRegistered, setIsUserRegistered] = useState(false)

  return (
    <div className="mx-0 my-0 h-full md:mx-24 md:my-40">
      <VisitorBackgroundContainer>
        {!isUserRegistered ? (
          <FormPage setIsUserRegistered={setIsUserRegistered} />
        ) : (
          <SuccessPage />
        )}
      </VisitorBackgroundContainer>
    </div>
  )
}
export default SignUpPage
