import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  success: false,
  orders: [],
  total: null,
  totalToday: null,
  socketConnectionStatus: null
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
    setFeedSocketConnectionStatus: (state, action) => {
      return {
        ...state,
        socketConnectionStatus: action.payload
      }
    },
  },
})

export const { setFeed, setFeedSocketConnectionStatus } = feedDataSlice.actions

export default feedDataSlice.reducer