import styles from "./productForm.module.css";

const ProductsForm = ({ categories }) => {
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
      <form className={styles.form}>
         <h2 className={styles.form__title}>Add Product :</h2>
         <div className={styles.form__wrapper}>
            <input
               type="text"
               placeholder="product title..."
               className={styles.form__input}
            />
            <select className={styles.form__select}>
               <option value="">Select a category</option>
               {renderOptions()}
            </select>
            <input
               type="number"
               placeholder="product quantity..."
               className={styles.form__input}
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
