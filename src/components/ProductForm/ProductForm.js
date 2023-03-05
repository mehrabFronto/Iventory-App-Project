const ProductsForm = () => {
   return (
      <form>
         <h2>Add Product :</h2>
         <div>
            <input
               type="text"
               placeholder="product title..."
            />
            <select>
               <option value="">Select a category</option>
               <option value="">1</option>
               <option value="">2</option>
               <option value="">3</option>
            </select>
            <input
               type="number"
               placeholder="product quantity..."
            />
            <div>
               <button>Cancel</button>
               <button type="submit">Add</button>
            </div>
         </div>
      </form>
   );
};

export default ProductsForm;
