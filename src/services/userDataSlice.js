import {createSlice} from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { loginRequest, logoutRequest, getUserWithRefreshRequest } from "../utils/api"


const initialState = {
    user: null,
    isAuthChecked: false,
}

export const getUser = () => {
  return (dispatch) => {
      return getUserWithRefreshRequest().then((res) => {
          dispatch(setUser(res.user));
      });
  };
};

export const login = createAsyncThunk(
  "user/login",
  async (data) => {
      const res = await loginRequest(data);
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
      return res.user;
  }
)

export const checkUserAuth = () => {
  return (dispatch) => {
      if (localStorage.getItem("accessToken")) {
          dispatch(getUser())
              .catch(() => {
                  localStorage.removeItem("accessToken");
                  localStorage.removeItem("refreshToken");
                  dispatch(setUser(null));
              })
              .finally(() => dispatch(setAuthChecked(true)));
      } else {
          dispatch(setAuthChecked(true));
      }
  };
}


export const logout = createAsyncThunk(
  "user/logout",
  async () => {
      await logoutRequest();
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
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
        user: action.payload
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
        .addCase(logout.fulfilled, (state) => {
          return {
            ...state,
            isAuthChecked: false,
            user: null
          }
        })
  }
})

export const { setAuthChecked, setUser } = userDataSlice.actions

export default userDataSlice.reducer
