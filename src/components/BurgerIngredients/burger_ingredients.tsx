import React, { useRef } from "react"
import { useMemo } from "react"
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger_ingredients.module.css'
import { BUN, MAIN, SAUCE } from "../../utils/constants"
import { useAppDispatch, useAppSelector } from "../../services/hooks"
import Ingredient from "../Ingredient/ingredient"


export default function BurgerIngredients() {

  const ingrediences = useAppSelector((state) => state.ingrediencesData.ingrediences)
  const dispatch = useAppDispatch()

  const [current, setCurrent] = React.useState(BUN)

  const ingredientsContainer = useRef<HTMLDivElement>(null)
  const bunRef = useRef<HTMLParagraphElement>(null)
  const sauceRef = useRef<HTMLParagraphElement>(null)
  const mainRef = useRef<HTMLParagraphElement>(null)

  const buns = ingrediences != null &&  React.useMemo(() => ingrediences.filter((item) => item.type === BUN), [ingrediences])
  const mains = ingrediences != null &&  React.useMemo(() => ingrediences.filter((item) => item.type === MAIN), [ingrediences])
  const sauces = ingrediences != null &&  React.useMemo(() => ingrediences.filter((item) => item.type === SAUCE), [ingrediences])

  const handleScroll = () => {
    const containerScroll = ingredientsContainer.current != null ? ingredientsContainer.current.getBoundingClientRect().top : 0
    const bunScroll = bunRef.current != null ?  bunRef.current.getBoundingClientRect().top - containerScroll : 0
    const sauceScroll = sauceRef.current != null ?  sauceRef.current.getBoundingClientRect().top - containerScroll : 0
    const mainScroll = mainRef.current != null ? mainRef.current.getBoundingClientRect().top - containerScroll : 0
    const maxOffset = -30
    if (bunScroll <= 0 && bunScroll > maxOffset) {
      setCurrent(BUN)
    }
    else if (sauceScroll <= 0 && sauceScroll > maxOffset) {
      setCurrent(SAUCE)
    }
    else if (mainScroll <= 0 && mainScroll > maxOffset) {
      setCurrent(MAIN)
    }
  }

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
              bunRef.current !=null && bunRef.current.scrollIntoView({
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
              sauceRef.current != null && sauceRef.current.scrollIntoView({
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
              mainRef.current != null && mainRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }
        >
          Начинки
        </Tab>
      </nav>
      <div className={`${styles.constructor} mt-10 custom-scroll`} onScroll={handleScroll} ref={ingredientsContainer}>
        <p className="text text_type_main-medium mb-6" ref={bunRef}>
          Булки
        </p>
        <ul className={`${styles.ingredients} ml-4`}>
          {
            buns &&
            buns.map(item => (<Ingredient ingredientData={item} key={item._id}/>))
          }
        </ul>
        <p className="text text_type_main-medium mt-10 mb-6" ref={sauceRef}>
          Соусы
        </p>
        <ul className={`${styles.ingredients} ml-4`}>
          {
            sauces &&
            sauces.map(item => (<Ingredient ingredientData={item} key={item._id}/>))
          } 
        </ul>
        <p className="text text_type_main-medium mt-10 mb-6" ref={mainRef}>
          Начинки
        </p>
        <ul className={`${styles.ingredients} ml-4`}>
          { 
            mains &&
            mains.map(item => (<Ingredient ingredientData={item} key={item._id}/>))
          } 
        </ul>
      </div>
    </section>
  );
}