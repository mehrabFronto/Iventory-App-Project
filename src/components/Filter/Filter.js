import { useEffect, useState } from "react";
import styles from "./filter.module.css";

const Filter = ({ options, filterHandler }) => {
   // get all products from localStorage
   const [products, setProducts] = useState(
      JSON.parse(localStorage.getItem("products")) || [],
   );

   // the value of select option
   const [filter, setFilter] = useState(" ");

   return (
      <select
         className={styles.filter__select}
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
   );
};

export default Filter;
