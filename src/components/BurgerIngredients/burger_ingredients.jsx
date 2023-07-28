import React from "react";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger_ingredients.module.css';
import PropTypes from 'prop-types';
import { ingredientPropType } from '../../utils/prop-types';

export default function BurgerIngredients({data}) {
  const [current, setCurrent] = React.useState('one');

  return(
    <section className={styles.section}>
      <p className="text text_type_main-large mt-10 mb-5">
        Соберите бургер
      </p>
      <nav className={styles.nav}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </nav>
      <div className={`${styles.constructor} mt-10 custom-scroll`}>
        <p className="text text_type_main-medium mb-6">
          Булки
        </p>
        <ul className={`${styles.ingredients} ml-4`}>
          {data.map(item => {
              if (item.type === 'bun') {
                return (
                  <li className={styles.ingredient} key={item._id}>
                    <button className={styles.button}>
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
              } else {
                return;
              }
            })
          }
        </ul>
        <p className="text text_type_main-medium mt-10 mb-6">
          Соусы
        </p>
        <ul className={`${styles.ingredients} ml-4`}>
          {data.map(item => {
                if (item.type === 'sauce') {
                  return (
                    <li className={styles.ingredient} key={item._id}>
                      <button className={styles.button}>
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
                } else {
                  return;
                }
              })
            } 
        </ul>
        <p className="text text_type_main-medium mt-10 mb-6">
          Начинки
        </p>
        <ul className={`${styles.ingredients} ml-4`}>
          {data.map(item => {
                if (item.type === 'main') {
                  return (
                    <li className={styles.ingredient} key={item._id}>
                      <button className={styles.button}>
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
                } else {
                  return;
                }
              })
            } 
        </ul>
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: ingredientPropType
}; 