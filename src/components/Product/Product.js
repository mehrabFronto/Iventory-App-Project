import { BiTrash } from "react-icons/bi";
import styles from "./product.module.css";

const Product = () => {
   return (
      <div className={styles.product}>
         <h3>Product 1</h3>
         <span>23/3/2</span>
         <span className={styles.product__quantity}>2</span>
         <span className={styles.product__category}>category</span>
         <button>
            <BiTrash />
         </button>
      </div>
   );
};

export default Product;
