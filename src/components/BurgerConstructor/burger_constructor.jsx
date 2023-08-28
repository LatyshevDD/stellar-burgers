import React, { useContext, useMemo } from "react"
import styles from './burger_constructor.module.css'
import { DragIcon, ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector, useDispatch } from "react-redux"
import { deleteIngredient, addBun, addBurgerIngredient } from "../../services/burgerDataSlice"
import { openOrderModal } from "../../services/modalDataSlice"
import { getOrderData } from "../../services/orderDataSlice"
import { useDrop } from "react-dnd"
import BurgerIngredient from "../BurgerIngredient/burger_ingredient"

export default function BurgerConstructor() {

  const [, drop] = useDrop(() => ({
    accept: 'ingredient',
    drop: (item) => {
      if (item.type === 'bun') {
        dispatch(addBun(item))
      } else {
        dispatch(addBurgerIngredient(item))
      }
    }
  }))

  const burgerData = useSelector((state) => state.burgerData)
  const dispatch = useDispatch()

  const ingredients = React.useMemo(() => burgerData.ingredients, [burgerData])
  const bun = React.useMemo(() => burgerData.bun, [burgerData])

  const totalPrice = React.useMemo(() => {
    let ingrediencePrice = 0;
    let bunPrice = 0;
    if (ingredients.length > 0) {
      ingrediencePrice = ingredients.reduce((sum, item) => {return sum + item.price}, 0)
    }
    if (bun.length > 0) {
      bunPrice = bun[0].price * 2;
    }
    return ingrediencePrice + bunPrice;
  },
    [ingredients, bun]
  );

  const handleGetOrder = () => {
    const totalIngrediences = [...bun,...ingredients]

    if (totalIngrediences.length >= 1) {
      dispatch(getOrderData(totalIngrediences))
      dispatch(openOrderModal())
    }
  } 
  
  return (
    <section className={`${styles.section} mt-25`} ref={drop}>
      <div className={styles.constructor}>
        {
          bun.length > 0 && (
              <ConstructorElement
                type="top"
                text={bun[0].name + ' ' + '(верх)'}
                price={bun[0].price}
                thumbnail={bun[0].image}
                isLocked
                extraClass='ml-8 mr-2'
              />
          )
        }
        <ul className={`${styles.ingredients} custom-scroll`}> 
        {
          ingredients.map((item) => (<BurgerIngredient ingredientData={item} key={item.key}/>))
        }
        </ul> 
        {
          bun.length > 0 && (
              <ConstructorElement
                type="bottom"
                text={bun[0].name + ' ' + '(низ)'}
                price={bun[0].price}
                thumbnail={bun[0].image}
                isLocked
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
          onClick={handleGetOrder}
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}