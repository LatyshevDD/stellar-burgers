import { configureStore } from '@reduxjs/toolkit'
import ingrediencesDataSlice from './ingrediencesDataSlice'
import burgerDataSlice from './burgerDataSlice'
import orderDataSlice from './orderDataSlice'
import userDataSlice from './userDataSlice'



export const store = configureStore({
  reducer: {
    ingrediencesData: ingrediencesDataSlice,
    burgerData: burgerDataSlice,
    orderData: orderDataSlice,
    userData: userDataSlice
  },
})