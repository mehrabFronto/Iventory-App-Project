import { useState } from "react";
import { BiDotsVerticalRounded, BiEdit, BiTrash } from "react-icons/bi";
import Modal from "../../common/Modal/Modal";
import styles from "./product.module.css";

const Product = ({ product, removeProduct, editHandler, options }) => {
   const [isEdit, setIsEdit] = useState(false);
   const [isMore, setIsMore] = useState(false);

   const [updatedProduct, setUpdatedProduct] = useState(product);

   const submitHandler = (e) => {
      e.preventDefault();
      editHandler(product.id, updatedProduct);
      setIsEdit(false);
   };

   const changeHandler = (e) =>
      setUpdatedProduct({ ...updatedProduct, [e.target.name]: e.target.value });

   return (
      <>
         {/* products list */}
         <div className={styles.product}>
            <div className="item__container">
               <div className="item">
                  {/* product title */}
                  <h3>{product.title}</h3>
                  {/* remove product btn */}
                  <div className="buttons__container">
                     <button
                        className="btn btn--item btn--delete"
                        onClick={() => removeProduct(product.id)}>
                        <BiTrash />
                     </button>
                     <button
                        className="btn btn--item"
                        onClick={() => {
                           setIsEdit(true);
                           setUpdatedProduct(product);
                        }}>
                        <BiEdit />
                     </button>
                     <button
                        className="btn btn--item"
                        onClick={() => setIsMore(!isMore)}>
                        <BiDotsVerticalRounded />
                     </button>
                  </div>
               </div>
            </div>
            {isMore && (
               <div className={styles.more}>
                  {/* product created date */}
                  <span style={{ fontFamily: "B Koodak", fontSize: "1.4rem" }}>
                     {new Date(product.createdAt).toLocaleString("fa", {
                        year: "numeric",
                        month: "numeric",
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

         {/* edit form modal */}
         {isEdit && (
            <Modal
               title="Edit Product:"
               open={isEdit}
               onOpen={setIsEdit}>
               <form
                  className="form form--edit"
                  onSubmit={submitHandler}>
                  {/* product title */}
                  <input
                     name="title"
                     autoFocus
                     type="text"
                     className="form__input"
                     style={{ border: "2px solid var(--secondary-color)" }}
                     value={updatedProduct.title}
                     onChange={changeHandler}
                     placeholder="product title..."
                  />
                  {/* categories select option */}
                  <select
                     className="select form__select"
                     name="category"
                     style={{ border: "2px solid var(--secondary-color)" }}
                     onChange={changeHandler}
                     value={updatedProduct.category}>
                     <option value="">Select a category</option>
                     {/* render all options (categories) */}
                     {options}
                  </select>
                  {/* quantity input */}
                  <input
                     type="number"
                     name="quantity"
                     placeholder="product quantity..."
                     className="form__input"
                     style={{ border: "2px solid var(--secondary-color)" }}
                     onChange={changeHandler}
                     value={updatedProduct.quantity}
                  />
                  {/* buttons */}
                  <div
                     className="buttons__container"
                     style={{ width: "100%", marginTop: "20px" }}>
                     {/* cancel btn */}
                     <button
                        type="button"
                        onClick={() => setIsEdit(false)}
                        className="btn btn--primary"
                        style={{ border: "2px solid var(--secondary-color)" }}>
                        Cancel
                     </button>
                     {/* add btn */}
                     <button
                        className="btn btn--secondary"
                        style={{ border: "2px solid var(--secondary-color)" }}
                        type="submit">
                        Update
                     </button>
                  </div>
               </form>
            </Modal>
         )}
      </>
   );
};

export default Product;
