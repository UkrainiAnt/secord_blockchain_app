import { style } from "./styles";
import Image from "next/image";
import ethLogo from "assets/ethCurrency.png";
import { FiArrowUpRight } from "react-icons/fi";
import { FC } from "react";

interface HistoryItemProps {
  transaction: any;
}

const HistoryItem: FC<HistoryItemProps> = (props) => {
  const { transaction } = props;

  return (
    <div className={style.txHistoryItem}>
      <div className={style.txDetails}>
        <Image src={ethLogo} height={20} width={15} alt="eth" />{" "}
        {transaction.amount} Ξ sent to{" "}
        <span className={style.toAddress}>
          {transaction.toAddress.substring(0, 6)}...
        </span>
      </div>{" "}
      on{" "}
      <div className={style.txTimestamp}>
        {new Date(transaction.timestamp).toLocaleString("en-US", {
          timeZone: "PST",
          hour12: true,
          timeStyle: "short",
          dateStyle: "long",
        })}
      </div>
      <div className={style.etherscanLink}>
        <a
          href={`https://robsten.etherscan.io/tx/${transaction.txHash}`}
          target="_blank"
          rel="noreferrer"
          className={style.etherscanLink}
        >
          View on Etherscan
          <FiArrowUpRight />
        </a>
      </div>
    </div>
  );
};

export default HistoryItem;
