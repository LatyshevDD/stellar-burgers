import React from "react"
import { ReactDOM, useEffect } from "react"
import styles from "./orders.module.css"
import { useLocation } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../services/hooks"
import Order from "../../../components/Order/order"

export default function Orders() {

  const { orders } = useAppSelector(state => state.profileOrdersData)
  const dispatch = useAppDispatch()
  const location = useLocation().pathname

  useEffect(
    () => { 
      let token = localStorage.getItem('accessToken')
      dispatch({
        type: 'PROFILE_ORDERS_WS_CONNECTION_START', 
        payload: `wss://norma.nomoreparties.space/orders?token=${token != null ? token.split('Bearer ')[1] : ''}`})
    },
    []
  )
  
  return (
    <>
      { 
        location === '/profile/orders' 
        && 
        <ul className={`${styles.orders} custom-scroll`}>
        {
          orders.length > 0
          &&
          orders.map(order => <Order key={order._id} order={order}/>)
        }
        </ul>
      }
      <Outlet/>
    </>  
  )
}