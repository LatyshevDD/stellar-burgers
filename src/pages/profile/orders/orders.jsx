import React from "react"
import { ReactDOM, useEffect } from "react"
import styles from "./orders.module.css"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components"
import { useLocation } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { useDispatch } from "react-redux"

export default function Orders() {

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

  const date = () => {
    const dateFromServer = '2023-09-08T17:33:32.877Z'
    return <FormattedDate date={new Date(dateFromServer)} className='text text_type_main-default text_color_inactive'/>
  }
  
  return (
    <>
      { 
        location === '/profile/orders' 
        && 
        <ul className={`${styles.orders} custom-scroll`}>
          <li className={styles.order}>
            <div className={styles.details}>
              <p className="text text_type_digits-default">
                #034535
              </p>
              {
                date()
              }
            </div>
            <div className={styles.status}>
              <p className={`${styles.order_title} text text_type_main-medium`}>
                Death Star Starship Main бургер
              </p>
              <p className="text text_type_main-default">
                Создан
              </p>
            </div>
            <div className={styles.order_summary}>
              <ul className={styles.ingrediences}>
                <li className={styles.ingredient} style={{zIndex:'6', backgroundImage: "url(https://code.s3.yandex.net/react/code/bun-02-mobile.png)"}}>
                </li>
                <li className={styles.ingredient} style={{ zIndex: "5", backgroundImage: "url(https://code.s3.yandex.net/react/code/meat-04-mobile.png)"}}>
                </li>
                <li className={styles.ingredient} style={{zIndex: "4", backgroundImage: "url(https://code.s3.yandex.net/react/code/meat-01.png)"}}>
                </li>
                <li className={styles.ingredient} style={{zIndex: "3", backgroundImage: "url(https://code.s3.yandex.net/react/code/sauce-02-mobile.png)"}}>
                </li>
                <li className={styles.ingredient} style={{zIndex: "2", backgroundImage: "url(https://code.s3.yandex.net/react/code/meat-02-mobile.png)"}}>
                </li>
                <li className={styles.ingredient} style={{zIndex: "1", backgroundImage: "url(https://code.s3.yandex.net/react/code/sauce-04-mobile.png)"}}>
                  <p className={`${styles.ingredient_counter} text text_type_main-default`}>
                    +3
                  </p>
                </li>
              </ul>
              <div className={styles.price}>
                <p className="text text_type_digits-default">560</p>
                <CurrencyIcon type="primary" />
              </div>
            </div>
          </li>
          <li className={styles.order}>
            <div className={styles.details}>
              <p className="text text_type_digits-default">
                #034535
              </p>
              {
                date()
              }
            </div>

            <div className={styles.status}>
              <p className={`${styles.order_title} text text_type_main-medium`}>
                Death Star Starship Main бургер
              </p>
              <p className="text text_type_main-default">
                Создан
              </p>
            </div>
            <div className={styles.order_summary}>
              <ul className={styles.ingrediences}>
                <li className={styles.ingredient} style={{zIndex:'6', backgroundImage: "url(https://code.s3.yandex.net/react/code/bun-02-mobile.png)"}}>
                </li>
                <li className={styles.ingredient} style={{ zIndex: "5", backgroundImage: "url(https://code.s3.yandex.net/react/code/meat-04-mobile.png)"}}>
                </li>
                <li className={styles.ingredient} style={{zIndex: "4", backgroundImage: "url(https://code.s3.yandex.net/react/code/meat-01.png)"}}>
                </li>
                <li className={styles.ingredient} style={{zIndex: "3", backgroundImage: "url(https://code.s3.yandex.net/react/code/sauce-02-mobile.png)"}}>
                </li>
                <li className={styles.ingredient} style={{zIndex: "2", backgroundImage: "url(https://code.s3.yandex.net/react/code/meat-02-mobile.png)"}}>
                </li>
                <li className={styles.ingredient} style={{zIndex: "1", backgroundImage: "url(https://code.s3.yandex.net/react/code/sauce-04-mobile.png)"}}>
                  <p className={`${styles.ingredient_counter} text text_type_main-default`}>
                    +3
                  </p>
                </li>
              </ul>
              <div className={styles.price}>
                <p className="text text_type_digits-default">560</p>
                <CurrencyIcon type="primary" />
              </div>
            </div>
          </li>
          <li className={styles.order}>
            <div className={styles.details}>
              <p className="text text_type_digits-default">
                #034535
              </p>
              {
                date()
              }
            </div>
            <div className={styles.status}>
              <p className={`${styles.order_title} text text_type_main-medium`}>
                Death Star Starship Main бургер
              </p>
              <p className="text text_type_main-default">
                Создан
              </p>
            </div>
            <div className={styles.order_summary}>
              <ul className={styles.ingrediences}>
                <li className={styles.ingredient} style={{zIndex:'6', backgroundImage: "url(https://code.s3.yandex.net/react/code/bun-02-mobile.png)"}}>
                </li>
                <li className={styles.ingredient} style={{ zIndex: "5", backgroundImage: "url(https://code.s3.yandex.net/react/code/meat-04-mobile.png)"}}>
                </li>
                <li className={styles.ingredient} style={{zIndex: "4", backgroundImage: "url(https://code.s3.yandex.net/react/code/meat-01.png)"}}>
                </li>
                <li className={styles.ingredient} style={{zIndex: "3", backgroundImage: "url(https://code.s3.yandex.net/react/code/sauce-02-mobile.png)"}}>
                </li>
                <li className={styles.ingredient} style={{zIndex: "2", backgroundImage: "url(https://code.s3.yandex.net/react/code/meat-02-mobile.png)"}}>
                </li>
                <li className={styles.ingredient} style={{zIndex: "1", backgroundImage: "url(https://code.s3.yandex.net/react/code/sauce-04-mobile.png)"}}>
                  <p className={`${styles.ingredient_counter} text text_type_main-default`}>
                    +3
                  </p>
                </li>
              </ul>
              <div className={styles.price}>
                <p className="text text_type_digits-default">560</p>
                <CurrencyIcon type="primary" />
              </div>
            </div>
          </li>
          <li className={styles.order}>
            <div className={styles.details}>
              <p className="text text_type_digits-default">
                #034535
              </p>
              {
                date()
              }
            </div>
            <div className={styles.status}>
              <p className={`${styles.order_title} text text_type_main-medium`}>
                Death Star Starship Main бургер
              </p>
              <p className="text text_type_main-default">
                Создан
              </p>
            </div>
            <div className={styles.order_summary}>
              <ul className={styles.ingrediences}>
                <li className={styles.ingredient} style={{zIndex:'6', backgroundImage: "url(https://code.s3.yandex.net/react/code/bun-02-mobile.png)"}}>
                </li>
                <li className={styles.ingredient} style={{ zIndex: "5", backgroundImage: "url(https://code.s3.yandex.net/react/code/meat-04-mobile.png)"}}>
                </li>
                <li className={styles.ingredient} style={{zIndex: "4", backgroundImage: "url(https://code.s3.yandex.net/react/code/meat-01.png)"}}>
                </li>
                <li className={styles.ingredient} style={{zIndex: "3", backgroundImage: "url(https://code.s3.yandex.net/react/code/sauce-02-mobile.png)"}}>
                </li>
                <li className={styles.ingredient} style={{zIndex: "2", backgroundImage: "url(https://code.s3.yandex.net/react/code/meat-02-mobile.png)"}}>
                </li>
                <li className={styles.ingredient} style={{zIndex: "1", backgroundImage: "url(https://code.s3.yandex.net/react/code/sauce-04-mobile.png)"}}>
                  <p className={`${styles.ingredient_counter} text text_type_main-default`}>
                    +3
                  </p>
                </li>
              </ul>
              <div className={styles.price}>
                <p className="text text_type_digits-default">560</p>
                <CurrencyIcon type="primary" />
              </div>
            </div>
          </li>     
        </ul>
      }
      <Outlet/>
    </>  
  )
}