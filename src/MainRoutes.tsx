import { Routes, Route } from 'react-router-dom'
import InnerContent from './routes/InnerContent/InnerContent'
import SignInPage from 'pages/SignInPage/SignInPage'
import SignUpPage from 'pages/SignUpPage/SignUpPage'
import ProtectedRoute from './routes/CustomRoutes/ProtectedRoute'
import AdminPanel from './pages/AdminPanelPage/AdminPanelGrid/AdminPanelGrid'
import RestaurantEditorPage from 'pages/RestaurantEditorPage/RestaurantEditorPage'
import RestaurantBookingPage from 'pages/RestaurantBookingPage/RestaurantBookingPage'
import RestaurantCalendarPage from 'pages/RestaurantCalendarPage/RestaurantCalendarPage'
import AdminPanelPage from 'pages/AdminPanelPage/AdminPanelPage'
import PersonalCabinetPage from 'pages/PersonalCabinetPage/PersonalCabinet'


type Props = {}

const MainRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<InnerContent />}>
        <Route index element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-in" element={<SignInPage />} />

        <Route
          path="admin-panel"
          element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminPanelPage/>} />
          <Route path="restaurant-editor" element={<RestaurantEditorPage />} />
          <Route
            path="restaurant-booking"
            element={<RestaurantBookingPage />}
          />
          <Route
            path="restaurant-calendar"
            element={<RestaurantCalendarPage />}
          />
           <Route
            path="personal-cabinet"
            element={<PersonalCabinetPage />}
          />
          
        </Route>
      </Route>
    </Routes>
  )
}
export default MainRoutes
