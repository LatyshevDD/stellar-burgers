import { configureStore } from '@reduxjs/toolkit'
import ingrediencesDataSlice from './ingrediencesDataSlice'
import burgerDataSlice from './burgerDataSlice'
import modalDataSlice from './modalDataSlice'
import orderDataSlice from './orderDataSlice'
import userDataSlice from './userDataSlice'



export const store = configureStore({
  reducer: {
    ingrediencesData: ingrediencesDataSlice,
    burgerData: burgerDataSlice,
    modalData: modalDataSlice,
    orderData: orderDataSlice,
    userData: userDataSlice
  },
})