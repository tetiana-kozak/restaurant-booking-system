import { Container, Grid } from '@mui/material'
import BookingForm from 'components/BookingForm/BookingForm'
import TablesContainer from 'components/Tables/TablesContainer'

type Props = {}
const UserReservePage = (props: Props) => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TablesContainer />
        </Grid>
        <Grid item xs={6}>
          <BookingForm />
        </Grid>
      </Grid>
    </Container>
  )
}
export default UserReservePage
