import React, { useState } from "react";
import { toast } from "react-toastify";

const ProductsForm = ({ options, addProduct }) => {
   // new product
   const [product, setProduct] = useState({
      title: "",
      category: "",
      quantity: "",
   });

   const submitHandler = (e) => {
      e.preventDefault();

      // if the user did not enter the product title => return alert
      if (!product.title) {
         toast.error("please enter the product title");
      }
      // if the user did not select the product category => return alert
      else if (!product.category) {
         toast.error("please select the product category");
      } else {
         // create new product
         const newProduct = {
            title: product.title,
            category: product.category,
            quantity: Number(product.quantity),
         };

         // pass the new product to addProductHandler to add other properties and save on products
         addProduct(newProduct);

         // clear the inputs
         setProduct({
            title: "",
            category: "",
            quantity: "",
         });

         toast.success("product successfully added");
      }
   };

   const changeHandler = ({ target }) => {
      const { value, name } = target;
      setProduct({ ...product, [name]: value });
   };

   return (
      <form
         className="form"
         onSubmit={submitHandler}>
         <h2>Add Product :</h2>
         <div className="form__body">
            {/* title input */}
            <input
               type="text"
               name="title"
               placeholder="product title..."
               className="form__input"
               onChange={(e) => changeHandler(e)}
               value={product.title}
            />
            {/* categories select option */}
            <select
               className="select form__select"
               name="category"
               onChange={(e) => changeHandler(e)}
               value={product.category}>
               <option value="">Select a category</option>
               {/* render all options (categories) */}
               {options}
            </select>
            {/* quantity input */}
            <input
               type="number"
               name="quantity"
               placeholder="product quantity..."
               className="form__input"
               onChange={(e) => changeHandler(e)}
               value={product.quantity}
            />
            {/* buttons */}
            <div className="buttons__container">
               {/* cancel btn */}
               <button
                  type="button"
                  onClick={() =>
                     setProduct({
                        title: "",
                        category: "",
                        quantity: "",
                     })
                  }
                  className="btn btn--secondary">
                  Cancel
               </button>
               {/* add btn */}
               <button
                  className="btn btn--primary"
                  type="submit">
                  Add
               </button>
            </div>
         </div>
      </form>
   );
};

export default ProductsForm;
