import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  initialStateRestaurantsListType,
  restaurantType,
  restaurantsType,
} from 'types/usersEntity'
import { configureAxios } from 'utils/axios/configureAxios'

const initialState: initialStateRestaurantsListType = {
  userRestaurantsList: [],
}

export const getUserRestaurantsList = createAsyncThunk<restaurantType[]>(
  'getUserRestaurantsList',
  async () => {
    try {
      const response = await configureAxios.get('/restaurants')
      console.log('response', response.data.restaurants)
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
      console.log('action.payload', action.payload)
      state.userRestaurantsList = action.payload
      // return state
    })
  },
})

export default userRestaurantsListSlice.reducer
