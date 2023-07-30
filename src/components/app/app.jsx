import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./app.module.css";
import AppHeader from "../AppHeader/app_header";
import BurgerIngredients from '../BurgerIngredients/burger_ingredients';
import BurgerConstructor from '../BurgerConstructor/burger_constructor';
import Modal from "../Modal/modal";
import OrderDetails from "../OrderDetails/order_details";
import { getIngredience } from '../../utils/api';

function App() {

  const [ingredinces, setIngredience] = useState([]);
  const [modalActive, setModalActive] = useState(false);

  function handleOpenModal() {
    setModalActive(true);
  }

  function handleCloseModal() {
    setModalActive(false);
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
        <BurgerIngredients data={ingredinces}/>
        <BurgerConstructor data={ingredinces} onOpenModal={handleOpenModal}/> 
      </main>
      <div style={{overflow: 'hidden'}}>
        {
          modalActive &&
          <Modal onCloseModal={handleCloseModal}>
            <OrderDetails/>
          </Modal>
        }
      </div>
    </>
  );
}

export default App;
