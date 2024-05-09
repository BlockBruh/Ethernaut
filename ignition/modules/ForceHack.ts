import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const forceAddress = "0x57553436b4e9d91F325EeF4FBe6bCd562E3e73e6";

const ForceHackModule = buildModule("ForceHackModule", (m) => {
  const force = m.getParameter("_force", forceAddress);
  const forceHack = m.contract("ForceHack", [force], { value: 1n });

  return { forceHack };
});

export default ForceHackModule;
