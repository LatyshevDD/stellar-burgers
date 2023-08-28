import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getOrderDetails } from '../utils/api'
import { getIngrediencesId } from '../utils/utils'

const initialState = {
  name: "",
  order: {
    number: null
  },
  success: false,
  status: ""
}

export const getOrderData = createAsyncThunk(
  'getOrderData',
  async (ingrediences) => {
    const ingrediencesId = getIngrediencesId(ingrediences)
    const orderData = await getOrderDetails(ingrediencesId)
    return orderData
  }
)

export const orderDataSlice = createSlice({
  name: 'orderData',
  initialState,
  reducers: {
    openOrderModal: (state) => {
      return {
        ...state,
        active: true,
        type: 'order'
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getOrderData.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getOrderData.fulfilled, (state, action) => {
        return {
          name: action.payload.name,
          order: {
            number: action.payload.order.number
          },
          success: action.payload.success,
          status: 'fulfilled'
        }
      })
      .addCase(getOrderData.rejected, (state) => {
        state.status = 'loading'
      })
  }
})


export default orderDataSlice.reducer