import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import BscNetworks from "./BscNetworks";
import EthereumNetworks from "./EthereumNetworks";

const networks = {
  ethereum: {
    chainId: `0x${Number(1).toString(16)}`,
  },
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: "Binance Smart Chain Mainnet",
    rpcUrls: [
      "https://bsc-dataseed1.binance.org",
      "https://bsc-dataseed2.binance.org",
      "https://bsc-dataseed3.binance.org",
      "https://bsc-dataseed4.binance.org",
      "https://bsc-dataseed1.defibit.io",
      "https://bsc-dataseed2.defibit.io",
      "https://bsc-dataseed3.defibit.io",
      "https://bsc-dataseed4.defibit.io",
      "https://bsc-dataseed1.ninicoin.io",
      "https://bsc-dataseed2.ninicoin.io",
      "https://bsc-dataseed3.ninicoin.io",
      "https://bsc-dataseed4.ninicoin.io",
      "wss://bsc-ws-node.nariox.org",
    ],
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18,
    },
    blockExplorerUrls: ["https://bscscan.com"],
  },
  ropsten: {
    chainId: `0x${Number(3).toString(16)}`,
  },
  bscTestnet: {
    chainName: "Binance Smart Chain Testnet",
    rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "tBNB",
      decimals: 18,
    },
    chainId: `0x${Number(97).toString(16)}`,
    blockExplorerUrls: ["https://testnet.bscscan.com"],
  },
};

const Chain = () => {
  const [ethActive, setEthActive] = useState(true);
  const [bscActive, setBscActive] = useState(false);
  const [isError, setIsError] = useState(false);

  const closeModalHandler = () => {
    setIsError(false);
  };

  const ethSelectedHandler = async () => {
    try {
      if (!window.ethereum) throw new Error("Please install MetaMask!");
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [
          {
            ...networks.ethereum,
          },
        ],
      });
      setBscActive(false);
      setEthActive(true);
    } catch (error) {
      setIsError(error);
    }
  };

  const bscSelectedHandler = async () => {
    try {
      if (!window.ethereum) throw new Error("Please install MetaMask!");
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...networks.bsc,
          },
        ],
      });
      setEthActive(false);
      setBscActive(true);
    } catch (error) {
      setIsError(error);
    }
  };

  return (
    <div className="w-11/12 mx-auto mt-10 flex items-center justify-center h-12">
      <div className="w-full h-full flex items-center justify-between md:w-4/6">
        {/* Chains */}
        <div className="w-40 md:w-52 h-full flex items-center justify-evenly border-2 border-gray-600 rounded-md">
          <input
            type="radio"
            name="chain"
            value="Ethereum"
            className="hidden"
          />
          <label
            htmlFor="ethereum"
            className={`${
              ethActive ? "bg-neutral-900" : ""
            } text-stone-300 w-1/2 text-center h-full rounded-md flex items-center justify-center cursor-pointer text-sm`}
            onClick={ethSelectedHandler}
          >
            Ethereum
          </label>

          <input type="radio" name="chain" value="BSC" className="hidden" />
          <label
            htmlFor="BSC"
            className={`${
              bscActive ? "bg-neutral-900" : ""
            } text-stone-300 w-1/2 text-center h-full rounded-md flex items-center justify-center cursor-pointer text-sm`}
            onClick={bscSelectedHandler}
          >
            BSC
          </label>
        </div>

        {/* Networks */}
        {ethActive && <EthereumNetworks testnetConfig={networks.ropsten} mainnetConfig={networks.ethereum}/>}
        {bscActive && <BscNetworks testnetConfig={networks.bscTestnet} mainnetConfig={networks.bsc} />}
      </div>
      <ErrorModal err={isError} onCloseModal={closeModalHandler} />
    </div>
  );
};

export default Chain;
