import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const reentranceAddress = "0xb90E52EB4Bd199e451e508C41FD8A7Ede4Dc5eA6";

const ReentranceHackModule = buildModule("ReentranceHackModule", (m) => {
  const reentrance = m.getParameter("_target", reentranceAddress);
  const reentranceHack = m.contract("ReentranceHack", [reentrance]);

  return { reentranceHack };
});

export default ReentranceHackModule;
