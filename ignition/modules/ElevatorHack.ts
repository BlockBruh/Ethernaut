import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const elevatorAddress = "0x8C37cfb0a953042eAaA51576Ff714c641f31070f";

const ElevatorHackModule = buildModule("ElevatorHackModule", (m) => {
  const elevator = m.getParameter("_elevator", elevatorAddress);
  const elevatorHack = m.contract("ElevatorHack", [elevator]);

  return { elevatorHack };
});

export default ElevatorHackModule;
