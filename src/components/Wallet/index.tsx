import { useState } from "react";
import ConnectWalletBtn from "../ConnectWalletBtn";
import styles from "./Wallet.module.css";
import Web3 from "web3";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  setAccount,
  setBalance,
} from "../../features/account-and-balance/account-and-balance-slice";
import { setConnected } from "../../features/connected/connectedSlice";

const Wallet = () => {
  const balance = useSelector((state: RootState) => state.balance);
  const connected = useSelector((state: RootState) => state.connected);

  const dispatch = useDispatch();

  const [web3, setWeb3] = useState<Web3 | null>(null);

  const connectToMetamask = async () => {
    if (window.ethereum) {
      try {
        const web3Instance = new Web3(window.ethereum);
        await window.ethereum.enable();
        const accounts = await web3Instance.eth.getAccounts();
        dispatch(setConnected(true));
        setWeb3(web3Instance);
        dispatch(setAccount(accounts[0]));
        updateBalance(web3Instance, accounts[0]);
      } catch (error) {
        console.error("Error connecting to Metamask:", error);
      }
    } else {
      console.error("Metamask not detected in the browser window.");
    }
  };

  const updateBalance = async (web3Instance: Web3, account: string) => {
    try {
      const balance = await web3Instance.eth.getBalance(account);
      const balanceInEther = web3Instance.utils.fromWei(balance, "ether");
      dispatch(setBalance(balanceInEther));
    } catch (error) {
      console.error("Error fetching the balance:", error);
    }
  };

  return (
    <div
      className={styles.container}
      style={{
        border: connected
          ? "solid 1px var(--green-500)"
          : "solid 1px var(--blue-200)",
      }}
    >
      <h3 style={{ color: connected ? "var(--green-500" : "var(--blue-200" }}>
        METAMASK WALLET
      </h3>
      <div className={styles.textAndButton}>
        {!connected ? (
          <p className={styles.notConnected}>
            Connect to see <br /> your ETH balance here
          </p>
        ) : (
          <p className={styles.balance}>
            Your ETH Balance: <br /> <span>{balance} ETH</span>
          </p>
        )}
        <ConnectWalletBtn onClick={connectToMetamask} connected={connected} />
      </div>
    </div>
  );
};

export default Wallet;
