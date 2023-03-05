import Product from "../Product/Product";
import styles from "./productsList.module.css";

const ProductsList = ({ products }) => {
   const renderProducts = () => {
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
         />
      ));
   };

   return (
      <div className={styles.productsList__container}>
         <h2 className={styles.productsList__title}>Products List :</h2>
         <div className={styles.products__wrapper}>{renderProducts()}</div>
      </div>
   );
};

export default ProductsList;
