import { useEffect, useState } from "react";
import CategoryForm from "../CategoryForm/CategoryForm";
import NavBar from "../NavBar/NavBar";
import ProductsForm from "../ProductForm/ProductForm";
import ProductsList from "../ProductsList/ProductsList";

const IventoryApp = () => {
   const [categories, setCategories] = useState(
      JSON.parse(localStorage.getItem("categories")) || [],
   );

   useEffect(() => {
      localStorage.setItem("categories", JSON.stringify(categories));
   }, [categories]);

   const addCategoryHandler = (title) => {
      const newCategory = {
         value: title.toLowerCase().split(" ").join(""),
         title,
         id: new Date().getTime(),
      };
      setCategories([...categories, newCategory]);
      localStorage.setItem("categories", JSON.stringify(categories));
   };

   return (
      <div className="app">
         <NavBar />
         <CategoryForm addCategory={addCategoryHandler} />
         <ProductsForm categories={categories} />
         <ProductsList />
      </div>
   );
};

export default IventoryApp;
