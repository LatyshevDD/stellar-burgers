import React, { useRef, useContext } from "react"
import { useMemo } from "react"
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger_ingredients.module.css'
import { BUN, MAIN, SAUCE } from "../../utils/constants"
import { useSelector, useDispatch } from "react-redux"
import Ingredient from "../Ingredient/ingredient"


export default function BurgerIngredients() {

  const ingrediences = useSelector((state) => state.ingrediencesData.ingrediences)
  const dispatch = useDispatch();

  const [current, setCurrent] = React.useState(BUN)

  const bunRef = useRef()
  const sauceRef = useRef()
  const mainRef = useRef()

  const buns = React.useMemo(() => ingrediences.filter((item) => item.type === BUN), [ingrediences])
  const mains = React.useMemo(() => ingrediences.filter((item) => item.type === MAIN), [ingrediences])
  const sauces = React.useMemo(() => ingrediences.filter((item) => item.type === SAUCE), [ingrediences])

  return(
    <section className={styles.section}>
      <p className="text text_type_main-large mt-10 mb-5">
        Соберите бургер
      </p>
      <nav className={styles.nav}>
        <Tab 
          value={BUN} 
          active={current === BUN} 
          onClick={
            () => {
              setCurrent(BUN);
              bunRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }
        >
          Булки
        </Tab>
        <Tab 
          value="sauce" 
          active={current === SAUCE} 
          onClick={
            () => {
              setCurrent(SAUCE);
              sauceRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }
        >
          Соусы
        </Tab>
        <Tab 
          value="main" 
          active={current === MAIN} 
          onClick={
            () => {
              setCurrent(MAIN);
              mainRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }
        >
          Начинки
        </Tab>
      </nav>
      <div className={`${styles.constructor} mt-10 custom-scroll`}>
        <p className="text text_type_main-medium mb-6" ref={bunRef}>
          Булки
        </p>
        <ul className={`${styles.ingredients} ml-4`}>
          {
            buns.map(item => (<Ingredient ingredientData={item} key={item._id}/>))
          }
        </ul>
        <p className="text text_type_main-medium mt-10 mb-6" ref={sauceRef}>
          Соусы
        </p>
        <ul className={`${styles.ingredients} ml-4`}>
          {
            sauces.map(item => (<Ingredient ingredientData={item} key={item._id}/>))
          } 
        </ul>
        <p className="text text_type_main-medium mt-10 mb-6" ref={mainRef}>
          Начинки
        </p>
        <ul className={`${styles.ingredients} ml-4`}>
          {
            mains.map(item => (<Ingredient ingredientData={item} key={item._id}/>))
          } 
        </ul>
      </div>
    </section>
  );
}