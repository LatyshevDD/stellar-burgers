import React from "react"
import styles from './ingredient.module.css'
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { useDispatch } from "react-redux"
import { openIngredientModal } from "../../services/modalDataSlice"
import { useDrag } from "react-dnd"
import PropTypes from 'prop-types'
import { ingredientPropType } from "../../utils/prop-types"

export default function Ingredient({ingredientData}) {

  const dispatch = useDispatch()

  const [, drag] = useDrag(() => ({
    type: 'ingredient',
    item: ingredientData,
  }))

  return (
    <li className={styles.ingredient} ref={drag}>
      <button 
        className={styles.button} 
        onClick={() => {
          dispatch(openIngredientModal(ingredientData))
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

Ingredient.propTypes = {
  ingredientData: ingredientPropType
} 