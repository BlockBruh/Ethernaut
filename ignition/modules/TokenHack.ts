import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0xBFB43345B107D79B7f468Eb9153cFb7359edcAd1";

const TokenHackModule = buildModule("TokenHackModule", (m) => {
  const token = m.getParameter("_token", tokenAddress);
  const tokenHack = m.contract("TokenHack", [token]);

  return { tokenHack };
});

export default TokenHackModule;
