import { useEffect, useState } from "react";
import { cryptoService } from "./services/cryptoService";
import "./global.css";
import styles from "./App.module.css";
import CoinsList from "./components/CoinsList";
import { CoinCardProps } from "./types";

export const App = () => {
  const [data, setData] = useState<CoinCardProps[]>([]);

  useEffect(() => {
    const fetchCrypto = async () => {
      const data = await cryptoService();
      setData(data);
    };
    fetchCrypto();
  }, []);

  return (
    <div>
      <main className={styles.container}>
        <CoinsList data={data} />
      </main>
    </div>
  );
};
