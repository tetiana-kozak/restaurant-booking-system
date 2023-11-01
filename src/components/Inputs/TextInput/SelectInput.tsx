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
]

const SelectInput = ({ ...props }: Props) => {
  const [field, meta] = useField(props)
  return (
    <FormControl variant="standard" margin="normal" fullWidth>
      <TextField
        {...props}
        {...field}
        select
        variant="standard"
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

      {meta.touched && meta.error ? (
        <FormHelperText className="error">{meta.error}</FormHelperText>
      ) : null}
    </FormControl>
  )
}
export default SelectInput
