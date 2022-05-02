import { ChangeEvent, createContext } from "react";

export interface FormDataProps {
  amount: "";
  addressTo: "";
}

export interface TransactionContextProps {
  isLoading: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  formData: FormDataProps;
  currentAccount: string;
  connectWallet: () => void;
  sendTransaction: () => void;
}

export const TransactionContext = createContext<TransactionContextProps>({
  formData: {
    addressTo: "",
    amount: "",
  },
  handleChange: (e: ChangeEvent<HTMLInputElement>) => {},
  isLoading: false,
  connectWallet: () => {},
  currentAccount: "",
  sendTransaction: () => {},
});
