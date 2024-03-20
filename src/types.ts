export type CoinCardProps = {
  id: string;
  name: string;
  image: string;
  current_price: string;
  symbol: string;
};

export type CoinList = {
  data: CoinCardProps[];
};

export type CoinImageProps = {
  src: string;
  width: string;
  marginLeftValue: string;
  borderRadiusValue: string;
};

export type CryptoDataComponentsProps = {
  title: string;
  titleColor: string;
  children: string;
};

export type CryptoDataProps = {
  name: string;
  image: string;
  marketCap: number;
  totalVolume: number;
  high24: number;
  low24: number;
};
