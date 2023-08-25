import React, { useContext, useMemo } from "react"
import styles from './burger_constructor.module.css'
import { DragIcon, ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import { OrderDispatchContext } from '../../services/constructorContext'
import { getOrderDetails } from "../../utils/api"
import { getIngrediencesId } from "../../utils/utils"
import { useSelector, useDispatch } from "react-redux"
import { deleteIngredient } from "../../services/burgerDataSlice"
import { openOrderModal } from "../../services/modalDataSlice"

export default function BurgerConstructor() {

  const burgerData = useSelector((state) => state.burgerData)
  const dispatch = useDispatch()

  const orderDataDispatch = useContext(OrderDispatchContext)

  const ingredients = React.useMemo(() => burgerData.ingredients, [burgerData])
  const bun = React.useMemo(() => burgerData.bun, [burgerData])

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

  const handleGetOrder = () => {
    const ingrediencesId = getIngrediencesId([bun,...ingredients]);
    if (ingrediencesId.length > 0) {
      getOrderDetails(ingrediencesId)
        .then(res => {
          orderDataDispatch({
          type: 'addOrder',
          payload: res
          })
        })
        .then(res => {
          dispatch(openOrderModal())
        })
        .catch((err) => {
          console.log(err);
        })  
    }
  } 
  
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
                isLocked
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
                  dispatch(deleteIngredient(item))
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