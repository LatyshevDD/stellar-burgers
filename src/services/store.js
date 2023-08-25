import { configureStore } from '@reduxjs/toolkit'
import ingrediencesDataSlice from './ingrediencesDataSlice'
import burgerDataSlice from './burgerDataSlice'



export const store = configureStore({
  reducer: {
    ingrediencesData: ingrediencesDataSlice,
    burgerData: burgerDataSlice
  },
})