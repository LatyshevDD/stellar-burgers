import React from "react";
import styles from './burger_constructor.module.css';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { ingredientPropType } from '../../utils/prop-types';

export default function BurgerConstructor({data}) {

  const ingredients = data.filter(item => item.type == "sauce" || item.type == "main");
  const bun = data.filter(item => item.type == "bun");
  
  return (
    <section className={styles.section}>
      <ul className={`${styles.ingredients} mt-25 custom-scroll`}>
      {
        bun.length != 0 && (
          <li className={`${styles.ingredient} ml-8 mr-2`} key={bun[0]._id}>
            <ConstructorElement
              type="top"
              text={bun[0].name}
              price={bun[0].price}
              thumbnail={bun[0].image}
              isLocked='true'
            />
          </li>
        )
      }  
      {
        ingredients.map(item => (
          <li className={`${styles.ingredient} mr-2`} key={item._id}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={item.name}
              price={item.price}
              thumbnail={item.image}
            />
          </li>
        ))
      }
      {
        bun.length != 0 && (
          <li className={`${styles.ingredient} ml-8 mr-8`} key={bun[1]._id}>
            <ConstructorElement
              type="bottom"
              text={bun[1].name}
              price={bun[1].price}
              thumbnail={bun[1].image}
              isLocked='true'
            />
          </li>
        )
      }  
      </ul>
      <div className={`${styles.order} mt-10`}>
        <div className={styles.price}>
          <p className="text text_type_digits-default">
            {
              ingredients.reduce((sum, item) => {return sum + item.price}, 0)
              +
              bun.reduce((sum, item) => {return sum + item.price}, 0)
            }
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  data: ingredientPropType
}; 