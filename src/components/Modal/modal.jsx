import React from "react";
import { createPortal } from "react-dom";
import ModalOverlay from "../ModalOverlay/modal_overlay";
import styles from './modal.module.css';
import close_image from '../../images/modal_close.png';

const modalRoot = document.getElementById("react-modals");

export default function Modal({children}) {
  return createPortal(
    (
        <div className={styles.modal_container}>
          <ModalOverlay/>
          <div className={styles.modal}>
            {children}
            <button className={styles.button_close}>
              <img src={close_image} alt="Закрыть модальное окно"/>
            </button>
          </div>
        </div>  
    ),
    modalRoot  
  );
}