import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const telephoneAddress = '0x1427CE6A674b431595aF978450cd42C9e7d1f643';

const TelephoneHackModule = buildModule("TelephoneHackModule", (m) => {
    const telephone = m.getParameter("_telephone", telephoneAddress);
    const telephoneHack = m.contract("TelephoneHack", [telephone]);

    return { telephoneHack };
});

export default TelephoneHackModule;
