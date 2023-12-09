import { Routes, Route } from 'react-router-dom'
import SignInPage from 'pages/SignInPage/SignInPage'
import SignUpPage from 'pages/SignUpPage/SignUpPage'
import ProtectedRoute from 'routes/CustomRoutes/ProtectedRoute'
import AdminPanelGrid from 'pages/AdminPanelPage/AdminPanelGrid/AdminPanelGrid'
import RestaurantEditorPage from 'pages/RestaurantEditorPage/RestaurantEditorPage'
import RestaurantBookingPage from 'pages/RestaurantBookingPage/RestaurantBookingPage'
import RestaurantCalendarPage from 'pages/RestaurantCalendarPage/RestaurantCalendarPage'
import AdminPanelPage from 'pages/AdminPanelPage/AdminPanelPage'
import UserReservationTablePage from 'pages/UserReservationTablePage/UserReservationTablePage'
import RedirectRoot from 'routes/CustomRoutes/RedirectRoot'
import ResetPasswordPage from 'pages/ResetPasswordPage/ResetPasswordPage'

type Props = {}

const MainRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<RedirectRoot />} />
      <Route path="sign-up" element={<SignUpPage />} />
      <Route path="sign-in" element={<SignInPage />} />
      <Route path="reset-password" element={<ResetPasswordPage />} />

      <Route
        path="admin-panel"
        element={
          <ProtectedRoute>
            <AdminPanelGrid />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminPanelPage />} />
        <Route path="restaurant-editor" element={<RestaurantEditorPage />} />
        <Route path="restaurant-booking" element={<RestaurantBookingPage />} />
        <Route
          path="restaurant-calendar"
          element={<RestaurantCalendarPage />}
        />
      </Route>
      <Route path="user-reservation" element={<UserReservationTablePage />} />
    </Routes>
  )
}
export default MainRoutes
