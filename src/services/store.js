import { configureStore } from '@reduxjs/toolkit'
import ingrediencesDataSlice from './ingrediencesDataSlice'



export const store = configureStore({
  reducer: {
    ingrediencesData: ingrediencesDataSlice,
  },
})