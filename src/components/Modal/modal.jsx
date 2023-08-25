import React from "react"
import PropTypes from 'prop-types'
import { useEffect } from "react"
import { useRef } from "react"
import { createPortal } from "react-dom"
import ModalOverlay from "../ModalOverlay/modal_overlay"
import styles from './modal.module.css'
import close_image from '../../images/modal_close.png'
import { useDispatch } from "react-redux"
import { closeModal } from "../../services/modalDataSlice"

const modalRoot = document.getElementById("react-modals")

export default function Modal({children}) {

  const dispatch = useDispatch()

  const modal = useRef()

  function handleEscClose(e) {
    if (e.key === "Escape") {
      dispatch(closeModal())
    }
  }

  function overlayClosePopup(e) {
    if (modal.current && !modal.current.contains(e.target)) {
      dispatch(closeModal())
    }
    return;
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleEscClose);
    document.addEventListener('click', overlayClosePopup);
    return () => {
    document.removeEventListener('keydown', handleEscClose);
    document.removeEventListener('click', overlayClosePopup);
    }
  })

  return createPortal(
    (
        <div className={styles.modal_container}>
          <ModalOverlay/>
          <div className={styles.modal} ref={modal}>
            {children}
            <button 
              className={styles.button_close} 
              onClick={ 
                () => {
                  dispatch(closeModal())
                }  
              }
            >
              <img src={close_image} alt="Закрыть модальное окно"/>
            </button>
          </div>
        </div>  
    ),
    modalRoot  
  );
}