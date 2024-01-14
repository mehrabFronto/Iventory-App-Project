import React, { useState } from "react";
import Modal from "../../common/Modal/Modal";
import Category from "../Category/Category";
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
               data-testid="category-item"
               className="item__container"
               key={c.id}>
               <Category
                  category={c}
                  onRemove={onRemove}
               />
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
            <Modal
               title="Categories List:"
               open={isVisible}
               onOpen={setIsVisible}>
               <div className={styles.categories}>
                  <div className={`list ${styles.categories__list}`}>
                     {renderCategories()}
                  </div>
               </div>
            </Modal>
         )}
      </div>
   );
};

export default CategoriesList;
