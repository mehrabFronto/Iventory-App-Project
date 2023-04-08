import { useEffect, useState } from "react";
import CategoryForm from "../CategoryForm/CategoryForm";
import NavBar from "../NavBar/NavBar";
import ProductsForm from "../ProductForm/ProductForm";
import { toast } from "react-toastify";
import ProductsList from "../ProductsList/ProductsList";
import CategoriesList from "../CategoriesList/CategoriesList";

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

   const [sortValue, setSortValue] = useState("newest");

   useEffect(() => {
      // update categories on changes
      localStorage.setItem("categories", JSON.stringify(categories));

      // update products on changes
      localStorage.setItem("products", JSON.stringify(products));

      // update sorted products on changes
      sortHandler(sortValue, products);

      // update filtered products on changes
      filterHandler(filterValue, products);
   }, [categories, products, filterValue, sortValue]);

   const addCategoryHandler = (title) => {
      // create new category
      const newCategory = {
         value: title.toLowerCase().split(" ").join(""),
         title,
         id: new Date().getTime(),
         createdAt: new Date().toISOString(),
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

      // update sorted products
      sortHandler(sortValue, updatedProducts);

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

      // update sorted products
      sortHandler(sortValue, filteredProducts);

      // update filtered products
      filterHandler(filterValue, filteredProducts);

      toast.success("product successfully deleted");
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
         const filteredProducts = products.filter((p) => p.category === filter);
         setFilteredProducts(filteredProducts);
      }
   };

   const sortHandler = (sort, products) => {
      // set the value of the filter select option on Filter component
      setSortValue(sort);

      const sortedProducts = products.sort((a, b) => {
         if (sort === "newest")
            return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
         else if (sort === "oldest")
            return new Date(a.createdAt) < new Date(b.createdAt) ? -1 : 1;
      });
      setFilteredProducts(sortedProducts);
   };

   const removeCategoryHandler = (id) => {
      // filter categories
      const filteredCategories = categories.filter((c) => c.id !== id);

      // update categories
      setCategories(filteredCategories);

      // set new data
      localStorage.setItem("categories", JSON.stringify(filteredCategories));
   };

   const editProductHandler = (id, newTitle) => {
      // find and get the product
      const index = products.findIndex((p) => p.id === id);
      const product = { ...products[index] };

      // if title was not changed
      if (product.title === newTitle) return;

      // change title and date
      product.title = newTitle;
      product.createdAt = new Date().toISOString();

      // update products new new product
      const updatedProducts = [...products];
      updatedProducts[index] = product;
      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));

      toast.success("product title successfully edited");
   };

   return (
      <div className="app">
         <NavBar counter={filteredProducts.length} />
         <CategoryForm addCategory={addCategoryHandler} />
         <CategoriesList
            categories={categories}
            onRemove={removeCategoryHandler}
         />
         <ProductsForm
            options={renderOptions()}
            addProduct={addProductHandler}
         />
         <ProductsList
            products={filteredProducts}
            removeProduct={removeProductHandler}
            options={renderOptions()}
            filterHandler={filterHandler}
            sortHandler={sortHandler}
            editHandler={editProductHandler}
         />
      </div>
   );
};

export default IventoryApp;
