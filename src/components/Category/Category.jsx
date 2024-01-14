import React, { useState } from "react";
import { BiTrash } from "react-icons/bi";
import styles from "./category.module.css";

const Category = ({ category, onRemove }) => {
   const [isDelete, setIsDelete] = useState(false);

   return (
      <div className="item">
         {/* if user wants to delete a category => show a warning . else => show category */}
         {isDelete ? (
            <div className={styles.warn}>
               <span>products with this category will delete!</span>
               <div className="buttons__container">
                  <button
                     data-testid="final-delete-category-btn"
                     style={{ padding: "5px" }}
                     className="btn btn--secondary"
                     onClick={() => {
                        onRemove(category.id, category.title);
                        setIsDelete(false);
                     }}>
                     Continue
                  </button>
                  <button
                     style={{ padding: "5px 10px" }}
                     onClick={() => setIsDelete(false)}
                     className="btn btn--primary">
                     Back
                  </button>
               </div>
            </div>
         ) : (
            <>
               {/* category detail */}
               <div className={styles.category__detail}>
                  {/* category title */}
                  <h3>{category.title}</h3>
                  {/* category created date */}
                  <span>
                     {new Date(category.createdAt).toLocaleString("en", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                     })}
                  </span>
               </div>
               {/* buttons */}
               <div className="buttons__container">
                  <button
                     data-testid="delete-category-btn"
                     className="btn btn--item btn--delete"
                     onClick={() => setIsDelete(true)}>
                     <BiTrash />
                  </button>
               </div>
            </>
         )}
      </div>
   );
};

export default Category;
