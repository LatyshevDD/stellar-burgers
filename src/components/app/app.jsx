import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./app.module.css";
import AppHeader from "../AppHeader/app_header";
import BurgerIngredients from '../BurgerIngredients/burger_ingredients';
import BurgerConstructor from '../BurgerConstructor/burger_constructor';
import Modal from "../Modal/modal";
import { getIngredience } from '../../utils/api';

function App() {

  const [ingredinces, setIngredience] = useState([]);

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
        <BurgerConstructor data={ingredinces}/> 
      </main>
      <div style={{overflow: 'hidden'}}>
        <Modal>
          
        </Modal>
      </div>
    </>
  );
}

export default App;
