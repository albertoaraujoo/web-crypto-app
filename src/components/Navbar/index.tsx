import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.container}>
      <h3 className={styles.header}>
        WEB CRYPTO <br /> APP
      </h3>
      <button className={styles.button}>
        <div>
          Connect to <br /> MetaMask
        </div>
        <div>🦊</div>
      </button>
    </nav>
  );
};
