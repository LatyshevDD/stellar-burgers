import AppHeader from "../AppHeader/app_header"
import { Routes, Route } from "react-router-dom"
import Home from "../../pages/Home/home"
import Login from "../../pages/login/login"
import Register from "../../pages/register/register"
import ForgotPassword from "../../pages/forgot-password/forgot_password"
import ResetPassword from "../../pages/reset-password/reset_password"
import Profile from "../../pages/profile/profile"
import ProfileForm from "../../pages/profile_form/profile_form"
import Feed from "../../pages/feed/feed"
import FeedId from "../../pages/feed/feed_id/feed_id"
import Orders from "../../pages/profile/orders/orders"
import OrdersId from "../../pages/profile/orders/orders_id/orders_id"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { checkUserAuth } from "../../services/userDataSlice"
import { OnlyAuth } from "../ProtectedRouteElement/ProtectedRouteElement"
import { OnlyUnAuth } from "../ProtectedRouteElement/ProtectedRouteElement"



export default function App() {

  const dispatch = useDispatch()

  useEffect(() => dispatch(checkUserAuth()), [])

  return (
    <>
      <AppHeader/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<OnlyUnAuth component = {<Login />} />}/>
        <Route path="/register" element={<OnlyUnAuth component = {<Register />} />}/>
        <Route path="/forgot-password" element={<OnlyUnAuth component = {<ForgotPassword />} />}/>
        <Route path="/reset-password" element={<OnlyUnAuth component = {<ResetPassword />} />}/>
        <Route path="/profile" element={<OnlyAuth component={<Profile />} />}>
          <Route index element={<ProfileForm/>}/>
          <Route path="orders" element={<Orders />}>
            <Route path=":id" element={<OrdersId/>}/>
          </Route>
        </Route>
        <Route path="/feed" element={<Feed />}>
          <Route path=":id" element={<FeedId />}/>
        </Route>  
      </Routes>
    </>
  )
}