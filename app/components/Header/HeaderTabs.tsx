import { ReactNode, useState } from "react";
import { FC } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const HeaderTabs = () => {
  const [selectedItem, setSelectedItem] = useState<string>("Swap");

  const normalTabs = ["Swap", "Pool", "Vote"].map((item) => (
    <HeaderTab
      text={item}
      key={item}
      onClick={() => setSelectedItem(item)}
      selectedItem={selectedItem}
    />
  ));

  return (
    <div className="flex items-center bg-[#191B1F] rounded-3xl justify-center">
      {normalTabs}
      <HeaderTab
        text={
          <a
            className="flex items-center "
            href="https://uniswap.org/community"
          >
            Dashboard <FiArrowUpRight />
          </a>
        }
      />
    </div>
  );
};

export default HeaderTabs;

interface HeaderTabProps {
  onClick?: () => void;
  selectedItem?: string;
  text: string | ReactNode;
}

const HeaderTab: FC<HeaderTabProps> = (props) => {
  const { onClick = () => {}, selectedItem = "xx", text } = props;
  return (
    <div
      onClick={onClick}
      className={selectedItem === text ? "active_nav_item" : "nav_item"}
    >
      {text}
    </div>
  );
};
