import { useState } from "react";
import styles from "./productForm.module.css";

const ProductsForm = ({ options, addProduct }) => {
   // new product
   const [product, setProduct] = useState({
      title: "",
      category: "",
      quantity: "",
   });

   const submitHandler = (e) => {
      // if the user did not enter the product title => return alert
      if (!product.title) return alert("please enter the product title");

      // if the user did not select the product category => return alert
      if (!product.category) return alert("please select the product category");

      e.preventDefault();

      // create new product
      const newProduct = {
         title: product.title,
         category: product.category,
         quantity: Number(product.quantity),
      };

      // pass the new product to addProductHandler to add other properties and save on products
      addProduct(newProduct);

      // clear the inputs
      setProduct({
         title: "",
         category: "",
         quantity: "",
      });
   };

   return (
      <form
         className={styles.form}
         onSubmit={submitHandler}>
         <h2 className={styles.form__title}>Add Product :</h2>
         <div className={styles.form__wrapper}>
            {/* title input */}
            <input
               type="text"
               placeholder="product title..."
               className={styles.form__input}
               onChange={(e) =>
                  setProduct({ ...product, title: e.target.value })
               }
               value={product.title}
            />
            {/* categories select option */}
            <select
               className={styles.form__select}
               onChange={(e) =>
                  setProduct({ ...product, category: e.target.value })
               }
               value={product.category}>
               <option value="">Select a category</option>
               {/* render all options (categories) */}
               {options}
            </select>
            {/* quantity input */}
            <input
               type="number"
               placeholder="product quantity..."
               className={styles.form__input}
               onChange={(e) =>
                  setProduct({ ...product, quantity: e.target.value })
               }
               value={product.quantity}
            />
            {/* buttons */}
            <div className={styles.form__buttons__container}>
               {/* cancel btn */}
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
               {/* add btn */}
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
