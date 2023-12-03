import { FormControl, FormHelperText, TextField } from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { useField } from 'formik'
import '../InputsStandardStyles.scss'

type Props = {
  label: string
  id: string
  name: string
  placeholder: string
}

const TextInput = ({ ...props }: Props) => {
  const [field, meta, helpers] = useField(props)
  const isError = meta.touched && meta.error

  return (
    <FormControl variant="standard" margin="normal" fullWidth>
      <TextField
        {...field}
        {...props}
        variant="standard"
        error={isError ? true : false}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          endAdornment: (
            <div onClick={() => helpers.setValue('')}>
              <HighlightOffIcon
                fontSize="medium"
                className={`input-clear-icon ${isError ? 'icon-error' : ''}`}
              />
            </div>
          ),
        }}
      />

      {isError ? <FormHelperText>{meta.error}</FormHelperText> : null}
    </FormControl>
  )
}
export default TextInput
