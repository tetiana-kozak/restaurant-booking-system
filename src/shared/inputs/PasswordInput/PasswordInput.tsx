import {
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { useField } from 'formik'
import { useState } from 'react'

type Props = {
  label: string
  id: string
  name: string
  placeholder: string
}

const PasswordInput = ({ label, id, ...props }: Props) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleShowPassword = () => setShowPassword((show) => !show)

  const [field, meta] = useField(props)

  return (
    <FormControl
      variant="standard"
      margin="normal"
      fullWidth
      className="relative"
    >
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input
        id={id}
        {...field}
        {...props}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleShowPassword}
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </InputAdornment>
        }
      />
      {meta.touched && meta.error ? (
        <FormHelperText className="error">{meta.error}</FormHelperText>
      ) : null}
    </FormControl>
  )
}
export default PasswordInput
