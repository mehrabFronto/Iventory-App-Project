import { useState } from "react";
import styles from "./filter.module.css";

const Filter = ({ options, filterHandler, sortHandler }) => {
   // get all products from localStorage
   const [products] = useState(
      JSON.parse(localStorage.getItem("products")) || [],
   );

   // the value of filter select option
   const [filter, setFilter] = useState(" ");

   // the value of sort select option
   const [sort, setSort] = useState("newest");

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
         <select
            className="select filter__select"
            onChange={(e) => {
               // the value of select option
               const value = e.target.value;

               // set the value of select option
               setSort(value);

               // sort the products on change select option value
               sortHandler(value, products);
            }}
            value={sort}>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
         </select>
      </div>
   );
};

export default Filter;
