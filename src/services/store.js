import { configureStore } from '@reduxjs/toolkit'
import ingrediencesDataSlice from './ingrediencesDataSlice'
import burgerDataSlice from './burgerDataSlice'
import modalDataSlice from './modalDataSlice'



export const store = configureStore({
  reducer: {
    ingrediencesData: ingrediencesDataSlice,
    burgerData: burgerDataSlice,
    modalData: modalDataSlice
  },
})