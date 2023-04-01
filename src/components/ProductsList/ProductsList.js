import Filter from "../Filter/Filter";
import Product from "../Product/Product";
import styles from "./productsList.module.css";

const ProductsList = ({ products, removeProduct, options, filterHandler }) => {
   // conditional rendering
   const renderProducts = () => {
      // if there is not any products => return a message . else return the list of products
      if (products.length === 0)
         return (
            <div>
               <h2>there are no products yet!</h2>
            </div>
         );

      return products.map((p) => (
         <Product
            key={p.id}
            product={p}
            removeProduct={removeProduct}
         />
      ));
   };

   return (
      <div className={styles.productsList__container}>
         <h2 className={styles.productsList__title}>Products List :</h2>
         <Filter
            options={options}
            filterHandler={filterHandler}
         />
         <div className={styles.products__wrapper}>{renderProducts()}</div>
      </div>
   );
};

export default ProductsList;
