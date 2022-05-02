import styles from "./styles.module.css";

const style = {
  wrapper: `text-white h-96 w-72 flex flex-col justify-center items-center`,
  title: `font-semibold text-xl mb-12`,
};

const TransactionLoader = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>Transaction in progress...</div>
      <div className={styles.ldsRoller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default TransactionLoader;
