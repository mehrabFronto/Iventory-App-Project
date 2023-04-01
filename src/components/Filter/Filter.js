import { useEffect, useState } from "react";
import styles from "./filter.module.css";

const Filter = ({ options, filterHandler }) => {
   const [products, setProducts] = useState(
      JSON.parse(localStorage.getItem("products")) || [],
   );
   const [filter, setFilter] = useState(" ");

   useEffect(() => {
      filterHandler(filter, products);
   }, []);

   return (
      <select
         className={styles.filter__select}
         onChange={(e) => {
            const value = e.target.value;
            setFilter(value);
            filterHandler(value, products);
         }}
         value={filter}>
         <option value=" ">filter by categories</option>
         {options}
      </select>
   );
};

export default Filter;
