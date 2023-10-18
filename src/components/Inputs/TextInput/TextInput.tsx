import { FormControl, FormHelperText, TextField } from '@mui/material'
import { useField } from 'formik'
import './TextInput.scss'

type Props = {
  label: string
  id: string
  name: string
  placeholder: string
}

const TextInput = ({ ...props }: Props) => {
  const [field, meta] = useField(props)
  return (
    <FormControl variant="standard" margin="normal" fullWidth>
      <TextField
        {...field}
        {...props}
        variant="standard"
        // defaultValue="Default Value"
      />
      {meta.touched && meta.error ? (
        <FormHelperText className="error">{meta.error}</FormHelperText>
      ) : null}
    </FormControl>
  )
}
export default TextInput
