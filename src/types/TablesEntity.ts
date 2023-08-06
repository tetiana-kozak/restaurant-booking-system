export type TableType = {
  id: number
  positionX: string
  positionY: string
  isBooked: boolean
  maxPeople: number
}

export type bookingDataType = {
  name: string
  phoneNumber: string
  selectedTableId: number
}

export type selectedTableIdType = null | number

export type initialTableReducerType = {
  tablesArray: TableType[]
  selectedTableId: selectedTableIdType
  bookingData: bookingDataType | {}
}
