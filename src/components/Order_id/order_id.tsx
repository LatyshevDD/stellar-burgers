import React from "react"
import { ReactDOM, useEffect, useState } from "react"
import styles from "./order_id.module.css"
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { getIngredientById, getCountOfIngredientWithIndexes, isEmptyObj } from "../../utils/utils"
import { useAppSelector } from "../../services/hooks"
import { getOrder } from "../../utils/api"
import { useParams } from "react-router-dom"
import { IngredientType, WebSocketOrderType } from "../../types/types"

export default function OrderId() {

  const { number } = useParams()
  const { ingrediences } = useAppSelector(state => state.ingrediencesData)

  const [order, setOrder] = useState<{data: WebSocketOrderType | null, error: boolean}>(
    {
      data: null, 
      error: false, 
    }
  )
  
  useEffect(() => {
    if (number) {
      getOrder(number)
      .then(res => {
        setOrder({...order, data: res.orders[0]})})
    }
  }, [])

  let selectedIngrediences: IngredientType[] = [], orderPrice: number = 0
  if(order.data && ingrediences != null) {
        selectedIngrediences = order.data.ingredients.map(item => getIngredientById(ingrediences, item))
        orderPrice = selectedIngrediences.reduce((sum, item) => {
          return sum + item.price
        }, 0)
  }

  const date = () => {
    const dateFromServer = order.data != null ? order.data.createdAt : ''
    return <FormattedDate date={new Date(dateFromServer)} className='text text_type_main-default text_color_inactive'/>
  }
  
  return (
    <section className={styles.section}>
      <p className={`${styles.order_number} text text_type_digits-default`}>
        {`#${order.data != null && order.data.number}`}
      </p>
      <p className={`${styles.order_title} text text_type_main-medium`}>
        {order.data != null && order.data.name}
      </p>
      <p className={`${styles.order_status} text text_type_main-default text_color_inactive`}>
        {order.data != null && order.data.status === 'done' ? 'Выполнен' : 'Готовится'}
      </p>
      <p className={`${styles.order_structure} text text_type_main-medium`}>
        Состав:
      </p>
      <ul className={`${styles.ingrediences} custom-scroll`}>
        {
          selectedIngrediences
          &&
          selectedIngrediences.map((item, index, array) => {
            const { count, indexes } = getCountOfIngredientWithIndexes(item, array)
            if(count > 1 && index === indexes[0]) {
              return (
                <li className={styles.ingredient} key={index}>
                  <div className={styles.ingredient_image} style={{backgroundImage: `url(${item.image_mobile})`}}></div>
                  <p className={`${styles.ingredient_title} text text_type_main-default`}>
                    {item.name}
                  </p>
                  <div className={styles.ingredient_price}>
                    <p className="text text_type_digits-default">
                      {`${count}x${item.price}`}
                    </p>
                    <CurrencyIcon type="primary" />
                  </div>
                </li>
              )
            }
            if(count > 1 && index !== indexes[0]) {
              return null
            }
            return (
              <li className={styles.ingredient} key={index}>
                <div className={styles.ingredient_image} style={{backgroundImage: `url(${item.image_mobile})`}}></div>
                <p className={`${styles.ingredient_title} text text_type_main-default`}>
                {item.name}
                </p>
                <div className={styles.ingredient_price}>
                  <p className="text text_type_digits-default">
                    {`${count}x${item.price}`}
                  </p>
                  <CurrencyIcon type="primary" />
                </div>
              </li>
            )
          })
        }
      </ul>
      <div className={styles.summary}>
        {date()}
        <div className={styles.total_price}>
          <p className="text text_type_digits-default">
            {orderPrice}
          </p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  )
}