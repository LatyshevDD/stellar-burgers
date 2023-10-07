import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  success: false,
  orders: [],
  total: null,
  totalToday: null
}

export const feedDataSlice = createSlice({
  name: 'feedData',
  initialState,
  reducers: {
    setFeed: (state, action) => {
      return {
        ...state,
        success: action.payload.success,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday
      }
    },
  },
})

export const { setFeed } = feedDataSlice.actions

export default feedDataSlice.reducer