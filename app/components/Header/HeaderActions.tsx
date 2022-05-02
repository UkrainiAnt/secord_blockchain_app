import Image from "next/image";
import { FC } from "react";
import ethLogo from "assets/eth.png";
import { AiOutlineDown, AiOutlineMore } from "react-icons/ai";
import { shortenWallet } from "helpers";
import { useTransactionContext } from "hooks";

const HeaderActions = () => {
  return (
    <div className="flex items-center ">
      <SelectBilling />
      <ConnectButton />

      <div className="button button_icon_container w-[40px] h-[40px] rounded-lg">
        <AiOutlineMore size={30} />
      </div>
    </div>
  );
};

export default HeaderActions;

const SelectBilling: FC = (props) => {
  return (
    <div className="flex p-2 button items-center gap-1 nav_item">
      <Image src={ethLogo} width={25} height={25} />

      <span>Ether</span>

      <div className="button_icon_container">
        <AiOutlineDown />
      </div>
    </div>
  );
};

const ConnectButton: FC = () => {
  const { currentAccount, connectWallet } = useTransactionContext();

  return (
    <div className="button p-2">
      {currentAccount ? (
        <div
          onClick={() => connectWallet()}
          className={"button_accent whitespace-nowrap p-1 rounded-lg"}
        >
          {shortenWallet(currentAccount)}
        </div>
      ) : (
        <div
          onClick={() => connectWallet()}
          className={"button_accent whitespace-nowrap p-1 rounded-lg"}
        >
          Connect Wallet
        </div>
      )}
    </div>
  );
};
