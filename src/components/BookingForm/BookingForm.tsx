import { Formik, Form, Field } from 'formik'
import './BookingForm.scss'
import { useAppDispatch } from 'redux/hooks'
import { bookedTable } from 'components/Tables/tablesReducer'

type Props = {}
const BookingForm = (props: Props) => {
  const dispatch = useAppDispatch()

  return (
    <>
      <div className="title">BookingForm</div>
      <Formik
        initialValues={{ name: '', phoneNumber: '' }}
        onSubmit={(values, actions) => {
          dispatch(bookedTable(values))
        }}
      >
        <Form className="form-container">
          <Field id="name" name="name" placeholder="Your Name" />
          <Field
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Your Phone Number"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  )
}
export default BookingForm
