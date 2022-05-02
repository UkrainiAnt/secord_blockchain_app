import { useTransactionContext } from "hooks";
import { useEffect, useState } from "react";
import { sanityClient } from "lib";

const useTransactionHistory = () => {
  const { isLoading, currentAccount } = useTransactionContext();
  const [transactionHistory, setTransactionHistory] = useState([]);

  useEffect(() => {
    (async () => {
      if (!isLoading && currentAccount) {
        const query = `
          *[_type=="users" && _id == "${currentAccount}"] {
            "transactionList": transactions[]->{amount, toAddress, timestamp, txHash}|order(timestamp desc)[0..3]
          }
        `;

        const clientRes = await sanityClient.fetch(query);

        setTransactionHistory(clientRes?.[0]?.transactionList);
      }
    })();
  }, [isLoading, currentAccount]);
  return { transactionHistory, isLoading };
};

export default useTransactionHistory;
