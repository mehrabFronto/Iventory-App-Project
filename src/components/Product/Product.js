import { BiTrash } from "react-icons/bi";

const Product = () => {
   return (
      <div>
         <h3>Product 1</h3>
         <span>23/3/2</span>
         <span>2</span>
         <span>category</span>
         <button>
            <BiTrash />
         </button>
      </div>
   );
};

export default Product;
