import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  initialStateRestaurantsListType,
  restaurantType,
} from 'types/restaurantsEntity'

import { configureAxios } from 'utils/axios/configureAxios'

const initialState: initialStateRestaurantsListType = {
  userRestaurantsList: [],
}

export const getUserRestaurantsList = createAsyncThunk<restaurantType[]>(
  'getUserRestaurantsList',
  async () => {
    try {
      const response = await configureAxios.get('/restaurants')
      const restaurants: restaurantType[] = response.data.restaurants
      return restaurants
    } catch (error) {
      console.log('error', error)
      throw error
    }
  }
)

export const userRestaurantsListSlice = createSlice({
  name: 'restaurantsList',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUserRestaurantsList.fulfilled, (state, action) => {
      state.userRestaurantsList = action.payload
    })
  },
})

export default userRestaurantsListSlice.reducer
