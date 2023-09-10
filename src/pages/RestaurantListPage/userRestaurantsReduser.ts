import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  createRestaurantValuesType,
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

export const createRestaurant = createAsyncThunk<
  restaurantType,
  createRestaurantValuesType
>('createRestaurant', async (values) => {
  const params = {
    restaurant: values,
  }

  try {
    const response = await configureAxios.post('/restaurant', params)
    return response.data.restaurant
  } catch (error) {
    console.log('error', error)
    throw error
  }
})

export const deleteRestaurant = createAsyncThunk<number, number>(
  'deleteRestaurant',
  async (value) => {
    const params = {
      data: {
        restaurant: {
          id: value,
        },
      },
    }

    try {
      await configureAxios.delete('/restaurant', params)
      return value
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
    builder
      .addCase(getUserRestaurantsList.fulfilled, (state, action) => {
        state.userRestaurantsList = action.payload
      })
      .addCase(createRestaurant.fulfilled, (state, action) => {
        state.userRestaurantsList.push(action.payload)
      })
      .addCase(deleteRestaurant.fulfilled, (state, action) => {
        state.userRestaurantsList = state.userRestaurantsList.filter(
          (item) => item.id !== action.payload
        )
      })
  },
})

export default userRestaurantsListSlice.reducer
