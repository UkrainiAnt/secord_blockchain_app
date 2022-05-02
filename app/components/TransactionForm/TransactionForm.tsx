import Image from "next/image";
import { RiSettings3Fill } from "react-icons/ri";
import { AiOutlineDown } from "react-icons/ai";
import ethLogo from "assets/eth.png";
import { useTransactionContext } from "hooks";

import { customStyles, style } from "./styles";
import Modal from "react-modal";
import { TransactionLoader } from "components";

Modal.setAppElement("#__next");

const Form = () => {
  const { formData, handleChange, isLoading, sendTransaction } =
    useTransactionContext();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { addressTo, amount } = formData;

    if (!addressTo || !amount) return;

    await sendTransaction();
  };

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.formHeader}>
          <div>Swap</div>
          <div>
            <RiSettings3Fill />
          </div>
        </div>
        <div className={style.transferPropContainer}>
          <input
            type="text"
            className={style.transferPropInput}
            placeholder="0.0"
            value={formData.amount}
            name="amount"
            pattern="^[0-9]*[.,]?[0-9]*$"
            onChange={handleChange}
          />

          <div className={style.currencySelector}>
            <div className={style.currencySelectorContent}>
              <div className={style.currencySelectorIcon}>
                <Image src={ethLogo} alt="eth logo" height={20} width={20} />
              </div>
              <div className={style.currencySelectorTicker}>ETH</div>
              <AiOutlineDown className={style.currencySelectorArrow} />
            </div>
          </div>
        </div>

        <div className={style.transferPropContainer}>
          <input
            value={formData.addressTo}
            type="text"
            className={style.transferPropInput}
            placeholder="0x..."
            name="addressTo"
            onChange={handleChange}
          />
          <div className={style.currencySelector}></div>
        </div>
        <div onClick={(e) => handleSubmit(e)} className={style.confirmButton}>
          Confirm
        </div>
      </div>

      <Modal isOpen={isLoading} style={customStyles}>
        <TransactionLoader />
      </Modal>
    </div>
  );
};

export default Form;
