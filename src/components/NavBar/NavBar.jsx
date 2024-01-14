import React from "react";
import styles from "./navBar.module.css";

const NavBar = ({ counter }) => {
   return (
      <nav className={styles.nav}>
         <h1>Iventory App</h1>
         {/* the count of products */}
         <span className="quantity">{counter}</span>
      </nav>
   );
};

export default NavBar;
