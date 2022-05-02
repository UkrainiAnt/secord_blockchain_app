import type { NextPage } from "next";
import { Header, TransactionForm, TransactionHistory } from "components";

const Home: NextPage = () => {
  return (
    <div className="page_wrapper">
      <Header />

      <TransactionForm />

      <TransactionHistory />
    </div>
  );
};

export default Home;
