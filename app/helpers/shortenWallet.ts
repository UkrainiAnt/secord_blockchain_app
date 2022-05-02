const shortenWallet = (wallet: string) =>
  wallet.slice(0, 5) + "..." + wallet.slice(-4);

export default shortenWallet;
