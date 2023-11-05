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

export type WebSocketOrderType = {
  _id: string,
  ingredients: string[],
  status: string,
  name: string,
  createdAt: string,
  updatedAt: string,
  number: number
}

export type WebSocketDataType = {
  success: boolean,
  orders: WebSocketOrderType[],
  total: number | null,
  totalToday: number | null,
  socketConnectionStatus: string | null
}

export type SetWebSocketPayloadType = {
  success: boolean,
  orders: WebSocketOrderType[],
  total: number,
  totalToday: number,
}

export type IngrediencesDataType = {
  ingrediences: IngredientType[] | [], 
  hasError: boolean, 
  errorMessage: string
}

export type IngrediencesSetErrorPayload = {
  hasError: boolean, 
  errorMessage: string
}

export type UserType = {
    login?: string,
    email: string,
    name: string
}

export type UserDataType = {
    user: UserType | null,
    isAuthChecked: boolean,
    isError: boolean,
    spinnerActive: boolean
}

export type LoginRequestData = {
  email: string,
  password: string
}

// Api

export type RefreshTokenRequestType = {
  success: boolean,
  accessToken: string,
  refreshToken:string
}

export type GetIngredienceRequestType = {
  success: boolean,
  data: IngredientType[]
}

export type RequestWithUserType = {
    success: boolean,
    user: UserType,
    accessToken: string,
    refreshToken: string
}

export type RefreshUserInfoRequestType = {
  success: boolean,
  message: string
}

export type GetUserRequestType = {
  success: true,
  user: UserType
}
  