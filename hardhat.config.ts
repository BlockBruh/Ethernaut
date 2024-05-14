import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-foundry";

const accountMnemonic = process.env.KH_MNEMONIC || "";

const config: HardhatUserConfig = {
  solidity: { compilers: [{ version: "0.8.24" }, { version: "0.6.12" }] },
  networks: {
    hardhat: {
      forking: {
        url: "https://ethereum-sepolia-rpc.publicnode.com",
      },
      accounts: {
        mnemonic: accountMnemonic,
      },
      chainId: 11155111,
      gas: "auto",
      gasMultiplier: 1,
    },
    localhost: {
      forking: {
        url: "https://ethereum-sepolia-rpc.publicnode.com",
      },
      accounts: {
        mnemonic: accountMnemonic,
      },
      chainId: 11155111,
      gas: "auto",
      gasMultiplier: 1,
    },
    sepolia: {
      url: "https://ethereum-sepolia-rpc.publicnode.com",
      accounts: {
        mnemonic: accountMnemonic,
      },
      chainId: 11155111,
      gas: "auto",
      gasMultiplier: 1,
    },
  },
};

export default config;
