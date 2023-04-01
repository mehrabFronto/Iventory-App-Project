import styles from "./categoryForm.module.css";
import { useState } from "react";

const CategoryForm = ({ addCategory }) => {
   // the category title
   const [title, setTitle] = useState("");

   const submitHandler = (e) => {
      // if the user did not enter the category title => return alert
      if (!title) return alert("please enter the category title");

      e.preventDefault();

      // pass the category title to addCategoryHandler to add other properties and save on categories
      addCategory(title);

      // clear the input
      setTitle("");
   };

   return (
      <form
         className={styles.form}
         onSubmit={submitHandler}>
         <h2 className={styles.form__title}>Add Category :</h2>
         <div className={styles.form__wrapper}>
            {/* title input */}
            <input
               type="text"
               placeholder="category title..."
               className={styles.form__input}
               onChange={(e) => setTitle(e.target.value)}
               value={title}
            />
            {/* buttons */}
            <div className={styles.form__buttons__container}>
               {/* cancel btn */}
               <button
                  className={`${styles.btn} ${styles.btnCancel}`}
                  onChange={() => setTitle("")}>
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

export default CategoryForm;
