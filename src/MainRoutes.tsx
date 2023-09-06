import { Routes, Route } from 'react-router-dom'
import InnerContent from './components/InnerContent/InnerContent'
import SignInPage from 'pages/SignInPage/SignInPage'
import SignUpPage from 'pages/SignUpPage/SignUpPage'
import ProtectedRoute from 'components/ProtectedRoute/ProtectedRoute'
import UserReservePage from 'pages/UserReservePage/UserReservePage'

type Props = {}

const MainRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<InnerContent />}>
        <Route index element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-in" element={<SignInPage />} />

        <Route
          path="main"
          element={
            <ProtectedRoute>
              <UserReservePage />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  )
}
export default MainRoutes
