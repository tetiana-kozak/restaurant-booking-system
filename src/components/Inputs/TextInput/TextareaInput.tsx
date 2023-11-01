import { FormControl, FormHelperText, TextField } from '@mui/material'
import { useField } from 'formik'

type Props = {
  label: string
  id: string
  name: string
  placeholder: string
}

const TextareaInput = ({ ...props }: Props) => {
  const [field, meta] = useField(props)
  return (
    <FormControl variant="standard" margin="normal" fullWidth>
      <TextField
        {...props}
        multiline
        variant="standard"
        rows={3}
        {...field}
        InputLabelProps={{
          shrink: true,
        }}
      />

      {meta.touched && meta.error ? (
        <FormHelperText className="error">{meta.error}</FormHelperText>
      ) : null}
    </FormControl>
  )
}
export default TextareaInput
