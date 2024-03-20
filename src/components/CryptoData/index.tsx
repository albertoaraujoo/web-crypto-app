import { CryptoDataComponentsProps } from "../../types";
import styles from "./CryptoData.module.css";

export const CryptoData = ({
  title,
  children,
  titleColor,
}: CryptoDataComponentsProps) => {
  return (
    <div className={styles.container}>
      <h3 style={{ color: titleColor }}>{title}</h3>
      <hr className={styles.divider} />
      <p className={styles.value}>${children}</p>
    </div>
  );
};
