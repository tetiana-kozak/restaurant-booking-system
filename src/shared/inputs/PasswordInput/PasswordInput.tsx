import { FormControl, FormHelperText, TextField } from '@mui/material'
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

const PasswordInput = ({ ...props }: Props) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleShowPassword = () => setShowPassword((show) => !show)

  const [field, meta, helpers] = useField(props)
  const isError = meta.touched && meta.error

  return (
    <FormControl variant="standard" margin="normal" fullWidth>
      <TextField
        {...field}
        {...props}
        variant="standard"
        error={isError ? true : false}
        type={showPassword ? 'text' : 'password'}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          endAdornment: (
            <div onClick={handleShowPassword}>
              {showPassword ? (
                <VisibilityOffIcon
                  fontSize="medium"
                  className={`input-clear-icon ${isError ? 'icon-error' : ''}`}
                />
              ) : (
                <VisibilityIcon
                  fontSize="medium"
                  className={`input-clear-icon ${isError ? 'icon-error' : ''}`}
                />
              )}
            </div>
          ),
        }}
      />

      {isError ? <FormHelperText>{meta.error}</FormHelperText> : null}
    </FormControl>
  )
}
export default PasswordInput
