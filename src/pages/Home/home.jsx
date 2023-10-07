import React from "react"
import styles from "./home.module.css"
import BurgerIngredients from '../../components/BurgerIngredients/burger_ingredients'
import BurgerConstructor from '../../components/BurgerConstructor/burger_constructor'
import { useSelector, useDispatch } from 'react-redux'
import { HTML5Backend } from "react-dnd-html5-backend"
import { DndProvider } from "react-dnd"


function Home() {
  
  const ingrediencesData = useSelector((state) => state.ingrediencesData)
  
  return (
    <DndProvider backend={HTML5Backend}>
      <main className={styles.main}>
        {
          !ingrediencesData.hasError && (
              <>
                <BurgerIngredients/>
                <BurgerConstructor/>
              </>
          )     
        }
        {
          ingrediencesData.hasError && (
            <p className="text text_type_main-large">
              Произошла ошибка! - {ingrediencesData.errorMessage}
            </p>
          )
        }
      </main>
    </DndProvider>
  );
}

export default Home
