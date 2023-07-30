import React from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import ModalOverlay from "../ModalOverlay/modal_overlay";
import styles from './modal.module.css';
import close_image from '../../images/modal_close.png';

const modalRoot = document.getElementById("react-modals");

export default function Modal({children, onCloseModal}) {

  function handleEscClose(e) {
    if (e.key == "Escape") {
      onCloseModal();
    }
  }

  function overlayClosePopup(e) {
    if (e.target.closest('.modal')) {
      return;
    }
    onCloseModal();
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
          <div className={styles.modal}>
            {children}
            <button className={styles.button_close} onClick={onCloseModal}>
              <img src={close_image} alt="Закрыть модальное окно"/>
            </button>
          </div>
        </div>  
    ),
    modalRoot  
  );
}