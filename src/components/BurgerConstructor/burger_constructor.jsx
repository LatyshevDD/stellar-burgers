import React, { useContext, useMemo } from "react";
import styles from './burger_constructor.module.css';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { ConstructorContext } from '../../services/constructorContext';
import { ConstructorDispatchContext } from '../../services/constructorContext';

export default function BurgerConstructor({onOpenModal}) {

  const burgerData = useContext(ConstructorContext);
  const burgerDataDispatch = useContext(ConstructorDispatchContext);

  const ingredients = React.useMemo(() => burgerData.ingredients, [burgerData]);

  const bun = React.useMemo(() => burgerData.bun, [burgerData]);

  const totalPrice = React.useMemo(() => {
    let ingrediencePrice = 0;
    let bunPrice = 0;
    if (ingredients) {
      ingrediencePrice = ingredients.reduce((sum, item) => {return sum + item.price}, 0)
    }
    if (bun) {
      bunPrice = bun.price * 2;
    }
    return ingrediencePrice + bunPrice;
  },
    [ingredients, bun]
  );
  
  return (
    <section className={`${styles.section} mt-25`}>
      <div className={styles.constructor}>
        {
          bun && (
              <ConstructorElement
                type="top"
                text={bun.name + ' ' + '(верх)'}
                price={bun.price}
                thumbnail={bun.image}
                isLocked='true'
                extraClass='ml-8 mr-2'
              />
          )
        }
        <ul className={`${styles.ingredients} custom-scroll`}> 
        {
          ingredients.map((item, index) => (
            <li className={`${styles.ingredient} mr-2`} key={index}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
                handleClose={() => {
                  burgerDataDispatch({
                    type: 'deleteIngredient',
                    id: item._id
                  })
                }}
              />
            </li>
          ))
        }
        </ul> 
        {
          bun && (
              <ConstructorElement
                type="bottom"
                text={bun.name + ' ' + '(низ)'}
                price={bun.price}
                thumbnail={bun.image}
                isLocked='true'
                extraClass='ml-8 mr-2'
              />
          )
        }  
      </div>  
      <div className={`${styles.order} mt-10`}>
        <div className={styles.price}>
          <p className="text text_type_digits-default">
            {totalPrice}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <Button 
          htmlType="button" 
          type="primary" 
          size="large" 
          onClick={() => {onOpenModal('order')}}
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  onOpenModal: PropTypes.func.isRequired
}; 