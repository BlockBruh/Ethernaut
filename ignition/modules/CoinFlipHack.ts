import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const coinFlipAddress = '0xa2e5b6A6Dd98097f1dff3B4bd500362B7134c38B';

const CoinFlipHackModule = buildModule("CoinFlipHackModule", (m) => {
    const coinFlip = m.getParameter("coinFlip", coinFlipAddress);
    const coinFlipHack = m.contract("CoinFlipHack", [coinFlip]);

    return { coinFlipHack };
});

export default CoinFlipHackModule;
