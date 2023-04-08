import { useState } from "react";
import { BiX, BiTrash } from "react-icons/bi";
import styles from "./categoriesList.module.css";

const CategoriesList = ({ categories, onRemove }) => {
   // for handle being open the categories list
   const [isVisible, setIsVisible] = useState(false);

   const renderCategories = () => {
      // if there is not any category show a message . else return categories list
      if (categories.length === 0)
         return (
            <h2
               style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0",
               }}>
               there's not any category
            </h2>
         );

      return categories.map((c) => {
         return (
            <div
               className="item__container"
               key={c.id}>
               <div className="item">
                  {/* category detail */}
                  <div className={styles.category__detail}>
                     {/* category title */}
                     <h3>{c.title}</h3>
                     {/* category created date */}
                     <span>
                        {new Date(c.createdAt).toLocaleString("en", {
                           weekday: "short",
                           month: "short",
                           day: "numeric",
                        })}
                     </span>
                  </div>
                  {/* remove category btn */}
                  <div className="buttons__container">
                     <button
                        className="btn btn--delete"
                        onClick={() => onRemove(c.id)}>
                        <BiTrash />
                     </button>
                  </div>
               </div>
            </div>
         );
      });
   };

   return (
      <div className="list__container">
         {/* if user clicked on message , show the categories list */}
         {!isVisible ? (
            <p
               className={styles.message}
               onClick={() => setIsVisible(!isVisible)}>
               Categories List ?
            </p>
         ) : (
            <div className={styles.categories}>
               <div className={styles.categories__header}>
                  <h2>categories list :</h2>
                  <button
                     className={`btn ${styles.x}`}
                     onClick={() => setIsVisible(!isVisible)}>
                     <BiX />
                  </button>
               </div>
               <div className={`list ${styles.categories__list}`}>
                  {renderCategories()}
               </div>
            </div>
         )}
      </div>
   );
};

export default CategoriesList;
