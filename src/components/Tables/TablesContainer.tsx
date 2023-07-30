import './Tables.scss'

type Props = {}

const TablesContainer = (props: Props) => {
  const tablesArray = [
    { id: '1', positionX: '100px', positionY: '50px' },
    { id: '2', positionX: '200px', positionY: '50px' },
    { id: '3', positionX: '300px', positionY: '50px' },
    { id: '4', positionX: '400px', positionY: '50px' },
    { id: '5', positionX: '100px', positionY: '150px' },
    { id: '6', positionX: '200px', positionY: '150px' },
    { id: '7', positionX: '300px', positionY: '150px' },
    { id: '8', positionX: '400px', positionY: '150px' },
  ]

  return (
    <div className="tables-container">
      {tablesArray.map((table) => (
        <div
          className="table"
          key={table.id}
          id={table.id}
          style={{ left: table.positionX, top: table.positionY }}
        >
          <span className="table-id">{table.id}</span>
        </div>
      ))}
    </div>
  )
}
export default TablesContainer
