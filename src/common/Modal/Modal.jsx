import React from "react";
import styles from "./modal.module.css";

import { BiX } from "react-icons/bi";

function Modal({ title, children, onOpen, open }) {
   if (!open) return null;
   return (
      <div>
         <div
            data-testid="backdrop"
            className={styles.backdrop}
            onClick={() => onOpen(false)}></div>
         <div className={styles.modal}>
            <div className={styles.modal__header}>
               <h2 className={styles.title}>{title}</h2>
               <button
                  data-testid="close-modal"
                  className="btn"
                  style={{ backgroundColor: "transparent" }}
                  onClick={() => onOpen(false)}>
                  <BiX className={`${styles.icon} ${styles.close}`} />
               </button>
            </div>
            {children}
         </div>
      </div>
   );
}

export default Modal;
