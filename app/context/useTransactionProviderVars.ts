import { useState, ChangeEvent } from "react";
import { FormDataProps } from "./transaction.context";

const useTransactionProviderVars = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormDataProps>({
    addressTo: "",
    amount: "",
  });

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [target.name]: target.value }));
  };

  return { isLoading, setLoading, formData, handleChange };
};

export default useTransactionProviderVars;
