import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { initialTableReducerType } from 'types/TablesEntity'
import { tablesArray } from 'utils/staticData'

const initialState: initialTableReducerType = {
  tablesArray: tablesArray,
  selectedTableId: null,
}

export const tablesSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {
    updateSelectedTableId: (state, action) => {
      state.selectedTableId = action.payload
    },
    bookedTable: (state, action) => {
      console.log('action', action)
    },
  },
})

export const { bookedTable, updateSelectedTableId } = tablesSlice.actions

export default tablesSlice.reducer
