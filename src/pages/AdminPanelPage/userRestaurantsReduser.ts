import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
  createRestaurantValuesType,
  editRestaurantValuesType,
  initialStateRestaurantsListType,
  restaurantType,

  restaurantTableType,
  tableType,
} from 'shared/types/restaurantsEntity'

import { configureAxios } from 'shared/axios/configureAxios'

const initialState: initialStateRestaurantsListType = {
  userRestaurantsList: [],
  userRestaurantsCurrent: [],
  userRestaurantsTable: {
    tables: [],
    tablesCount: 0,
  },
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
//=========================

export const getRestaurantTable = createAsyncThunk<restaurantTableType>(
  'getRestaurantTable',
  async () => {
    try {
      const response = await configureAxios.get('/tables')
      return response.data
    } catch (error) {
      console.log('error', error)
      throw error
    }
  }
)

export const createRestaurantTable = createAsyncThunk<
  tableType,
  Omit<tableType, 'id'> 
>('createRestaurantTable', async (formDataWithStaticData) => {
  const params = {
    table: formDataWithStaticData,
  }

  try {
    const response = await configureAxios.post('/tables', params)
    return response.data.table
  } catch (error) {
    console.log('error', error)
    throw error
  }
})

export const deleteRestaurantTable = createAsyncThunk<number, number>(
  'deleteRestaurantTable',
  async (id) => {
    try {
      await configureAxios.delete(`/tables/${id}`)
      return id 
    } catch (error) {
      console.log('error', error)
      throw error
    }
  }
)

export const editRestaurantTable = createAsyncThunk<
  tableType,
  tableType 
>('editRestaurantTable', async (formDataWithStaticData) => {
  const params = {
    table: formDataWithStaticData,
  }

  try {
    const response = await configureAxios.put('/tables', params)
    return response.data.table
  } catch (error) {
    console.log('error', error)
    throw error
  }
})

export const userRestaurantsListSlice = createSlice({
  name: 'restaurantsList',
  initialState,
  reducers: {
    updateUserRestaurantsCurrent(
      state,
      action: PayloadAction<restaurantType[]>
    ) {
      state.userRestaurantsCurrent = action.payload
    },
  },
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

      .addCase(createRestaurantTable.fulfilled, (state, action) => {
        state.userRestaurantsTable.tables.push(action.payload)
        // state.userRestaurantsTable.tablesCount += 1;
      })
      .addCase(getRestaurantTable.fulfilled, (state, action) => {
        state.userRestaurantsTable = action.payload
      })
      .addCase(deleteRestaurantTable.fulfilled, (state, action) => {
        state.userRestaurantsTable.tables =
          state.userRestaurantsTable.tables.filter(
            (table) => table.id !== action.payload
          )
        state.userRestaurantsTable.tablesCount-- 
      })
      .addCase(editRestaurantTable.fulfilled, (state, action) => {
        const editedTable = action.payload
        const index = state.userRestaurantsTable.tables.findIndex(
          (table) => table.id === editedTable.id
        )
        if (index !== -1) {
          state.userRestaurantsTable.tables[index] = editedTable
        }
      })
  },
})
export const { updateUserRestaurantsCurrent } = userRestaurantsListSlice.actions

export default userRestaurantsListSlice.reducer
