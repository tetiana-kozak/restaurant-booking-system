import { Formik, Form, Field } from 'formik'
import './BookingForm.scss'

type Props = {}
const BookingForm = (props: Props) => {
  return (
    <>
      <div className="title">BookingForm</div>
      <Formik
        initialValues={{ name: '', phoneNumber: '' }}
        onSubmit={(values, actions) => {
          console.log({ values, actions })
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
