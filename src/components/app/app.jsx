import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./app.module.css";
import AppHeader from "../AppHeader/app_header";
import BurgerIngredients from '../BurgerIngredients/burger_ingredients';
import BurgerConstructor from '../BurgerConstructor/burger_constructor';
import Modal from "../Modal/modal";
import OrderDetails from "../OrderDetails/order_details";
import IngredientDetails from "../IngredientDetails/ingredient_details";
import { getIngredience } from '../../utils/api';

function App() {

  const [ingredinces, setIngredience] = useState([]);
  const [modalActive, setModalActive] = useState({active: false, type: '', ingredient: ''});

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
      .then(res => setIngredience([...res.data]))
      .catch(e => console.log(e))
  }, [])

  return (
    <>
      <AppHeader/>
      <main className={styles.main}>
        <BurgerIngredients data={ingredinces} onOpenModal={handleOpenModal}/>
        <BurgerConstructor data={ingredinces} onOpenModal={handleOpenModal}/> 
      </main>
      <div style={{overflow: 'hidden'}}>
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
    </>
  );
}

export default App;
