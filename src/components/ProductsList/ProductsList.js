import Filter from "../Filter/Filter";
import Product from "../Product/Product";

const ProductsList = ({
   products,
   removeProduct,
   options,
   filterHandler,
   sortHandler,
   editHandler,
}) => {
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
            editHandler={editHandler}
         />
      ));
   };

   return (
      <div className="list__container">
         <h2>Products List :</h2>
         <Filter
            options={options}
            filterHandler={filterHandler}
            sortHandler={sortHandler}
         />
         <div className="list">{renderProducts()}</div>
      </div>
   );
};

export default ProductsList;
