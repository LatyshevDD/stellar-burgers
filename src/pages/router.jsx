import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { 
  createRoutesFromElements,
  createBrowserRouter,
  Route } from 'react-router-dom'
import { store } from '../services/store'
import App from './app/app'
import Login from './login/login'
import Register from './register/register'
import ForgotPassword from './forgot-password/forgot_password'
import ResetPassword from './reset-password/reset_password'
import AppHeader from './AppHeader/app_header'
import Profile from './profile/profile'
import ProfileForm from './profile_form/profile_form'
import Feed from './feed/feed'
import FeedId from './feed/feed_id/feed_id'
import Orders from './profile/orders/orders'
import OrdersId from './profile/orders/orders_id/orders_id'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AppHeader />}>
        <Route index element={<App />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="/reset-password" element={<ResetPassword />}/>
        <Route path="/profile" element={<Profile />}>
          <Route index element={<ProfileForm/>}/>
          <Route path="orders" element={<Orders />}>
            <Route path=":id" element={<OrdersId/>}/>
          </Route>
        </Route>
        <Route path="/feed" element={<Feed />}>
          <Route path=":id" element={<FeedId />}/>
        </Route>
      </Route>    
    </>    
  )
);