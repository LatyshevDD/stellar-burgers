import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../AppHeader/app_header";
import BurgerIngredients from '../BurgerIngredients/burger_ingredients';

function App() {
  return (
    <>
      <AppHeader/>
      <main className={styles.main}>
        <BurgerIngredients data={data}/>
        <div style={{backgroundColor: 'green', width: '600px', height: '912px'}}></div>  
      </main>
    </>
  );
}

export default App;
