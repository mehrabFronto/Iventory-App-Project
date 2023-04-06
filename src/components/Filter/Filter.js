import { useState } from "react";
import styles from "./filter.module.css";

const Filter = ({ options, filterHandler }) => {
   // get all products from localStorage
   const [products] = useState(
      JSON.parse(localStorage.getItem("products")) || [],
   );

   // the value of select option
   const [filter, setFilter] = useState(" ");

   return (
      <div className={styles.filter__container}>
         <select
            className="select filter__select"
            onChange={(e) => {
               // the value of select option
               const value = e.target.value;

               // set the value of select option
               setFilter(value);

               // filter the products on change select option value
               filterHandler(value, products);
            }}
            value={filter}>
            <option value=" ">filter by categories</option>
            {/* render all options (categories) */}
            {options}
         </select>
      </div>
   );
};

export default Filter;
