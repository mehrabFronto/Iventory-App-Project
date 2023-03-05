import CategoryForm from "../CategoryForm/CategoryForm";
import NavBar from "../NavBar/NavBar";
import ProductForm from "../ProductForm/ProductForm";
import ProductsList from "../ProductsList/ProductsList";

const IventoryApp = () => {
   return (
      <div className="app">
         <NavBar />
         <CategoryForm />
         <ProductForm />
         <ProductsList />
      </div>
   );
};

export default IventoryApp;
