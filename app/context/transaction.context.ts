import { createContext } from "react";

export interface TransactionContextProps {}

export const TransactionContext = createContext<TransactionContextProps>({});
