import { tablesArray } from 'utils/staticData'
import './Tables.scss'
import { useState } from 'react'

type Props = {}

type selectedTableType = {
  id?: number
}

const TablesContainer = (props: Props) => {
  const [selectedTable, setSelectedTable] = useState<selectedTableType>({})

  return (
    <div className="tables-container">
      {tablesArray.map((table) => (
        <div
          className={
            'table' +
            (table.isBooked ? ' booked' : ' free') +
            (table.id === selectedTable.id ? ' selected' : '')
          }
          key={table.id}
          id={table.id.toString()}
          style={{ left: table.positionX, top: table.positionY }}
          onClick={() => setSelectedTable({ id: table.id })}
        >
          <span className="table-id ">{table.id}</span>
        </div>
      ))}
    </div>
  )
}
export default TablesContainer
