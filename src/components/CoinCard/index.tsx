import { CoinCardProps } from "../../types";
import { CoinImage } from "../CoinImage";
import styles from "./CoinCard.module.css";
import { Link } from "react-router-dom";

export const CoinCard = ({
  name,
  current_price,
  symbol,
  image,
  id,
}: CoinCardProps) => {
  return (
    <Link to={`/crypto/${id}`} className={styles.card}>
      <article className={styles.card}>
        <div className={styles.nameAndImg}>
          <CoinImage
            src={image}
            width="4rem"
            marginLeftValue="1rem"
            borderRadiusValue="2rem"
          />
          <h2 className={styles.nameAndSymbol}>{name}</h2>
          <span className={styles.symbol}>{symbol}</span>
        </div>
        <div className={styles.price}>
          <h3>Price:</h3>
          <p>${current_price}</p>
        </div>
      </article>
    </Link>
  );
};
