import { useState } from "react";
import styles from "./productForm.module.css";

const ProductsForm = ({ categories, addProduct }) => {
   const [productTitle, setProductTitle] = useState("");
   const [productCategory, setProductCategory] = useState("");
   const [productQuantity, setProductQuantity] = useState("");

   const submitHandler = (e) => {
      if (!productTitle) return alert("please enter the category title");
      if (!productCategory) return alert("please select the product category");
      e.preventDefault();
      const newProduct = {
         title: productTitle,
         category: productCategory,
         quantity: Number(productQuantity),
      };
      addProduct(newProduct);
      setProductTitle("");
      setProductCategory("");
      setProductQuantity("");
   };

   const renderOptions = () => {
      return categories.map((category) => {
         return (
            <option
               key={category.id}
               value={category.value}>
               {category.title}
            </option>
         );
      });
   };

   return (
      <form
         className={styles.form}
         onSubmit={submitHandler}>
         <h2 className={styles.form__title}>Add Product :</h2>
         <div className={styles.form__wrapper}>
            <input
               type="text"
               placeholder="product title..."
               className={styles.form__input}
               onChange={(e) => setProductTitle(e.target.value)}
               value={productTitle}
            />
            <select
               className={styles.form__select}
               onChange={(e) => setProductCategory(e.target.value)}
               value={productCategory}>
               <option value="">Select a category</option>
               {renderOptions()}
            </select>
            <input
               type="number"
               placeholder="product quantity..."
               className={styles.form__input}
               onChange={(e) => setProductQuantity(e.target.value)}
               value={productQuantity}
            />
            <div className={styles.form__buttons__container}>
               <button className={`${styles.btn} ${styles.btnCancel}`}>
                  Cancel
               </button>

               <button
                  className={`${styles.btn} ${styles.btnAdd}`}
                  type="submit">
                  Add
               </button>
            </div>
         </div>
      </form>
   );
};

export default ProductsForm;
