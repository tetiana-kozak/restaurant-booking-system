import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

type Props = {}

export const RedirectRoot = (props: Props) => {
  const navigate = useNavigate()
  const isTokenExist = localStorage.getItem('token')

  useEffect(() => {
    if (isTokenExist) {
      navigate('/admin-panel')
    } else {
      navigate('/sign-in')
    }
  }, [isTokenExist, navigate])

  return <div>Redirecting...</div>
}
export default RedirectRoot
