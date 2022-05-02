import { useTransactionHistory } from "hooks";
import { TransactionHistoryItem } from ".";
import { style } from "./styles";

const TransactionHistory = () => {
  const { isLoading, transactionHistory } = useTransactionHistory();

  const HistoryItems = (transactionHistory || []).map((item, index: number) => (
    <TransactionHistoryItem key={index} transaction={item} />
  ));

  return (
    <div style={{ overflow: "hidden" }} className={style.wrapper}>
      {!isLoading && HistoryItems}
    </div>
  );
};

export default TransactionHistory;
