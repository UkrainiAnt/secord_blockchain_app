import { useContext } from "react";
import {
  TransactionContext,
  TransactionContextProps,
} from "context/transaction.context";

const useTransactionContext = () => {
  return useContext<TransactionContextProps>(TransactionContext);
};

export default useTransactionContext;
