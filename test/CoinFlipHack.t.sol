// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Test.sol";
import {CoinFlip} from "../contracts/CoinFlip.sol";
import {CoinFlipHack} from "../contracts/CoinFlipHack.sol";

contract CoinFlipHackTest is Test {
    CoinFlip public coinFlip;

    function setUp() public {
        coinFlip = new CoinFlip();
    }
}