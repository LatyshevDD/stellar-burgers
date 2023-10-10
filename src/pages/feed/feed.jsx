import React, {useEffect} from "react"
import { ReactDOM } from "react"
import styles from "./feed.module.css"
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import FeedOrder from "../../components/feedOrder/feedOrder"

export default function Feed() {

  const { orders, total, totalToday} = useSelector(state => state.feedData)

  const dispatch = useDispatch()
  const location = useLocation()

  const date = () => {
    const dateFromServer = '2023-09-08T17:33:32.877Z'
    return <FormattedDate date={new Date(dateFromServer)} className='text text_type_main-default text_color_inactive'/>
  }

  useEffect(
    () => { 
      dispatch({type: 'WS_CONNECTION_START', payload: 'wss://norma.nomoreparties.space/orders/all'})
    },
    []
  )

  return (
    <main className={styles.main}>
    {
      location.pathname === '/feed' &&
      <section className={styles.section}>
        <p className="text text_type_main-large">
          Лента заказов
        </p>
        <div className={styles.container}>
          <div className={`${styles.feed_container} custom-scroll`}>
            {
              orders.length > 0
              &&
              orders.map(order => <FeedOrder key={order._id} order={order}/>)
            }
          </div>
          <div className={styles.orders_container}>
            <div className={styles.orders}>
              <div className={styles.orders_ready}>
                <p className={`${styles.orders_ready_title} text text_type_main-medium`}>
                  Готовы:
                </p>
                <div className={styles.orders_ready_numbers}>
                  {
                    orders.map(order => {
                      if(order.status === 'done') {
                        return <p className="text text_type_digits-default text_color_inactive" key={order._id}>{order.number}</p>
                      }
                    })
                  }
                </div>
              </div>
              <div className={styles.orders_todo}>
                <p className={`${styles.orders_todo_title} text text_type_main-medium`}>
                  В работе:
                </p>
                <div className={styles.orders_todo_numbers}>
                  {
                    orders.map(order => {
                      if(order.status !== 'done') {
                      return <p className="text text_type_digits-default" key={order._id}>{order.number}</p>
                      }
                    })  
                  }
                </div>
              </div>
            </div>
            <div className={styles.done_alltime}>
              <p className='text text_type_main-medium'>
                  Выполнено за все время:
              </p>
              <p className={`${styles.digits_shadow} text text_type_digits-large`}>{total}</p>
            </div>
            <div className={styles.done_today}>
              <p className='text text_type_main-medium'>
                  Выполнено за сегодня:
              </p>
              <p className={`${styles.digits_shadow} text text_type_digits-large`}>{totalToday}</p>
            </div>
          </div>
        </div>
      </section> 
    }  
      <Outlet/>
    </main>
  )
}