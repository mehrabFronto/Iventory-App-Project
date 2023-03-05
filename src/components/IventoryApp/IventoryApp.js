import CategoryForm from "../CategotyForm/CategoryForm";
import NavBar from "../NavBar/NavBar";
import ProductsForm from "../ProductForm/ProductForm";
import ProductsList from "../ProductsList/ProductsList";

const IventoryApp = () => {
   return (
      <div>
         <NavBar />
         <CategoryForm />
         <ProductsForm />
         <ProductsList />
      </div>
   );
};

export default IventoryApp;
