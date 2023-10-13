import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getOrderWithRefreshRequest } from '../utils/api'
import { getIngrediencesId } from '../utils/utils'

const initialState = {
  name: "",
  order: {
    number: null
  },
  success: false,
  status: "",
  spinnerActive: false
}

export const getOrderData = createAsyncThunk(
  'getOrderData',
  async (ingrediences) => {
    const ingrediencesId = getIngrediencesId(ingrediences)
    const orderData = await getOrderWithRefreshRequest(ingrediencesId)
    return orderData
  }
)

export const orderDataSlice = createSlice({
  name: 'orderData',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getOrderData.pending, (state) => {
        return {
          ...state,
          spinnerActive: true
        }
      })
      .addCase(getOrderData.fulfilled, (state, action) => {
        return {
          name: action.payload.name,
          order: {
            number: action.payload.order.number
          },
          success: action.payload.success,
          status: 'fulfilled',
          spinnerActive: false
        }
      })
      .addCase(getOrderData.rejected, (state) => {
        return {
          name: "",
          order: {
            number: null
          },
          success: false,
          status: 'reject',
          spinnerActive: false
        }
      })
  }
})


export default orderDataSlice.reducer