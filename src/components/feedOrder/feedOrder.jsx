import React from "react"
import { ReactDOM } from "react"
import styles from "./feedOrder.module.css"
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { useSelector } from "react-redux"
import { getIngredientById } from "../../utils/utils"
import { Link } from "react-router-dom"

export default function FeedOrder({order}) {

  const { ingrediences } = useSelector(state => state.ingrediencesData)
  const selectedIngrediences = order.ingredients.map(item => getIngredientById(ingrediences, item))
  const orderPrice = selectedIngrediences.reduce((sum, item) => {return sum + item.price}, 0)
  
  const date = () => {
    const dateFromServer = order.createdAt
    return <FormattedDate date={new Date(dateFromServer)} className='text text_type_main-default text_color_inactive'/>
  }

  return (
    <Link to={`/feed/${order._id}`} state={{order: order, selectedIngrediences: selectedIngrediences, orderPrice: orderPrice}}>
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
          <p className={`${styles.order_title} text text_type_main-medium`}>
            {order.name}
          </p>
          <div className={styles.order_summary}>
            <ul className={styles.ingrediences}>

              {
                selectedIngrediences.map((item, index, array) => {
                  if(index <= 4) {
                    const zIndex = 6 - index
                    return <li className={styles.ingredient} key={index} style={{zIndex: zIndex, backgroundImage: `url(${item.image_mobile})`}}></li>
                  }
                  return 
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