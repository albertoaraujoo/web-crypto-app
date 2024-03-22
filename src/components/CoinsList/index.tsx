import { ErrorPage } from "../../pages/Error/ErrorPage";
import { CoinList, CoinCardProps } from "../../types";
import { formatPrice } from "../../utils/formatPrice";
import { CoinCard } from "../CoinCard";

import styles from "./CoinsList.module.css";

const CoinsList = ({ data }: CoinList) => {
  return (
    <div className={styles.container}>
      {data ? (
        <>
          <header className={styles.header}>
            TOP CRYPTOCURRENCY COINS BY MARKET CAP
          </header>
          {data.map((coin: CoinCardProps) => (
            <CoinCard
              id={coin.id}
              key={coin.id}
              name={coin.name}
              current_price={formatPrice(Number(coin.current_price))}
              image={coin.image}
              symbol={coin.symbol}
            />
          ))}
        </>
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};

export default CoinsList;
