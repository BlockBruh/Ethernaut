import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const kingAddress = "0xaE6c9f994DCce7efc06c1AF8Be1dD7329D012390";

const KingHackModule = buildModule("KingHackModule", (m) => {
  const king = m.getParameter("_king", kingAddress);
  const kingContract = m.contractAt("King", kingAddress);
  const prize = m.staticCall(kingContract, "prize");
  const kingHack = m.contract("KingHack", [king], {
    value: prize,
  });

  return { kingHack };
});

export default KingHackModule;
