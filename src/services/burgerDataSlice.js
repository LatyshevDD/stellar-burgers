import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bun: null,
  ingredients: []
}

export const burgerDataSlice = createSlice({
  name: 'burgerData',
  initialState,
  reducers: {
    addBurgerIngredient: (state, action) => {
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          action.payload
        ]
      }
    },
    addBun: (state, action) => {
      if (!state.bun) {
        return {
          ...state, 
          bun: action.payload
        };
      }
      else {
        if (state.bun._id === action.payload._id) {
          return {
            ...state
          };
        }
        else {
          return {
            ...state, 
            bun: action.payload
          };
        }  
      }
    },
    deleteIngredient: (state, action) => {
      return {
        ...state,
        ingredients: state.ingredients.filter(item => item._id !== action.payload._id),
      }
    },
  },
})

export const { addBurgerIngredient, addBun, deleteIngredient } = burgerDataSlice.actions

export default burgerDataSlice.reducer