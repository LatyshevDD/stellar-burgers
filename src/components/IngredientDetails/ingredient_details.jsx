import styles from './ingredient_details.module.css';
import { ingredientPropType } from '../../utils/prop-types';
import { getIngredientById } from '../../utils/utils';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


export default function IngredientDetails({fullScrin}) {
  const { ingredientId } = useParams()
  const ingrediences = useSelector(state => state.ingrediencesData.ingrediences)
  
  let ingredient
  
  if (ingrediences.length > 0) {
     ingredient = getIngredientById(ingrediences, ingredientId)
  }

  return (
    <main className={fullScrin && styles.main}>
      <div className={styles.container}>
      {
        ingredient
        &&
        <>
          <p className={`${styles.title} text text_type_main-large mt-10 ml-10`}>
            Детали ингредиента
          </p>
          <img src={ingredient.image_large} alt="Изображение ингредиента"/>
          <p className="text text_type_main-medium mt-4">
            {ingredient.name}
          </p>
          <ul className={`${styles.details} mt-8 mb-15`}>
            <li className={styles.detail}>
              <p className="text text_type_main-default text_color_inactive">
                Калории,ккал
              </p>
              <p className="text text_type_main-default text_color_inactive">
                {ingredient.calories}
              </p>
            </li>
            <li className={styles.detail}>
              <p className="text text_type_main-default text_color_inactive">
                Белки, г
              </p>
              <p className="text text_type_main-default text_color_inactive">
                {ingredient.proteins}
              </p>
            </li>
            <li className={styles.detail}>
              <p className="text text_type_main-default text_color_inactive">
                Жиры, г
              </p>
              <p className="text text_type_main-default text_color_inactive">
                {ingredient.fat}
              </p>
            </li>
            <li className={styles.detail}>
              <p className="text text_type_main-default text_color_inactive">
                Углеводы, г
              </p>
              <p className="text text_type_main-default text_color_inactive">
                {ingredient.carbohydrates}
              </p>
            </li>
            </ul>
        </> 
      }  
      </div>
    </main>    
  )
}

// IngredientDetails.propTypes = {
//   ingredient: ingredientPropType,
// }; 