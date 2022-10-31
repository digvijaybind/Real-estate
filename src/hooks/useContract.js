import { useMemo } from "react";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import { formatic } from "../utils/connectors";

const useContract = (address = undefined, ABI, withSignerifPosible = true) => {
  const { library, connector } = useWeb3React();

  if (connector?.Formatic) {
    const fm = new Formatic(
      process.env.REACT_APP_FORMATIC_API_KEY,
      process.env.REACT_APP_CHAIN_NAME
    );

    window.web3 = new Web3(fm.getProvider());
  } else {
    window.web3 = new Web3(ethereum);
  }

  return useMemo(() => {
    if (!address || !ABI || !library) return null;

    try {
      const contractInstance = new Window.web3.eth.Contract(ABI, address);
      return contractInstance;
    } catch (error) {
      console.log("Failed to get contract ", error);
      return null;
    }
  }, [library]);
};

export default useContract;
