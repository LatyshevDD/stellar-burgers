import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import styles from "./app.module.css"
import AppHeader from "../AppHeader/app_header"
import BurgerIngredients from '../BurgerIngredients/burger_ingredients'
import BurgerConstructor from '../BurgerConstructor/burger_constructor'
import Modal from "../Modal/modal"
import OrderDetails from "../OrderDetails/order_details"
import IngredientDetails from "../IngredientDetails/ingredient_details"
import { getIngredience } from '../../utils/api'
import { ConstructorProvider } from '../../services/constructorContext'
import { useSelector, useDispatch } from 'react-redux'
import { setIngrediences, setError } from "../../services/ingrediencesDataSlice"


function App() {
  
  const ingrediencesData = useSelector((state) => state.ingrediencesData)
  const dispatch = useDispatch()

  const [data, setData] = useState({ingredinces: [], hasError: false, errorMessage: ''})
  const [modalActive, setModalActive] = useState({active: false, type: '', ingredient: ''})

  function handleOpenModal(modalType, ingredient = {}) {
    switch(modalType) {
      case 'order':
        setModalActive({
          ...modalActive,
          active: true,
          type: 'order'
        })
        break
      case 'ingredient':
        setModalActive({
          ...modalActive,
          active: true,
          type: 'ingredient',
          ingredient: ingredient
        })
        break
    }
  }

  function handleCloseModal() {
    setModalActive({
      ...modalActive,
      active: false
    });
  }

  useEffect(() => {
    getIngredience()
      .then(res => dispatch(setIngrediences([...res.data])))
      .catch(e => dispatch(setError({hasError: true, errorMessage: e})))
  }, [])


  return (
    <ConstructorProvider>
      <AppHeader/>
      <main className={styles.main}>
        {
          !ingrediencesData.hasError && (
              <>
                <BurgerIngredients onOpenModal={handleOpenModal}/>
                <BurgerConstructor onOpenModal={handleOpenModal}/>
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
          modalActive.active && (
          <Modal onCloseModal={handleCloseModal}>
            {
              modalActive.type === 'order' &&
              <OrderDetails/>
            }
            {
              modalActive.type === 'ingredient' &&
              <IngredientDetails ingredient={modalActive.ingredient}/>
            }          
          </Modal>
          )
        }
      </div>
    </ConstructorProvider>
  );
}

export default App
