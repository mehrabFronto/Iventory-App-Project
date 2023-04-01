import { useEffect, useState } from "react";
import CategoryForm from "../CategoryForm/CategoryForm";
import NavBar from "../NavBar/NavBar";
import ProductsForm from "../ProductForm/ProductForm";
import ProductsList from "../ProductsList/ProductsList";

const IventoryApp = () => {
   const [categories, setCategories] = useState(
      JSON.parse(localStorage.getItem("categories")) || [],
   );

   const [products, setProducts] = useState(
      JSON.parse(localStorage.getItem("products")) || [],
   );

   const [filteredProducts, setFilteredProducts] = useState([]);

   const [filterValue, setFilterValue] = useState(" ");

   useEffect(() => {
      localStorage.setItem("categories", JSON.stringify(categories));
      localStorage.setItem("products", JSON.stringify(products));
      filterHandler(filterValue, products);
   }, [categories, products, filterValue]);

   const addCategoryHandler = (title) => {
      const newCategory = {
         value: title.toLowerCase().split(" ").join(""),
         title,
         id: new Date().getTime(),
      };
      setCategories([...categories, newCategory]);
      localStorage.setItem("categories", JSON.stringify(categories));
   };

   const addProductHandler = (product) => {
      const newProduct = {
         ...product,
         id: new Date().getTime(),
         createdAt: new Date().toISOString(),
      };

      const updatedProducts = [...products, newProduct];

      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(products));
      filterHandler(filterValue, updatedProducts);
      // const filtered = products.filter((p) => p.category === filterValue);
      // setFilteredProducts(filtered);
   };

   const removeProductHandler = (id) => {
      const filteredProducts = products.filter((p) => p.id !== id);
      setProducts(filteredProducts);
      localStorage.setItem("products", JSON.stringify(filteredProducts));
      filterHandler(filterValue, filteredProducts);
   };

   const renderOptions = () => {
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
      setFilterValue(filter);
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
