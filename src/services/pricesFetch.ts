const options = {
  method: "GET",
};

export const pricesFetch = async (cryptoId: string) => {
  return fetch(
    `https://api.coingecko.com/api/v3/coins/${cryptoId}/market_chart?vs_currency=usd&days=1&precision=full`,
    options
  )
    .then((response) => response.json())
    .then((data) => data.prices)
    .catch((err) => console.error(err));
};
