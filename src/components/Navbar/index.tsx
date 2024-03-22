import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.container}>
      <h3 className={styles.header}>
        <Link className={styles.link} to="/">
          WEB CRYPTO APP
        </Link>
      </h3>
    </nav>
  );
};
