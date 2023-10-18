import { configureStore } from '@reduxjs/toolkit'
import userRestaurantsReduser from 'pages/AdminPanelPage/userRestaurantsReduser'

export const store = configureStore({
  reducer: {
    userRestaurants: userRestaurantsReduser,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
