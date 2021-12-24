// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

contract Election {
    uint256 public candidateCount = 0;

    struct Candidate {
        uint256 id;
        string name;
        uint256 voteCount;
    }

    event electionUpdate(uint256 id, string name, uint256 voteCount);

    mapping(uint256 => Candidate) public candidate;
    mapping(address => bool) public votecheck;

    function addCandidate(string memory _name) private {
        candidateCount++;
        candidate[candidateCount] = Candidate(candidateCount, _name, 0);
    }

    constructor() {
        addCandidate("modiji");
        addCandidate("rahulji");
    }

    function vote(uint256 candidateId) public {
        require(!votecheck[msg.sender], "Already Voted");
        require(
            candidateId > 0 && candidateId <= candidateCount,
            "candidate does not exist"
        );

        candidate[candidateId].voteCount++;
        votecheck[msg.sender] = true;
        emit electionUpdate(
            candidateId,
            candidate[candidateId].name,
            candidate[candidateId].voteCount
        );
    }
}
