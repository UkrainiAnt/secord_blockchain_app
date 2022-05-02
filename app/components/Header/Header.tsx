import { HeaderActions, HeaderTabs } from ".";
import appLogo from "assets/uniswap.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center p-5">
      <Image src={appLogo} width={55} height={55} />

      <div className="w-full flex items-center justify-center ml-28">
        <HeaderTabs />
      </div>

      <HeaderActions />
    </div>
  );
};

export default Header;
