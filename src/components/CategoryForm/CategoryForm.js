import { useState } from "react";
import { toast } from "react-toastify";

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

      toast.success("category successfully added");
   };

   return (
      <form
         className="form"
         onSubmit={submitHandler}>
         <h2>Add Category :</h2>
         <div className="form__wrapper">
            {/* title input */}
            <input
               type="text"
               placeholder="category title..."
               className="form__input"
               onChange={(e) => setTitle(e.target.value)}
               value={title}
            />
            {/* buttons */}
            <div className="form__buttons__container">
               {/* cancel btn */}
               <button
                  className="btn secondary--btn"
                  type="button"
                  onChange={() => setTitle("")}>
                  Cancel
               </button>
               {/* add btn */}
               <button
                  className="btn primary--btn"
                  type="submit">
                  Add
               </button>
            </div>
         </div>
      </form>
   );
};

export default CategoryForm;
