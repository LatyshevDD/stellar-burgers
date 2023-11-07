import styles from './order_details.module.css'
import orderAccept from '../../images/order_accept.png'
import { useAppSelector } from '../../services/hooks'

export default function OrderDetails() {


  const orderNumber = useAppSelector((state) => state.orderData.order.number)
  
  return (
    <div className={styles.container}>
      <p className="text text_type_digits-large mt-30">
        {orderNumber}
      </p>
      <p className="text text_type_main-medium mt-8">
        идентификатор заказа
      </p>
      <img className='mt-15' src={orderAccept} alt="Подтверждение заказа"/>
      <p className="text text_type_main-default mt-15">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mt-2 mb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  )
}