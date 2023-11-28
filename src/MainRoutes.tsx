import { Routes, Route } from 'react-router-dom'
import SignInPage from 'pages/SignInPage/SignInPage'
import SignUpPage from 'pages/SignUpPage/SignUpPage'
import ProtectedRoute from 'components/CustomRoutes/ProtectedRoute'
import AdminPanelGrid from 'pages/AdminPanelPage/AdminPanelGrid/AdminPanelGrid'
import RestaurantEditorPage from 'pages/RestaurantEditorPage/RestaurantEditorPage'
import RestaurantBookingPage from 'pages/RestaurantBookingPage/RestaurantBookingPage'
import RestaurantCalendarPage from 'pages/RestaurantCalendarPage/RestaurantCalendarPage'
import AdminPanelPage from 'pages/AdminPanelPage/AdminPanelPage'
import UserReservationTable from 'pages/UserReservationTable/UserReservationTable'
import RedirectRoot from 'components/CustomRoutes/RedirectRoot'

type Props = {}

const MainRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<RedirectRoot />} />
      <Route path="sign-up" element={<SignUpPage />} />
      <Route path="sign-in" element={<SignInPage />} />

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
      <Route path="user-reservation" element={<UserReservationTable />} />
    </Routes>
  )
}
export default MainRoutes
