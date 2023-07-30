import { Routes, Route } from 'react-router-dom'
import InnerContent from './components/InnerContent/InnerContent'
import UserReservePage from 'pages/UserReservePage/UserReservePage'

type Props = {}

const MainRoutes = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<InnerContent />}>
        <Route index element={<UserReservePage />} />
      </Route>
    </Routes>
  )
}
export default MainRoutes
