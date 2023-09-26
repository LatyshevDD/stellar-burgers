import React from "react"
import { ReactDOM } from "react"
import styles from "./ingredients_id.module.css"
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components"
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"

export default function IngredientsId() {

  const date = () => {
    const dateFromServer = '2023-09-08T17:33:32.877Z'
    return <FormattedDate date={new Date(dateFromServer)} className='text text_type_main-default text_color_inactive'/>
  }
  
  return (
    <section className={styles.section}>
      <p className="text text_type_main-large mb-4">
        Детали ингредиента
      </p>
      <img className="mb-4" src="https://code.s3.yandex.net/react/code/sp_1-large.png" alt="Изображение ингредиента"/>
      <p className="text text_type_main-medium">
        Биокотлета из марсианской Магнолии
      </p>
      <ul className={`${styles.details} mt-8`}>
        <li className={styles.detail}>
          <p className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            244,4
          </p>
        </li>
        <li className={styles.detail}>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            12,2
          </p>
        </li>
        <li className={styles.detail}>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            17,2
          </p>
        </li>
        <li className={styles.detail}>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            10,2
          </p>
        </li>
      </ul>
    </section>
  )
}