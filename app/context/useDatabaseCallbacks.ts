import { sanityClient } from "lib";
import { useEffect } from "react";

const useDatabaseCallbacks = (currentAccount: string) => {
  const saveTransaction = async (
    txHash: string,
    amount: string,
    currentAccount: string,
    toAddress: string
  ) => {
    const newTransaction = {
      _type: "transactions",
      _id: txHash,
      fromAddress: currentAccount,
      toAddress,
      timeStamp: new Date(Date.now()).toISOString(),
      txHash,
      amount: parseFloat(amount),
    };

    await sanityClient.createIfNotExists(newTransaction);

    await sanityClient
      .patch(currentAccount + "")
      .setIfMissing({ transactions: [] })
      .insert("after", "transactions[-1]", [
        {
          _key: txHash,
          _ref: txHash,
          _type: "reference",
        },
      ])
      .commit();
  };

  useEffect(() => {
    if (!currentAccount) return;

    (async () => {
      const userDoc = {
        _type: "users",
        _id: currentAccount,
        userName: "Unnamed",
        address: currentAccount,
      };

      await sanityClient.createIfNotExists(userDoc);
    })();
  }, [currentAccount]);

  return { saveTransaction };
};

export default useDatabaseCallbacks;
