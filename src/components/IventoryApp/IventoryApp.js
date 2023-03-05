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

   useEffect(() => {
      localStorage.setItem("categories", JSON.stringify(categories));
      localStorage.setItem("products", JSON.stringify(products));
   }, [categories, products]);

   const addCategoryHandler = (title) => {
      const newCategory = {
         value: title.toLowerCase().split(" ").join(""),
         title,
         id: new Date().getTime(),
      };
      setCategories([...categories, newCategory]);
      localStorage.setItem("categories", JSON.stringify(categories));
   };

   const addProductHandler = (newProduct) => {
      newProduct.id = new Date().getTime();
      newProduct.createdAt = new Date().toISOString();
      setProducts([...products, newProduct]);
      localStorage.setItem("products", JSON.stringify(products));
   };

   return (
      <div className="app">
         <NavBar />
         <CategoryForm addCategory={addCategoryHandler} />
         <ProductsForm
            categories={categories}
            addProduct={addProductHandler}
         />
         <ProductsList />
      </div>
   );
};

export default IventoryApp;
