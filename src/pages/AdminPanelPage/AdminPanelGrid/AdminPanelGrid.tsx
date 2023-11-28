import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import Sidebar from 'container/Sections/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

type Props = {}

const AdminPanelGrid = (props: Props) => {
  return (
    <Grid container spacing={0} className="bg">
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={10}>
        <Container>
          <Outlet />
        </Container>
      </Grid>
    </Grid>
  )
}
export default AdminPanelGrid
