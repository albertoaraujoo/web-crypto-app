import styles from "./ErrorPage.module.css";

export const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <h1>
        An error occurred, it may be due to the number of requests to the
        CoinGecko API 😖, please try again in a few minutes. 😀
      </h1>
    </div>
  );
};
