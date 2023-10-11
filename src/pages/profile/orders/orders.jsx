import React from "react"
import { ReactDOM, useEffect } from "react"
import styles from "./orders.module.css"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components"
import { useLocation } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Order from "../../../components/Order/order"

export default function Orders() {

  const { orders } = useSelector(state => state.profileOrdersData)
  const dispatch = useDispatch()
  const location = useLocation().pathname

  useEffect(
    () => { 
      dispatch({
        type: 'PROFILE_ORDERS_WS_CONNECTION_START', 
        payload: `wss://norma.nomoreparties.space/orders?token=${localStorage.getItem('accessToken').split('Bearer ')[1]}`})
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