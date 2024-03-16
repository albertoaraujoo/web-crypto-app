export type CoinCardProps = {
  id: string;
  name: string;
  image: string;
  price: number;
  symbol: string;
};

export type CoinList = {
  data: CoinCardProps[];
};
