import React from "react"
import { ReactDOM } from "react"
import styles from "./feed_id.module.css"
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"

export default function FeedId() {
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
      <ul className={styles.ingrediences}>
        <li className={styles.ingredient}>
          {/* <div className={styles.ingredient_image} style={{backgroundImage: "url(https://code.s3.yandex.net/react/code/bun-02-mobile.png)"}}>
          </div> */}

        </li>
      </ul>
    </section>
  )
}