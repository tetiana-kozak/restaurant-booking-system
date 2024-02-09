import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  createRestaurantValuesType,
  editRestaurantValuesType,
  initialStateRestaurantsListType,
  restaurantType,
} from 'shared/types/restaurantsEntity'

import { configureAxios } from 'shared/axios/configureAxios'

const initialState: initialStateRestaurantsListType = {
  userRestaurantsList: [],
  // userRestaurantsCurrent: [],
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
    const response = await configureAxios.post('/restaurants', params)
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
      await configureAxios.delete('/restaurants', params)
      return value
    } catch (error) {
      console.log('error', error)
      throw error
    }
  }
)

export const editRestaurant = createAsyncThunk<
  restaurantType,
  editRestaurantValuesType
>('editRestaurant', async (values) => {
  const params = {
    restaurant: values,
  }

  try {
    const response = await configureAxios.put('/restaurants', params)
    return response.data.restaurant
  } catch (error) {
    console.log('error', error)
    throw error
  }
})

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
      .addCase(editRestaurant.fulfilled, (state, action) => {
        const index = state.userRestaurantsList.findIndex(
          (restaurant) => restaurant.id === action.payload.id
        )
        state.userRestaurantsList[index] = {
          ...state.userRestaurantsList[index],
          ...action.payload,
        }
      })
  },
})

export default userRestaurantsListSlice.reducer
