import { CoinCardProps, CoinList } from "../../types";
import { CoinCard } from "../CoinCard";
import styles from "./CoinsList.module.css";

const CoinsList = ({ data }: CoinList) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        Top Cryptocurrency Coins by Market Cap
      </header>
      {data.map((coin: CoinCardProps) => (
        <CoinCard
          id={coin.id}
          key={coin.id}
          name={coin.name}
          price={coin.price}
          image={coin.image}
          symbol={coin.symbol}
        />
      ))}
    </div>
  );
};

export default CoinsList;
