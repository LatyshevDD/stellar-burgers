import React from "react"
import PropTypes from 'prop-types'
import { useRef } from "react"
import ModalOverlay from "../ModalOverlay/modal_overlay"
import styles from './modal.module.css'
import close_image from '../../images/modal_close.png'
import { useAppSelector } from "../../services/hooks"
import { ModalPropsType } from "../../types/types"

export default function Modal({children, onClose}: ModalPropsType) {

  const orderDataSpinnerActive = useAppSelector((store) => store.orderData.spinnerActive)

  const modal = useRef<HTMLDivElement>(null)

  function handleEscClose(e: KeyboardEvent) {
    if(orderDataSpinnerActive) {
      return
    }
    if (e.key === "Escape") {
      onClose()
    }
  }

  function overlayClosePopup(e: MouseEvent) {
    if(orderDataSpinnerActive) {
      return
    }
    if (e.target instanceof Node) {
      if (modal.current  && !modal.current.contains(e.target)) {
        onClose()  
      }
      return;
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleEscClose);
    document.addEventListener('click', overlayClosePopup);
    return () => {
    document.removeEventListener('keydown', handleEscClose);
    document.removeEventListener('click', overlayClosePopup);
    }
  })

  return (
    <div className={styles.modal_container}>
      <ModalOverlay/>
      <div className={styles.modal} ref={modal}>
        {children}
        <button 
        className={styles.button_close} 
        onClick={ 
          () => {
            if(orderDataSpinnerActive) {
              return
            }
            onClose()
          }  
        }
        >
        <img src={close_image} alt="Закрыть модальное окно"/>
      </button>
    </div>
  </div> 
  )
}

Modal.propTypes = {
  onClose: PropTypes.func
}; 