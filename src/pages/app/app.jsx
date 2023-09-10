import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import styles from "./app.module.css"
import AppHeader from "../AppHeader/app_header"
import BurgerIngredients from '../../components/BurgerIngredients/burger_ingredients'
import BurgerConstructor from '../../components/BurgerConstructor/burger_constructor'
import Modal from "../../components/Modal/modal"
import OrderDetails from "../../components/OrderDetails/order_details"
import IngredientDetails from "../../components/IngredientDetails/ingredient_details"
import { getIngredience } from '../../utils/api'
import { useSelector, useDispatch } from 'react-redux'
import { setIngrediences, setError } from "../../services/ingrediencesDataSlice"
import { HTML5Backend } from "react-dnd-html5-backend"
import { DndProvider } from "react-dnd"


function App() {
  
  const ingrediencesData = useSelector((state) => state.ingrediencesData)
  const modalData = useSelector((state) => state.modalData)
  const dispatch = useDispatch()

  useEffect(() => {
    getIngredience()
      .then(res => dispatch(setIngrediences([...res.data])))
      .catch(e => dispatch(setError({hasError: true, errorMessage: e})))
  }, [])


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
      <div className={styles.modals_container}>
        {
          modalData.active && (
          <Modal>
            {
              modalData.type === 'order' &&
              <OrderDetails/>
            }
            {
              modalData.type === 'ingredient' &&
              <IngredientDetails ingredient={modalData.ingredient}/>
            }          
          </Modal>
          )
        }
      </div>
    </DndProvider>
  );
}

export default App
