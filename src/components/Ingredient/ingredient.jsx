import React from "react"
import styles from './ingredient.module.css'
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { useDispatch } from "react-redux"
import { addBurgerIngredient, addBun } from "../../services/burgerDataSlice"

export default function Ingredient({ingredientData}) {

  const dispatch = useDispatch()

  return (
    <li className={styles.ingredient}>
      <button 
        className={styles.button} 
        onClick={() => {
          const reducerAction = ingredientData.type === 'bun' ? addBun : addBurgerIngredient
          // dispatch(openIngredientModal(ingredientData))
          dispatch(reducerAction(ingredientData))
        }}
      >
        <img className="ml-4 mr-4" src={ingredientData.image} alt={ingredientData.name} />
        <div className={`${styles.price} mt-1 mb-1}`}>
          <p className="text text_type_digits-default">{ingredientData.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-default">
          {ingredientData.name}
        </p>
      </button>
  </li>
  )
}