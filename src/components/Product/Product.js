import { BiTrash } from "react-icons/bi";
import styles from "./product.module.css";

const Product = ({ product, removeProduct }) => {
   return (
      <div className={styles.product}>
         <h3>{product.title}</h3>
         <span>
            {new Date(product.createdAt).toLocaleString("en", {
               weekday: "short",
               month: "short",
               day: "numeric",
            })}
         </span>
         <span className={styles.product__quantity}>{product.quantity}</span>
         <span className={styles.product__category}>{product.category}</span>
         <button onClick={() => removeProduct(product.id)}>
            <BiTrash />
         </button>
      </div>
   );
};

export default Product;
