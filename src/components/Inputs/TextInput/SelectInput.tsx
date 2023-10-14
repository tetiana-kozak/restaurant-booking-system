import { FormControl, FormHelperText, MenuItem, TextField } from '@mui/material'
import { useField } from 'formik'

type Props = {
  label: string
  id: string
  name: string
  placeholder: string
}

const cities = [
  { label: 'Kyiv' },
  { label: 'Lviv' },
  { label: 'Odessa' },
  { label: 'Kharkiv' },
]

const SelectInput = ({ ...props }: Props) => {
  const [field, meta] = useField(props)
  return (
    <FormControl variant="standard" margin="normal" fullWidth>
      <TextField {...props} {...field} select variant="standard">
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
