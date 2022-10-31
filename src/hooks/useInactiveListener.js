import { useEffect } from "react";

import { useWeb3React } from "@web3-react/core";

import { injected } from "../utils/connectors";

const useInactiveListener = (suppress) => {
  const { active, error, activate } = useWeb3React();

  useEffect(() => {
    const { ethereum } = window;
    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleChainChanged = () => {
        activate(injected, undefined, true).catch((error) => {
          console.log("failed  to activate after chain changed", error);
        });
      };

      const handleAccountsChanged = (accounts) => {
        if (accounts.length > 0) {
          activate(injected, undefined, true).catch((error) => {
            console.log("failed to activate after accounts chnages", error);
          });
        }
      };

      ethereum.on("chainChanged", handleAccountsChanged);
      ethereum.on("accountchanged", handleChainChanged);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener("chainChanged", handleChainChanged);
          ethereum.removeListener("accountsChanged", handleAccountsChanged);
        }
      };
    }

    return undefiend;
  }, [active, error, suppress, activate]);
};

export default useInactiveListener;
