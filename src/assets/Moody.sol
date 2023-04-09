// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

// if I were to add public here I could avoid creating the second function,
// but forgor how to implement it in the fronend
contract MoodyContraction {
    enum MoodType {
        Moody,
        Happy,
        Depressed,
        Exited,
        Stressed,
        Gratefull,
        Joyfull,
        Inspired,
        Furious,
        Focused,
        Productive
    }

    mapping(address => MoodType) public userToMood;

    function setMood(MoodType _mood) public {
        userToMood[msg.sender] = _mood;
    }

    function getMood() public view returns (MoodType) {
        return userToMood[msg.sender];
    }
}
