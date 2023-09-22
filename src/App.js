import IventoryApp from "./components/IventoryApp/IventoryApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./app.css";

const App = () => {
   return (
      <div className="app">
         <ToastContainer style={{ fontSize: "16px" }} />
         <IventoryApp />
      </div>
   );
};

export default App;
