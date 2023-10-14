import { Grid } from '@mui/material'
import Sidebar from 'container/Sections/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

type Props = {}

const AdminPanel = (props: Props) => {
  return (
    <Grid container spacing={4} className="bg">
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={10}>
        <Outlet />
      </Grid>
    </Grid>
  )
}
export default AdminPanel
