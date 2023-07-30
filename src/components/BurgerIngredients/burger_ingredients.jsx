import React from "react";
import { useMemo } from "react";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger_ingredients.module.css';
import PropTypes from 'prop-types';
import { ingredientsPropType } from '../../utils/prop-types';

export default function BurgerIngredients({data, onOpenModal}) {
  const [current, setCurrent] = React.useState('bun');

  const buns = React.useMemo(() => data.filter((item) => item.type === 'bun'), [data]);
  const mains = React.useMemo(() => data.filter((item) => item.type === 'main'), [data]);
  const sauces = React.useMemo(() => data.filter((item) => item.type === 'sauce'), [data]);

  return(
    <section className={styles.section}>
      <p className="text text_type_main-large mt-10 mb-5">
        Соберите бургер
      </p>
      <nav className={styles.nav}>
        <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={setCurrent}>
          Начинки
        </Tab>
      </nav>
      <div className={`${styles.constructor} mt-10 custom-scroll`}>
        <p className="text text_type_main-medium mb-6">
          Булки
        </p>
        <ul className={`${styles.ingredients} ml-4`}>
          {
            buns.map(item => (
                <li className={styles.ingredient} key={item._id}>
                  <button 
                    className={styles.button} 
                    onClick={() => {
                      onOpenModal('ingredient', item)
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
        <p className="text text_type_main-medium mt-10 mb-6">
          Соусы
        </p>
        <ul className={`${styles.ingredients} ml-4`}>
          {
            sauces.map(item => (
                <li className={styles.ingredient} key={item._id}>
                  <button 
                    className={styles.button}
                    onClick={() => {
                      onOpenModal('ingredient', item)
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
        <p className="text text_type_main-medium mt-10 mb-6">
          Начинки
        </p>
        <ul className={`${styles.ingredients} ml-4`}>
          {
            mains.map(item => (
                  <li className={styles.ingredient} key={item._id}>
                    <button 
                      className={styles.button}
                      onClick={() => {
                        onOpenModal('ingredient', item)
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