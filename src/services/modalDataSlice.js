import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  active: false, 
  type: '', 
  ingredient: ''
}

export const modalDataSlice = createSlice({
  name: 'modalData',
  initialState,
  reducers: {
    openOrderModal: (state) => {
      return {
        ...state,
        active: true,
        type: 'order'
      }
    },
    openIngredientModal: (state, action) => {
      return {
        ...state,
        active: true,
        type: 'ingredient',
        ingredient: action.payload
      }
    },
    closeModal: (state) => {
      return {
        ...state,
        active: false
      }
    },
  },
})

export const { openOrderModal, openIngredientModal, closeModal } = modalDataSlice.actions

export default modalDataSlice.reducer