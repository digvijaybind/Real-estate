import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { FortmaticConnector } from "@web3-react/fortmatic-connector";

const INFURA_KEY = process.env.REACT_APP_INFURA_KEY;

const NETWORK_URLS = {
  1: `https://mainnet.infura.io/v3/${INFURA_KEY}`,
  3: `https://ropsten.infura.io/v3/${INFURA_KEY}`,
};

const RPC_URLS = {
  1: process.env.REACT_APP_RPC_URL_1,
  3: process.env.REACT_APP_RPC_URL_3,
};

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 1337, 80001],
});

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1] },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

export const walletlink = new WalletLinkConnector({
  url: NETWORK_URLS[3],
  appname: "real=estate",
});

export const formatic = new FortmaticConnector({
  apiKey: process.env.REACT_API_KEY,
  chainId: 3,
});
