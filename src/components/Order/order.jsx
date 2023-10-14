import React from "react"
import { ReactDOM } from "react"
import styles from "./order.module.css"
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { useSelector } from "react-redux"
import { getIngredientById } from "../../utils/utils"
import { Link, useLocation } from "react-router-dom"

export default function Order({order}) {

  const location = useLocation()
  const { ingrediences } = useSelector(state => state.ingrediencesData)

  const selectedIngrediences = order.ingredients.map(item => getIngredientById(ingrediences, item))
  const orderPrice = selectedIngrediences.reduce((sum, item) => {
    return sum + item.price
  }, 0)

  const date = () => {
    const dateFromServer = order.createdAt
    return <FormattedDate date={new Date(dateFromServer)} className='text text_type_main-default text_color_inactive'/>
  }

  let url
    if(location.pathname === '/feed') {
      url = `/feed/${order.number}`
    }
    if(location.pathname === '/profile/orders') {
      url = `/profile/orders/${order.number}`
    }

  return (
    <Link to={url} state={{ background: location }}>
      <ul className={styles.feed}>
        <li className={styles.order}>
          <div className={styles.details}>
            <p className="text text_type_digits-default">
              {`#${order.number}`}
            </p>
            {
              date()
            }
          </div>
          {
            location.pathname === '/feed'
            &&
            <p className={`${styles.order_title} text text_type_main-medium`}>
              {order.name}
            </p>
          }
          {
            location.pathname === '/profile/orders'
            &&
            <div className={styles.status}>
              <p className={`${styles.order_title} text text_type_main-medium`}>
                {order.name}
              </p>
              <p className="text text_type_main-default">
                {order.status === 'done' ? 'Создан' : 'Готовится'}
              </p>
            </div>
          }
          <div className={styles.order_summary}>
            <ul className={styles.ingrediences}>
              {
                selectedIngrediences.map((item, index, array) => {
                  if(index <= 4) {
                    const zIndex = 6 - index
                    return <li className={styles.ingredient} key={index} style={{zIndex: zIndex, backgroundImage: `url(${item.image_mobile})`}}></li>
                  }
                  return  null
                })
              }
              {
                selectedIngrediences.length > 5
                &&
                (
                  <li className={styles.ingredient_counter} style={{zIndex: 1, backgroundImage: `url(${selectedIngrediences[5].image_mobile})`}}>
                    <p className={`${styles.ingredient_counter} text text_type_main-default`}>
                    {`+${selectedIngrediences.length - 5}`}
                    </p>
                  </li>
                )
              }
            </ul>
            <div className={styles.price}>
              <p className="text text_type_digits-default">{orderPrice}</p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </li>  
      </ul>
    </Link>
  )
}