import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const initialState = {
  bun: [],
  ingredients: []
}

export const burgerDataSlice = createSlice({
  name: 'burgerData',
  initialState,
  reducers: {
    addBurgerIngredient: {
      reducer: (state, action) => {
        return {
          ...state,
          ingredients: [
            ...state.ingredients,
            action.payload
          ]
        }
      },
      prepare: (item) => {
        const key = nanoid()
        return {
          payload: {
            ...item,
            key: key
          }
        }
      }
    }, 
    addBun: {
      reducer: (state, action) => {
        if (!state.bun.length > 0) {
          return {
            ...state, 
            bun: [
              action.payload
            ]
          }
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
              bun: [
                action.payload
              ]
            };
          }  
        }
      },
      prepare: (item) => {
        const key = nanoid()
        return {
          payload: {
            ...item,
            key: key
          }
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