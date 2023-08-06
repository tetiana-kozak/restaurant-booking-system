import { configureStore } from '@reduxjs/toolkit'
import tablesReducer from 'components/Tables/tablesReducer'

export const store = configureStore({
  reducer: {
    fetchedTables: tablesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
