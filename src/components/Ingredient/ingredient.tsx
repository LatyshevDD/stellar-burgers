import styles from './ingredient.module.css'
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components"
import { useAppDispatch, useAppSelector } from "../../services/hooks"
import { useDrag } from "react-dnd"
import { getCountOfIngredient } from "../../utils/utils"
import { NavLink, useLocation } from "react-router-dom"
import { IngredientProps } from "../../types/types"

export default function Ingredient({ingredientData}: IngredientProps) {

  const dispatch = useAppDispatch()
  const location = useLocation()

  const burgerData = useAppSelector(state => state.burgerData)
  
  let ingredientCount: number

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