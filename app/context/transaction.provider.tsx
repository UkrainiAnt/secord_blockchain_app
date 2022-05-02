import { FC } from "react";

import {
  TransactionContext,
  TransactionContextProps,
} from "./transaction.context";

import { PropsWithChildren } from "models";

interface TransactionProviderProps extends PropsWithChildren {}

const TransactionProvider: FC<TransactionProviderProps> = (props) => {
  const { children } = props;

  const contextValue: TransactionContextProps = {};
  return (
    <TransactionContext.Provider value={contextValue}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
