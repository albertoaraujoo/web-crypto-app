import { CoinCardProps } from "../../types";
import styles from "./CoinCard.module.css";

export const CoinCard = ({ name, price, symbol, image }: CoinCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.nameAndImg}>
        <img className={styles.coinLogo} src={image} alt="coin logo" />
        <h2 className={styles.nameAndSymbol}>{name}</h2>
        <span className={styles.symbol}>{symbol}</span>
      </div>
      <div className={styles.price}>
        <h3>Price:</h3>
        <p>${price}</p>
      </div>
    </article>
  );
};
