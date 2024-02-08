import { TableCell, TableRow } from '@mui/material'

type Props = {}
const TableHeadContent = (props: Props) => {
  return (
    <TableRow>
      <TableCell align="center" style={{ width: 150 }}>
        Назва закладу
      </TableCell>
      <TableCell align="center" style={{ width: 150 }}>
        Тип
      </TableCell>
      <TableCell align="center" style={{ width: 150 }}>
        Місто
      </TableCell>
      <TableCell align="center" style={{ width: 200 }}>
        Адреса
      </TableCell>
      <TableCell align="center">Опис</TableCell>
      <TableCell align="center" style={{ width: 110 }}>
        Редагувати
      </TableCell>
      <TableCell align="center" style={{ width: 110 }}>
        Видалити
      </TableCell>
    </TableRow>
  )
}
export default TableHeadContent
