import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./app.module.css";
import AppHeader from "../AppHeader/app_header";
import BurgerIngredients from '../BurgerIngredients/burger_ingredients';
import BurgerConstructor from '../BurgerConstructor/burger_constructor';
import { getIngredience } from '../../utils/api';

function App() {

  const [ingredinces, setIngredience] = useState([]);

  useEffect(() => {
    getIngredience()
      .then(res => setIngredience([...res.data]))
  }, [])

  return (
    <>
      <AppHeader/>
      <main className={styles.main}>
        <BurgerIngredients data={ingredinces}/>
        <BurgerConstructor data={ingredinces}/> 
      </main>
    </>
  );
}

export default App;
