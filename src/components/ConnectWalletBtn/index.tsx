import { ConnectBtnProps } from "../../types";
import styles from "./ConnectWalletBtn.module.css";

const ConnectWalletBtn = ({ onClick, connected }: ConnectBtnProps) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {connected ? (
        <div>Connected</div>
      ) : (
        <div>
          Connect to <br /> MetaMask
        </div>
      )}
      <div>🦊</div>
    </button>
  );
};

export default ConnectWalletBtn;
