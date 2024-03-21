// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./CryptoPage.module.css";
// import { Chart } from "../../components/Chart";
// import { CoinImage } from "../../components/CoinImage";
// import { CryptoData } from "../../components/CryptoData";
// import { pricesFetch } from "../../services/pricesFetch";
// import { cryptoDataFetch } from "../../services/cryptoDataFecth";
// import { formatPrice } from "../../utils/formatPrice";
// import { CryptoDataProps } from "../../types";

export const CryptoPage = () => {
  const { cryptoId } = useParams<{ cryptoId: string }>();
  // const [prices, setPrices] = useState<number[][] | null>(null);
  // const [cryptoData, setCryptoData] = useState<CryptoDataProps>();

  // useEffect(() => {
  //   const fetchPrices = async () => {
  //     if (cryptoId) {
  //       const prices = await pricesFetch(cryptoId ?? "undefined");
  //       setPrices(prices);
  //       const cryptoData = await cryptoDataFetch(cryptoId ?? "undefined");
  //       setCryptoData(cryptoData);
  //       console.log(cryptoData);
  //     }
  //   };

  //   fetchPrices();
  // }, [cryptoId]);

  return (
    <div>
      <main className={styles.container}>
        <div>crypto: {cryptoId}</div>
        {/* {cryptoData && (
          <>
            <CoinImage
              src={cryptoData.image}
              width="8rem"
              marginLeftValue="0"
              borderRadiusValue="4rem"
            />

            <h1 className={styles.title}>{cryptoData.name}</h1>
            <CryptoData
              title="Market Volume"
              children={formatPrice(cryptoData.totalVolume)}
              titleColor="var(--gray-400)"
            />

            <CryptoData
              title="Mkt Cap"
              children={formatPrice(cryptoData.marketCap)}
              titleColor="var(--gray-400)"
            />
            <CryptoData
              title="High"
              children={String(cryptoData.high24)}
              titleColor="var(--green-500)"
            />
            <CryptoData
              title="Low"
              children={String(cryptoData.low24)}
              titleColor="var(--red-500)"
            />

            <Chart prices={prices} />
          </>
        )} */}
      </main>
    </div>
  );
};
