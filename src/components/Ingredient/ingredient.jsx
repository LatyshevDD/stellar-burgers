import React, {useMemo} from "react"
import styles from './ingredient.module.css'
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components"
import { useDispatch, useSelector } from "react-redux"
import { useDrag } from "react-dnd"
import PropTypes from 'prop-types'
import { ingredientPropType } from "../../utils/prop-types"
import { getCountOfIngredient } from "../../utils/utils"
import { NavLink, useLocation } from "react-router-dom"

export default function Ingredient({ingredientData}) {

  const dispatch = useDispatch()
  const location = useLocation()

  const burgerData = useSelector(state => state.burgerData)
  
  let ingredientCount

  if (ingredientData.type === 'bun') {
    ingredientCount = getCountOfIngredient(ingredientData, burgerData.bun)
  } else {
    ingredientCount = getCountOfIngredient(ingredientData, burgerData.ingredients)
  }

  const [, drag] = useDrag(() => ({
    type: 'ingredient',
    item: ingredientData,
  }))
  
  return (
    <li className={styles.ingredient} ref={drag}>
      <NavLink 
        className={styles.link}
        to={`/ingredients/${ingredientData._id}`}
        state={{ background: location }} 
      >
        <img className="ml-4 mr-4" src={ingredientData.image} alt={ingredientData.name} />
        <div className={`${styles.price} mt-1 mb-1}`}>
          <p className="text text_type_digits-default">{ingredientData.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-default">
          {ingredientData.name}
        </p>
      </NavLink>
      {
        ingredientCount > 0 
        &&
        <Counter count={ingredientCount} size="default" extraClass={styles.counter} />
      }
    </li>
  )
}

Ingredient.propTypes = {
  ingredientData: ingredientPropType
} 