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

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>  
    </>    
  )
);