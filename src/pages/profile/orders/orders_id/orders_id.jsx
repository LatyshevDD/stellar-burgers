import React from "react"
import { ReactDOM } from "react"
import styles from "./orders_id.module.css"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components"


export default function OrdersId() {

  const date = () => {
    const dateFromServer = '2023-09-08T17:33:32.877Z'
    return <FormattedDate date={new Date(dateFromServer)} className='text text_type_main-default text_color_inactive'/>
  }

  return (
    <section className={styles.section}>
      <p className={`${styles.order_number} text text_type_digits-default`}>
        #034533
      </p>
      <p className={`${styles.order_title} text text_type_main-medium`}>
        Black Hole Singularity острый бургер
      </p>
      <p className={`${styles.order_status} text text_type_main-default text_color_inactive`}>
        Выполнен
      </p>
      <p className={`${styles.order_structure} text text_type_main-medium`}>
        Состав:
      </p>
      <ul className={`${styles.ingrediences} custom-scroll`}>
        <li className={styles.ingredient}>
          <div className={styles.ingredient_image} style={{backgroundImage: "url(https://code.s3.yandex.net/react/code/bun-02-mobile.png)"}}>
          </div>
          <p className={`${styles.ingredient_title} text text_type_main-default`}>
            Флюоресцентная булка R2-D3
          </p>
          <div className={styles.ingredient_price}>
            <p className="text text_type_digits-default">
              2 x 20
            </p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styles.ingredient}>
          <div className={styles.ingredient_image} style={{backgroundImage: "url(https://code.s3.yandex.net/react/code/meat-03-mobile.png)"}}>
          </div>
          <p className={`${styles.ingredient_title} text text_type_main-default`}>
            Филе Люминесцентного тетраодонтимформа
          </p>
          <div className={styles.ingredient_price}>
            <p className="text text_type_digits-default">
              1 x 300
            </p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styles.ingredient}>
          <div className={styles.ingredient_image} style={{backgroundImage: "url(https://code.s3.yandex.net/react/code/sauce-03-mobile.png)"}}>
          </div>
          <p className={`${styles.ingredient_title} text text_type_main-default`}>
            Соус традиционный галактический
          </p>
          <div className={styles.ingredient_price}>
            <p className="text text_type_digits-default">
              1 x 30
            </p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={styles.ingredient}>
          <div className={styles.ingredient_image} style={{backgroundImage: "url(https://code.s3.yandex.net/react/code/sp_1-mobile.png)"}}>
          </div>
          <p className={`${styles.ingredient_title} text text_type_main-default`}>
            Плоды Фалленианского дерева
          </p>
          <div className={styles.ingredient_price}>
            <p className="text text_type_digits-default">
              1 x 80
            </p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
      </ul>
      <div className={styles.summary}>
        {date()}
        <div className={styles.total_price}>
          <p className="text text_type_digits-default">
            500
          </p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  )
}