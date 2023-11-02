import { RootState, AppDispatch } from "../services/store"

export type IngredientType = {
  _id: string,
  name: string,
  type: string,
  proteins: number,
  fat: number,
  carbohydrates: number,
  calories: number,
  price: number,
  image: string,
  image_mobile: string,
  image_large: string,
  _v: number,
  key?: string,
}

export type BurgerIngredientProps = {
  ingredientData: {
    _id: string,
    name: string,
    type: string,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile: string,
    image_large: string,
    _v: number,
    key?: string,
  }
}

export type OrderType = {
  name: string,
  success: boolean,
  order: {
    ingredients: IngredientType[],
    _id: string,
    owner: {
          name: string,
          email: string,
          createdAt: string,
          updatedAt: string
      },
      status: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      number: number,
      price: number
  }
}

export type OrderDataType = {
  name: string,
  order: {
    number: number | null
  },
  success: boolean,
  status: string,
  spinnerActive: boolean
}

export type ThunkApiConfig = {
  state?: RootState,
  dispatch?: AppDispatch,
  rejectValue?: Error
}

export type BurgerDataType = {
  bun: IngredientType[],
  ingredients: IngredientType[]
}

export type sortIngredientsPayloadType = {
  dragIndex: number,
  dropIndex: number
}

  