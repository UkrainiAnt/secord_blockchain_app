import { FC, useEffect, useState } from "react";
import { ethers } from "ethers";
import { transactionAbi, transactionAddress } from "variables/transaction";
import { useDatabaseCallbacks } from ".";

import {
  TransactionContext,
  TransactionContextProps,
} from "./transaction.context";
import { useTransactionProviderVariables } from "./index";

import { PropsWithChildren } from "models";

let ethereum: any;

if (typeof window !== "undefined") {
  ethereum = window.ethereum;
}

const getEthereumContract = (metamask = ethereum) => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();

  const transactionContract = new ethers.Contract(
    transactionAddress,
    transactionAbi,
    signer
  );

  return transactionContract;
};

interface TransactionProviderProps extends PropsWithChildren {}

const TransactionProvider: FC<TransactionProviderProps> = (props) => {
  const { children } = props;
  const [currentAccount, setCurrentAccount] = useState<string>("");

  const { formData, handleChange, isLoading, setLoading } =
    useTransactionProviderVariables();

  const { saveTransaction } = useDatabaseCallbacks(currentAccount);

  const connectWallet = async (metamask = ethereum) => {
    if (!metamask) return alert("please install metamask!");

    const accounts = await metamask.request({
      method: "eth_requestAccounts",
    });

    setCurrentAccount(accounts[0]);

    console.log(accounts[0]);
  };

  const checkIfWalletSelected = async (metamask = ethereum) => {
    try {
      if (!metamask) return alert("Please install metamask");

      const accounts = await metamask.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sendTransaction = async (metamask = ethereum) => {
    if (!metamask) return alert("Please install metamask");

    const { addressTo, amount } = formData;
    const transactionContract = getEthereumContract();

    const parsedAmount = ethers.utils.parseEther(amount);

    setLoading(true);

    await metamask.request({
      method: "eth_sendTransaction",
      params: [
        {
          from: currentAccount,
          to: addressTo,
          gas: "0x7EF40",
          value: parsedAmount._hex,
        },
      ],
    });

    const transactionHash = await transactionContract.publishTransaction(
      addressTo,
      parsedAmount,
      `Transferring ETH ${parsedAmount} to ${addressTo}`,
      "TRANSFER"
    );

    await transactionHash.wait();

    await saveTransaction(
      transactionHash.hash,
      amount,
      currentAccount + "",
      addressTo
    );

    setLoading(false);
  };

  useEffect(() => {
    checkIfWalletSelected();
  }, [currentAccount]);

  const contextValue: TransactionContextProps = {
    handleChange,
    isLoading,
    formData,
    currentAccount,
    connectWallet,
    sendTransaction,
  };

  return (
    <TransactionContext.Provider value={contextValue}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
