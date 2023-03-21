import { useState } from "react";
import styles from "./productForm.module.css";

const ProductsForm = ({ categories, addProduct }) => {
   const [product, setProduct] = useState({
      title: "",
      category: "",
      quantity: "",
   });

   const submitHandler = (e) => {
      if (!product.title) return alert("please enter the product title");
      if (!product.category) return alert("please select the product category");
      e.preventDefault();
      const newProduct = {
         title: product.title,
         category: product.category,
         quantity: Number(product.quantity),
      };
      addProduct(newProduct);
      setProduct({
         title: "",
         category: "",
         quantity: "",
      });
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
               onChange={(e) =>
                  setProduct({ ...product, title: e.target.value })
               }
               value={product.title}
            />
            <select
               className={styles.form__select}
               onChange={(e) =>
                  setProduct({ ...product, category: e.target.value })
               }
               value={product.category}>
               <option value="">Select a category</option>
               {renderOptions()}
            </select>
            <input
               type="number"
               placeholder="product quantity..."
               className={styles.form__input}
               onChange={(e) =>
                  setProduct({ ...product, quantity: e.target.value })
               }
               value={product.quantity}
            />
            <div className={styles.form__buttons__container}>
               <button
                  type="button"
                  onClick={() =>
                     setProduct({
                        title: "",
                        category: "",
                        quantity: "",
                     })
                  }
                  className={`${styles.btn} ${styles.btnCancel}`}>
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
