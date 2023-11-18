import { Navigate } from 'react-router-dom'

type Props = { children: React.ReactNode }

const ProtectedRoute = ({ children }: Props) => {
  const isTokenExist = localStorage.getItem('token')
  if (!isTokenExist) {
    return <Navigate to={'/sign-in'} />
  }
  return <>{children}</>
}
export default ProtectedRoute
