import React, { useState } from "react";
import { toast } from "react-toastify";

const CategoryForm = ({ addCategory }) => {
   // the category title
   const [title, setTitle] = useState("");

   const submitHandler = (e) => {
      e.preventDefault();

      // if the user did not enter the category title => return alert
      if (!title) {
         toast.error("please enter the category title");
      } else {
         // pass the category title to addCategoryHandler to add other properties and save on categories
         addCategory(title);

         // clear the input
         setTitle("");

         toast.success("category successfully added");
      }
   };

   return (
      <form
         style={{
            marginBottom: "10px",
         }}
         className="form"
         onSubmit={submitHandler}>
         <h2>Add Category :</h2>
         <div className="form__body">
            {/* title input */}
            <input
               type="text"
               placeholder="category title..."
               className="form__input"
               onChange={(e) => setTitle(e.target.value)}
               value={title}
            />
            {/* buttons */}
            <div className="buttons__container">
               {/* cancel btn */}
               <button
                  className="btn btn--secondary"
                  type="button"
                  onClick={() => setTitle("")}>
                  Cancel
               </button>
               {/* add btn */}
               <button
                  className="btn btn--primary"
                  type="submit">
                  Add
               </button>
            </div>
         </div>
      </form>
   );
};

export default CategoryForm;
