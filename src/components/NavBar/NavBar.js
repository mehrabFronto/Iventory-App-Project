import styles from "./navBar.module.css";

const NavBar = ({ counter }) => {
   return (
      <nav className={styles.nav}>
         <h1>Iventory App</h1>
         {/* the count of products */}
         <span>{counter}</span>
      </nav>
   );
};

export default NavBar;
