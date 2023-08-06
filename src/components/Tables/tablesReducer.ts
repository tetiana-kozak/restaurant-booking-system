import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { initialTableReducerType } from 'types/TablesEntity'
import { tablesArray } from 'utils/staticData'

const initialState: initialTableReducerType = {
  tablesArray: tablesArray,
  selectedTableId: null,
  bookingData: {},
}

export const tablesSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {
    updateSelectedTableId: (state, action) => {
      state.selectedTableId = action.payload
    },
    bookedTable: (state, action) => {
      const preperedData = {
        ...action.payload,
        id: state.selectedTableId,
      }

      // переписати коли буде бекенд
      state.bookingData = preperedData
      let findedTable = state.tablesArray.find(
        (table, index) => table.id === preperedData.id
      )
      if (findedTable) {
        findedTable.isBooked = true
      }
      //

      state.tablesArray.map((table) =>
        table.id === preperedData.id ? findedTable : table
      )
    },
  },
})

export const { bookedTable, updateSelectedTableId } = tablesSlice.actions

export default tablesSlice.reducer
