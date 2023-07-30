import { tablesArray } from 'utils/staticData'
import './Tables.scss'

type Props = {}

const TablesContainer = (props: Props) => {
  return (
    <div className="tables-container">
      {tablesArray.map((table) => (
        <div
          className="table"
          key={table.id}
          id={table.id.toString()}
          style={{ left: table.positionX, top: table.positionY }}
        >
          <span className="table-id">{table.id}</span>
        </div>
      ))}
    </div>
  )
}
export default TablesContainer
