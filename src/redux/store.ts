import { configureStore } from '@reduxjs/toolkit'
import tablesReducer from 'components/Tables/tablesReducer'
import userRestaurantsReduser from 'pages/RestaurantListPage/userRestaurantsReduser'

export const store = configureStore({
  reducer: {
    fetchedTables: tablesReducer,
    userRestaurants: userRestaurantsReduser,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
