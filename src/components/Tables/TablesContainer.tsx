import './Tables.scss'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { updateSelectedTableId } from './tablesReducer'

type Props = {}

const TablesContainer = (props: Props) => {
  const tablesArray = useAppSelector((state) => state.fetchedTables.tablesArray)
  const selectedTableId = useAppSelector(
    (state) => state.fetchedTables.selectedTableId
  )

  const dispatch = useAppDispatch()

  return (
    <div className="tables-container">
      {tablesArray.map((table) => (
        <div
          className={
            'table' +
            (table.isBooked ? ' booked' : ' free') +
            (table.id === selectedTableId ? ' selected' : '')
          }
          key={table.id}
          id={table.id.toString()}
          style={{ left: table.positionX, top: table.positionY }}
          onClick={() => {
            if (!table.isBooked) {
              dispatch(updateSelectedTableId(table.id))
            }
          }}
        >
          <span className="table-id ">{table.id}</span>
        </div>
      ))}
    </div>
  )
}
export default TablesContainer
