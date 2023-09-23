import {createSlice} from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { loginRequest } from "../utils/api"


const initialState = {
    user: null,
    isAuthChecked: false,
}

export const login = createAsyncThunk(
  "user/login",
  async (data) => {
      const res = await loginRequest(data);
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
      return res.user;
  }
)

export const userDataSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthChecked: (state, action) => {
      return {
        ...state,
        isAuthChecked: action.payload
      }
    },
    setUser: (state, action) => {
      return {
        ...state,
        user: action.payload.user
      }
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(login.fulfilled, (state, action) => {
          return {
            ...state,
            user: action.payload,
            isAuthChecked: true
          }
        })
        // .addCase(logout.fulfilled, (state) => {
        //   state.user = null;
        // })
  }
})

export const { setAuthChecked, setUser } = userDataSlice.actions

export default userDataSlice.reducer
