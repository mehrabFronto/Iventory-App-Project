import { BiTrash } from "react-icons/bi";
import styles from "./product.module.css";

const Product = ({ product, removeProduct }) => {
   return (
      <div className={styles.product}>
         {/* product title */}
         <h3>{product.title}</h3>
         {/* product created date */}
         <span>
            {new Date(product.createdAt).toLocaleString("en", {
               weekday: "short",
               month: "short",
               day: "numeric",
            })}
         </span>
         {/* product quantity */}
         <span className="quantity">{product.quantity}</span>
         {/* product category */}
         <span className={styles.product__category}>{product.category}</span>
         {/* remove product btn */}
         <button
            className="btn delete--btn"
            onClick={() => removeProduct(product.id)}>
            <BiTrash />
         </button>
      </div>
   );
};

export default Product;
