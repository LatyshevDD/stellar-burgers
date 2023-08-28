import React, {useRef} from "react"
import styles from './burger_ingredient.module.css'
import { useDispatch } from "react-redux"
import { useDrag, useDrop } from "react-dnd"
import PropTypes from 'prop-types'
import { ingredientPropType } from "../../utils/prop-types"
import { deleteIngredient, sortIngredients } from "../../services/burgerDataSlice"
import { DragIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components"
import { useSelector } from "react-redux"

export default function BurgerIngredient({ingredientData}) {

  const ref = useRef(null)
  const ingrediences = useSelector(state => state.burgerData.ingredients)
  const dispatch = useDispatch()
  const dropIndex = ingrediences.findIndex(item => item.key === ingredientData.key)
  
  const [, drag] = useDrag(() => ({
    type: 'burgerIngredient',
    item: ingredientData,
  }))

  const [, drop] = useDrop(() => ({
    accept: 'burgerIngredient',
    drop: (item) => {
      const dragIndex = ingrediences.findIndex(ingredient => ingredient.key === item.key)
      dispatch(sortIngredients({dragIndex: dragIndex, dropIndex:dropIndex}))
    }
  }))
  drag(drop(ref))
  return (
    <li className={`${styles.ingredient} mr-2`} ref={ref}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredientData.name}
        price={ingredientData.price}
        thumbnail={ingredientData.image}
        handleClose={() => {
          dispatch(deleteIngredient(ingredientData))
        }}
      />
    </li>
  )
}

BurgerIngredient.propTypes = {
  ingredientData: ingredientPropType
} 