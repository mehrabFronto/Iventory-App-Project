import Product from "../Product/Product";
import styles from "./productsList.module.css";

const ProductsList = () => {
   return (
      <div className={styles.productsList__container}>
         <h2 className={styles.productsList__title}>Products List :</h2>
         <div className={styles.products__wrapper}>
            <Product />
            <Product />
            <Product />
            <Product />
         </div>
      </div>
   );
};

export default ProductsList;
