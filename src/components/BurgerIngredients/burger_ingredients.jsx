import React, { useRef, useContext } from "react";
import { useMemo } from "react";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger_ingredients.module.css';
import PropTypes from 'prop-types';
import { ingredientsPropType } from '../../utils/prop-types';
import { ConstructorDispatchContext } from '../../services/constructorContext';
import { BUN, MAIN, SAUCE } from "../../utils/constants";

export default function BurgerIngredients({data, onOpenModal}) {

  const burgerDataDispatch = useContext(ConstructorDispatchContext);

  const [current, setCurrent] = React.useState(BUN);

  const bunRef = useRef();
  const sauceRef = useRef();
  const mainRef = useRef();

  const buns = React.useMemo(() => data.filter((item) => item.type === BUN), [data]);
  const mains = React.useMemo(() => data.filter((item) => item.type === MAIN), [data]);
  const sauces = React.useMemo(() => data.filter((item) => item.type === SAUCE), [data]);

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
            buns.map(item => (
                <li className={styles.ingredient} key={item._id}>
                  <button 
                    className={styles.button} 
                    onClick={() => {
                      // onOpenModal('ingredient', item)
                      burgerDataDispatch({
                        type:  'addBun',
                        payload: item
                      })
                    }}
                  >
                    <img className="ml-4 mr-4" src={item.image} alt={item.name} />
                    <div className={`${styles.price} mt-1 mb-1}`}>
                      <p className="text text_type_digits-default">{item.price}</p>
                      <CurrencyIcon type="primary" />
                    </div>
                    <p className="text text_type_main-default">
                      {item.name}
                    </p>
                  </button>
                </li>
              )
            )
          }
        </ul>
        <p className="text text_type_main-medium mt-10 mb-6" ref={sauceRef}>
          Соусы
        </p>
        <ul className={`${styles.ingredients} ml-4`}>
          {
            sauces.map(item => (
                <li className={styles.ingredient} key={item._id}>
                  <button 
                    className={styles.button}
                    onClick={() => {
                      // onOpenModal('ingredient', item)
                      burgerDataDispatch({
                        type:  'addIngredient',
                        payload: item
                      })
                    }}
                  >
                    <img className="ml-4 mr-4" src={item.image} alt={item.name} />
                    <div className={`${styles.price} mt-1 mb-1}`}>
                      <p className="text text_type_digits-default">{item.price}</p>
                      <CurrencyIcon type="primary" />
                    </div>
                    <p className="text text_type_main-default">
                      {item.name}
                    </p>
                  </button>
                </li>
              )
            )
          } 
        </ul>
        <p className="text text_type_main-medium mt-10 mb-6" ref={mainRef}>
          Начинки
        </p>
        <ul className={`${styles.ingredients} ml-4`}>
          {
            mains.map(item => (
                  <li className={styles.ingredient} key={item._id}>
                    <button 
                      className={styles.button}
                      onClick={() => {
                        // onOpenModal('ingredient', item)
                        burgerDataDispatch({
                          type:  'addIngredient',
                          payload: item
                        })
                      }}
                    >
                      <img className="ml-4 mr-4" src={item.image} alt={item.name} />
                      <div className={`${styles.price} mt-1 mb-1}`}>
                        <p className="text text_type_digits-default">{item.price}</p>
                        <CurrencyIcon type="primary" />
                      </div>
                      <p className="text text_type_main-default">
                        {item.name}
                      </p>
                    </button>  
                  </li>
                )  
              )
            } 
        </ul>
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: ingredientsPropType,
  onOpenModal: PropTypes.func.isRequired
}; 