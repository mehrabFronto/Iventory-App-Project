import styles from "./navBar.module.css";

const NavBar = ({ counter }) => {
   return (
      <nav className={styles.nav}>
         <h1>Iventory App</h1>
         <span>{counter}</span>
      </nav>
   );
};

export default NavBar;
