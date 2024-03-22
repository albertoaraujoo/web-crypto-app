import { useEffect, useState } from "react";
import "../../global.css";
import styles from "./HomePage.module.css";
import { CoinCardProps } from "../../types";
import CoinsList from "../../components/CoinsList";
import Wallet from "../../components/Wallet";
import { top10MktCap } from "../../services/top10MktCap";

export const HomePage = () => {
  const [data, setData] = useState<CoinCardProps[]>([]);

  useEffect(() => {
    const fetchCrypto = async () => {
      const data = await top10MktCap();
      setData(data);
    };
    fetchCrypto();
  }, []);

  return (
    <div>
      <main className={styles.container}>
        <Wallet />
        <CoinsList data={data} />
      </main>
    </div>
  );
};
