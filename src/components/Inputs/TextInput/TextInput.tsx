import { FormControl, FormHelperText, TextField } from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
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
    <FormControl variant="standard" margin="normal" fullWidth className="input">
      <TextField
        {...field}
        {...props}
        variant="standard"
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          endAdornment: (
            <HighlightOffIcon
              fontSize={'medium'}
              className="input-clear-icon"
            />
          ),
        }}
      />

      {meta.touched && meta.error ? (
        <FormHelperText className="error">{meta.error}</FormHelperText>
      ) : null}
    </FormControl>
  )
}
export default TextInput
