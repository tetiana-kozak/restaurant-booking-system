import { FormControl, FormHelperText, TextField } from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { useField } from 'formik'

type Props = {
  label: string
  id: string
  name: string
  placeholder: string
}

const TextareaInput = ({ ...props }: Props) => {
  const [field, meta, helpers] = useField(props)
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
        InputProps={{
          endAdornment: (
            <div onClick={() => helpers.setValue('')}>
              <HighlightOffIcon
                fontSize={'medium'}
                className="input-clear-icon"
              />
            </div>
          ),
        }}
      />

      {meta.touched && meta.error ? (
        <FormHelperText className="error">{meta.error}</FormHelperText>
      ) : null}
    </FormControl>
  )
}
export default TextareaInput
