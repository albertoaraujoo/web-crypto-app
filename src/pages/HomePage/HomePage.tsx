import { useEffect, useState } from "react";

import "../../global.css";
import styles from "./HomePage.module.css";
import { CoinCardProps } from "../../types";
import CoinsList from "../../components/CoinsList";
import Wallet from "../../components/Wallet";
// import { top10MktCap } from "../../services/top10MktCap";

export const HomePage = () => {
  const [data, setData] = useState<CoinCardProps[]>([]);

  const fakeData = [
    {
      id: "bitcoin",
      symbol: "btc",
      name: "Bitcoin",
      image:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
      current_price: 67111.45949008189,
      market_cap: 1316953585834,
      market_cap_rank: 1,
      fully_diluted_valuation: 1406866203947,
      total_volume: 51693167417,
      high_24h: 68834,
      low_24h: 66605,
      price_change_24h: -1424.0371147058468,
      price_change_percentage_24h: -2.07781,
      market_cap_change_24h: -30223440845.96924,
      market_cap_change_percentage_24h: -2.24346,
      circulating_supply: 19657893,
      total_supply: 21000000,
      max_supply: 21000000,
      ath: 73738,
      ath_change_percentage: -9.14632,
      ath_date: "2024-03-14T07:10:36.635Z",
      atl: 67.81,
      atl_change_percentage: 98697.54717,
      atl_date: "2013-07-06T00:00:00.000Z",
      roi: null,
      last_updated: "2024-03-18T20:09:47.065Z",
      price_change_percentage_24h_in_currency: -2.077809580803952,
    },
    {
      id: "lido-staked-ether",
      symbol: "btc",
      name: "lido-staked-ether",
      image:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
      current_price: 67111.45949008189,
      market_cap: 1316953585834,
      market_cap_rank: 1,
      fully_diluted_valuation: 1406866203947,
      total_volume: 51693167417,
      high_24h: 68834,
      low_24h: 66605,
      price_change_24h: -1424.0371147058468,
      price_change_percentage_24h: -2.07781,
      market_cap_change_24h: -30223440845.96924,
      market_cap_change_percentage_24h: -2.24346,
      circulating_supply: 19657893,
      total_supply: 21000000,
      max_supply: 21000000,
      ath: 73738,
      ath_change_percentage: -9.14632,
      ath_date: "2024-03-14T07:10:36.635Z",
      atl: 67.81,
      atl_change_percentage: 98697.54717,
      atl_date: "2013-07-06T00:00:00.000Z",
      roi: null,
      last_updated: "2024-03-18T20:09:47.065Z",
      price_change_percentage_24h_in_currency: -2.077809580803952,
    },
  ];

  useEffect(() => {
    const fetchCrypto = async () => {
      // const data = await top10MktCap();
      setData(fakeData);
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
