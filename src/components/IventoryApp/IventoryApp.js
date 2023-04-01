import { useEffect, useState } from "react";
import CategoryForm from "../CategoryForm/CategoryForm";
import NavBar from "../NavBar/NavBar";
import ProductsForm from "../ProductForm/ProductForm";
import ProductsList from "../ProductsList/ProductsList";

const IventoryApp = () => {
   // get categories from localStorage
   const [categories, setCategories] = useState(
      JSON.parse(localStorage.getItem("categories")) || [],
   );

   // get products from localStorage
   const [products, setProducts] = useState(
      JSON.parse(localStorage.getItem("products")) || [],
   );

   // filterd products
   const [filteredProducts, setFilteredProducts] = useState([]);

   // the value of the filter select option on Filter component
   const [filterValue, setFilterValue] = useState(" ");

   useEffect(() => {
      // update categories on changes
      localStorage.setItem("categories", JSON.stringify(categories));

      // update products on changes
      localStorage.setItem("products", JSON.stringify(products));

      // update filtered products on changes
      filterHandler(filterValue, products);
   }, [categories, products, filterValue]);

   const addCategoryHandler = (title) => {
      // create new category
      const newCategory = {
         value: title.toLowerCase().split(" ").join(""),
         title,
         id: new Date().getTime(),
      };

      // update categories
      setCategories([...categories, newCategory]);

      // new new data
      localStorage.setItem("categories", JSON.stringify(categories));
   };

   const addProductHandler = (product) => {
      // create new product
      const newProduct = {
         ...product,
         id: new Date().getTime(),
         createdAt: new Date().toISOString(),
      };

      // update products
      const updatedProducts = [...products, newProduct];
      setProducts(updatedProducts);

      // set new data
      localStorage.setItem("products", JSON.stringify(products));

      // update filtered products
      filterHandler(filterValue, updatedProducts);
   };

   const removeProductHandler = (id) => {
      // filter products
      const filteredProducts = products.filter((p) => p.id !== id);

      // update products
      setProducts(filteredProducts);

      // set new data
      localStorage.setItem("products", JSON.stringify(filteredProducts));

      // update filtered products
      filterHandler(filterValue, filteredProducts);
   };

   const renderOptions = () => {
      // craete a list of options (categories)
      return categories.map((category) => {
         return (
            <option
               key={category.id}
               value={category.value}>
               {category.title}
            </option>
         );
      });
   };

   const filterHandler = (filter, products) => {
      // set the value of the filter select option on Filter component
      setFilterValue(filter);

      // if the user did not select an option => return all products . else retrn filtered product
      if (filter === " ") {
         setFilteredProducts(products);
      } else {
         const filterProducts = products.filter((p) => p.category === filter);
         setFilteredProducts(filterProducts);
      }
   };

   return (
      <div className="app">
         <NavBar counter={filteredProducts.length} />
         <CategoryForm addCategory={addCategoryHandler} />
         <ProductsForm
            options={renderOptions()}
            addProduct={addProductHandler}
         />
         <ProductsList
            products={filteredProducts}
            removeProduct={removeProductHandler}
            options={renderOptions()}
            filterHandler={filterHandler}
         />
      </div>
   );
};

export default IventoryApp;
