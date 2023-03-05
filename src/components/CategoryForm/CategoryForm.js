import styles from "./categoryForm.module.css";
import { useState } from "react";

const CategoryForm = ({ addCategory }) => {
   const [title, setTitle] = useState("");

   const submitHandler = (e) => {
      if (!title) return alert("please enter the category title");
      e.preventDefault();
      addCategory(title);
      setTitle("");
   };

   return (
      <form
         className={styles.form}
         onSubmit={submitHandler}>
         <h2 className={styles.form__title}>Add Category :</h2>
         <div className={styles.form__wrapper}>
            <input
               type="text"
               placeholder="category title..."
               className={styles.form__input}
               onChange={(e) => setTitle(e.target.value)}
               value={title}
            />
            <div className={styles.form__buttons__container}>
               <button
                  className={`${styles.btn} ${styles.btnCancel}`}
                  onChange={() => setTitle("")}>
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
