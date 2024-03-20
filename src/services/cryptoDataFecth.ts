import { CryptoDataProps } from "../types";

const options = {
  method: "GET",
};

export const cryptoDataFetch = async (
  cryptoId: string
): Promise<CryptoDataProps> => {
  return fetch(
    `https://api.coingecko.com/api/v3/coins/${cryptoId}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`,
    options
  )
    .then((response) => response.json())
    .then((data): CryptoDataProps => {
      return {
        name: data.name,
        image: data.image.large,
        marketCap: data.market_data.market_cap.usd,
        totalVolume: data.market_data.total_volume.usd,
        high24: data.market_data.high_24h.usd,
        low24: data.market_data.low_24h.usd,
      };
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};
