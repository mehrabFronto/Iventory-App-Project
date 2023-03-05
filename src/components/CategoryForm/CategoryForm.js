import styles from "./categoryForm.module.css";

const CategoryForm = () => {
   return (
      <form className={styles.form}>
         <h2 className={styles.form__title}>Add Category :</h2>
         <div className={styles.form__wrapper}>
            <input
               type="text"
               placeholder="category title..."
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

export default CategoryForm;
