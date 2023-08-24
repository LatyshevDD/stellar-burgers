import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ingredinces: [], 
  hasError: false, 
  errorMessage: ''
}

export const ingrediencesDataSlice = createSlice({
  name: 'ingrediencesData',
  initialState,
  reducers: {
    setIngrediences: (state, action) => {
      return {
        ...state,
        ingredinces: action.payload
      }
    },
    setError: (state, action) => {
      return {
        ...state,
        hasError: action.payload.hasError, 
        errorMessage: action.payload.errorMessage     
      }
    },
  },
})

export const { setIngrediences, setError } = ingrediencesDataSlice.actions

export default ingrediencesDataSlice.reducer