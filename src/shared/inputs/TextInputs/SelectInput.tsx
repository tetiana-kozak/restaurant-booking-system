import { FormControl, FormHelperText, MenuItem, TextField } from '@mui/material'
import { useField } from 'formik'

type Props = {
  label: string
  id: string
  name: string
}

const cities = [
  { label: 'Київ' },
  { label: 'Львів' },
  { label: 'Одеса' },
  { label: 'Харків' },
] // треба буде замінити коли знайдемо нормальне api українських міст

const SelectInput = ({ ...props }: Props) => {
  const [field, meta] = useField(props)
  const isError = meta.touched && meta.error

  return (
    <FormControl variant="standard" margin="normal" fullWidth>
      <TextField
        {...props}
        {...field}
        select
        variant="standard"
        error={isError ? true : false}
        InputLabelProps={{
          shrink: true,
        }}
      >
        {cities.map((city) => (
          <MenuItem key={city.label} value={city.label}>
            {city.label}
          </MenuItem>
        ))}
      </TextField>

      {isError ? <FormHelperText>{meta.error}</FormHelperText> : null}
    </FormControl>
  )
}
export default SelectInput
