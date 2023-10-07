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
  const [{isDragging}, drag, preview] = useDrag(() => ({
    type: 'burgerIngredient',
    item: ingredientData,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  const [, drop] = useDrop(() => ({
    accept: 'burgerIngredient',
    hover: (item) => {
      const dragIndex = ingrediences.findIndex(ingredient => ingredient.key === item.key)
      dispatch(sortIngredients({dragIndex: dragIndex, dropIndex:dropIndex}))
    },
    drop: (item) => {
      const dragIndex = ingrediences.findIndex(ingredient => ingredient.key === item.key)
      dispatch(sortIngredients({dragIndex: dragIndex, dropIndex:dropIndex}))
    }
  }), [ingrediences])

  const opacity = isDragging ? 0 : 1
  
  return (
    <div ref={preview}>
      <li className={`${styles.ingredient} mr-2`} style={{opacity}} ref={drop}>
        <div ref={drag}>
          <DragIcon type="primary"/>
        </div>
        <ConstructorElement
          text={ingredientData.name}
          price={ingredientData.price}
          thumbnail={ingredientData.image}
          handleClose={() => {
            dispatch(deleteIngredient(ingredientData))
          }}
        />
      </li>
    </div>
    
  )
}

BurgerIngredient.propTypes = {
  ingredientData: ingredientPropType
} 