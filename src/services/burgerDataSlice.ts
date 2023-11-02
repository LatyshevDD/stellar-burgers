import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
import { BurgerDataType, IngredientType, sortIngredientsPayloadType } from '../types/types'

const initialState: BurgerDataType = {
  bun: [],
  ingredients: []
}

export const burgerDataSlice = createSlice({
  name: 'burgerData',
  initialState,
  reducers: {
    addBurgerIngredient: {
      reducer: (state, action: PayloadAction<IngredientType>) => {
        return {
          ...state,
          ingredients: [
            ...state.ingredients,
            action.payload
          ]
        }
      },
      prepare: (item: IngredientType) => {
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
      reducer: (state, action: PayloadAction<IngredientType>) => {
        if (!(state.bun.length > 0)) {
          return {
            ...state, 
            bun: [
              action.payload
            ]
          }
        }
        else {
          if ('_id' in state.bun && state.bun._id === action.payload._id) {
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
      prepare: (item: IngredientType) => {
        const key = nanoid()
        return {
          payload: {
            ...item,
            key: key
          }
        }
      }
    },
    deleteIngredient: (state, action: PayloadAction<IngredientType>) => {
      return {
        ...state,
        ingredients: state.ingredients.filter(item => item.key !== action.payload.key),
      }
    },
    sortIngredients: (state, action: PayloadAction<sortIngredientsPayloadType>) => {

      const ingrediences = [...state.ingredients]
      ingrediences.splice(
        action.payload.dropIndex,
        0,
        ingrediences.splice(action.payload.dragIndex, 1)[0] 
      )
      return {
        ...state,
        ingredients: ingrediences,
      }
    },
  },
})

export const { addBurgerIngredient, addBun, deleteIngredient, sortIngredients } = burgerDataSlice.actions

export default burgerDataSlice.reducer