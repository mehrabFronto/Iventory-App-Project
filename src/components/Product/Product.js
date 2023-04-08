import {
   BiTrash,
   BiEdit,
   BiDotsVerticalRounded,
   BiCheck,
   BiX,
} from "react-icons/bi";
import styles from "./product.module.css";
import { useState } from "react";

const Product = ({ product, removeProduct, editHandler }) => {
   const [isEdit, setIsEdit] = useState(false);
   const [isMore, setIsMore] = useState(false);

   const [newTitle, setNewTitle] = useState(product.title);

   const submitHandler = (e) => {
      e.preventDefault();
      editHandler(product.id, newTitle);
      setIsEdit(false);
   };

   const renderItems = () => {
      if (isEdit) {
         return (
            <form
               className="form--edit"
               onSubmit={submitHandler}>
               <input
                  autoFocus
                  type="text"
                  className="form__input"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  style={{
                     backgroundColor: "transparent",
                     color: "var(--primary-color)",
                     border: "none",
                     padding: "0",
                  }}
               />
               <div className="buttons__container">
                  <button
                     type="button"
                     className="btn btn--edit"
                     onClick={() => setIsEdit(false)}>
                     <BiX />
                  </button>
                  <button
                     type="submit"
                     className="btn btn--edit">
                     <BiCheck />
                  </button>
               </div>
            </form>
         );
      }

      return (
         <div className="item">
            {/* product title */}
            <h3>{product.title}</h3>
            {/* remove product btn */}
            <div className="buttons__container">
               <button
                  className="btn btn--delete"
                  onClick={() => removeProduct(product.id)}>
                  <BiTrash />
               </button>
               <button
                  className="btn btn--edit"
                  onClick={() => setIsEdit(!isEdit)}>
                  <BiEdit />
               </button>
               <button
                  className="btn btn--more"
                  onClick={() => setIsMore(!isMore)}>
                  <BiDotsVerticalRounded />
               </button>
            </div>
         </div>
      );
   };

   return (
      <div className={styles.product}>
         <div className="item__container">{renderItems()}</div>
         {isMore && (
            <div className={styles.more}>
               {/* product created date */}
               <span>
                  {new Date(product.createdAt).toLocaleString("en", {
                     weekday: "short",
                     month: "short",
                     day: "numeric",
                  })}
               </span>
               {/* product quantity */}
               <span className="quantity">{product.quantity}</span>
               {/* product category */}
               <span className={styles.product__category}>
                  {product.category}
               </span>
            </div>
         )}
      </div>
   );
};

export default Product;
