import { Routes, Route } from 'react-router-dom'
import InnerContent from './components/InnerContent/InnerContent'

type Props = {}

const MainRoutes = (props: Props) => {
  const firstElement = <div>Hello</div>
  return (
    <Routes>
      <Route path="/" element={<InnerContent />}>
        <Route index element={firstElement} />
      </Route>
    </Routes>
  )
}
export default MainRoutes
