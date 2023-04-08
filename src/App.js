import IventoryApp from "./components/IventoryApp/IventoryApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./app.css";

const App = () => {
   const styles = {
      fontSize: "16px",
   };

   return (
      <div className="app">
         <ToastContainer style={styles} />
         <IventoryApp />
      </div>
   );
};

export default App;
