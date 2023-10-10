import { createSlice } from '@reduxjs/toolkit'

export const profileOrdersWebSocketStart = 'PROFILE_ORDERS_WS_CONNECTION_START'

const initialState = {
  success: false,
  orders: [],
  total: null,
  totalToday: null,
  socketConnectionStatus: null
}

export const profileOrdersDataSlice = createSlice({
  name: 'profileOrdersData',
  initialState,
  reducers: {
    setProfileOrders: (state, action) => {
      return {
        ...state,
        success: action.payload.success,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday
      }
    },
    setProfileOrdersSocketConnectionStatus: (state, action) => {
      return {
        ...state,
        socketConnectionStatus: action.payload
      }
    },
  },
})

export const { setProfileOrders, setProfileOrdersSocketConnectionStatus } = profileOrdersDataSlice.actions

export default profileOrdersDataSlice.reducer