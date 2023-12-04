import {
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { useField } from 'formik'
import { useState } from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

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
    // <FormControl variant="standard" margin="normal" fullWidth>
    //   {/* <InputLabel htmlFor={id}>{label}</InputLabel>
    //   <Input
    //     id={id}
    //     {...field}
    //     {...props}
    //     type={showPassword ? 'text' : 'password'}
    //     endAdornment={
    //       <InputAdornment position="end">
    //         <IconButton
    //           aria-label="toggle password visibility"
    //           onClick={handleShowPassword}
    //         >
    //           {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
    //         </IconButton>
    //       </InputAdornment>
    //     }
    //   /> */}
    //   {isError ? <FormHelperText>{meta.error}</FormHelperText> : null}
    // </FormControl>

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
            <InputAdornment position="end">
              <IconButton
                // aria-label="toggle password visibility"
                onClick={handleShowPassword}
              >
                {showPassword ? (
                  <VisibilityOffIcon
                    fontSize="medium"
                    className={`input-clear-icon ${
                      isError ? 'icon-error' : ''
                    }`}
                  />
                ) : (
                  <VisibilityIcon
                    fontSize="medium"
                    className={`input-clear-icon ${
                      isError ? 'icon-error' : ''
                    }`}
                  />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {isError ? <FormHelperText>{meta.error}</FormHelperText> : null}
    </FormControl>
  )
}
export default PasswordInput
