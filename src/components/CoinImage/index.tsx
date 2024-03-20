import { CoinImageProps } from "../../types";
import styles from "./CoinImage.module.css";

export const CoinImage = ({
  src,
  width,
  marginLeftValue,
  borderRadiusValue,
}: CoinImageProps) => {
  return (
    <img
      className={styles.coinImage}
      src={src}
      style={{
        width: width,
        marginLeft: marginLeftValue,
        borderRadius: borderRadiusValue,
      }}
      alt="coin logo"
    />
  );
};
