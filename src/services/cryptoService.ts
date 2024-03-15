const options = {
  method: "GET",
};

export const cryptoService = async () => {
  return fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h&locale=en&precision=full`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
};
