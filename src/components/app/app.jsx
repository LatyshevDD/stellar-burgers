import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../AppHeader/app_header";
import BurgerIngredients from '../BurgerIngredients/burger_ingredients';
import BurgerConstructor from '../BurgerConstructor/burger_constructor';

function App() {
  return (
    <>
      <AppHeader/>
      <main className={styles.main}>
        <BurgerIngredients data={data}/>
        <BurgerConstructor data={data}/> 
      </main>
    </>
  );
}

export default App;
