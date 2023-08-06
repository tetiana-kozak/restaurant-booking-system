export type TableType = {
  id: number
  positionX: string
  positionY: string
  isBooked: boolean
  maxPeople: number
}

export type selectedTableIdType = null | number

export type initialTableReducerType = {
  tablesArray: TableType[]
  selectedTableId: selectedTableIdType
}
