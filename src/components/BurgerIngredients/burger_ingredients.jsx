import React from "react";
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import N200 from '../../images/Краторная_булка_N-200i.png';
import R2D3 from '../../images/Флюоресцентная_булка_R2-D3.png';
import SpicyX from '../../images/Соус_Spicy-X.png';
import Space_Sauce from '../../images/Соус_фирменный_Space_Sauce.png';
import Galaxy from '../../images/Соус_традиционный_галактический.png';
import Antarian from '../../images/Соус_с_шипами_Антарианского_плоскоходца.png'
import styles from './burger_ingredients.module.css';

export default function BurgerIngredients() {
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
          <li className={styles.ingredient}>
            <img className="ml-4 mr-4" src={N200} alt="Краторная_булка_N-200i" />
            <div className={`${styles.price} mt-1 mb-1}`}>
              <p className="text text_type_digits-default">20</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">
              Краторная булка N-200i
            </p>
            <Counter count={1} size="default" />
          </li>
          <li className={styles.ingredient}>
            <img className="ml-4 mr-4" src={R2D3} alt="Флюоресцентная булка R2-D3" />
            <div className={`${styles.price} mt-1 mb-1`}>
              <p className="text text_type_digits-default">20</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">
              Флюоресцентная булка R2-D3
            </p>
          </li>
        </ul>
        <p className="text text_type_main-medium mt-10 mb-6">
          Соусы
        </p>
        <ul className={`${styles.ingredients} ml-4`}>
          <li className={styles.ingredient}>
            <img className="ml-4 mr-4" src={SpicyX} alt="Соус Spicy-X" />
            <div className={`${styles.price} mt-1 mb-1`}>
              <p className="text text_type_digits-default">30</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">
              Соус Spicy-X
            </p>
          </li>
          <li className={styles.ingredient}>
            <img className="ml-4 mr-4" src={Space_Sauce} alt="Соус фирменный Space Sauce" />
            <div className={`${styles.price} mt-1 mb-1`}>
              <p className="text text_type_digits-default">30</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">
              Соус фирменный Space Sauce
            </p>
          </li>
          <li className={`${styles.ingredient} mt-8`}>
            <img className="ml-4 mr-4" src={Galaxy} alt="Соус традиционный галактический" />
            <div className={`${styles.price} mt-1 mb-1`}>
              <p className="text text_type_digits-default">30</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">
              Соус традиционный галактический
            </p>
            <Counter count={1} size="default" />
          </li>
          <li className={`${styles.ingredient} mt-8`}>
            <img className="ml-4 mr-4" src={Antarian} alt="Соус с шипами Антарианского плоскоходца" />
            <div className={`${styles.price} mt-1 mb-1`}>
              <p className="text text_type_digits-default">30</p>
              <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">
              Соус с шипами Антарианского плоскоходца
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}