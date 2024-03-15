import { useEffect, useState } from "react";
import { cryptoService } from "./services/cryptoService";
import "./global.css";
import styles from "./App.module.css";
import CoinsList from "./components/CoinsList";

export const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchCrypto = async () => {
      const data = await cryptoService();
      setData(data);
      console.log(data);
    };
    fetchCrypto();
  }, []);

  return (
    <div className={styles.container}>
      <main>
        <CoinsList />
      </main>
    </div>
  );
};
