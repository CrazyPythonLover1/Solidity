pragma solidity ^0.4.17;

contract Campaign {
    
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    // address[] public approvers;
    mapping(address => bool) public approvers;
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    function Campaign(uint minimum) public {
        manager = msg.sender;
        minimumContribution = minimum;
    }
    
    function contribute() public payable {
        require(msg.value > minimumContribution);
        
        // approvers.push(msg.sender); // it is not a array now
        approvers[msg.sender] = true;
    }
      
    function createRequest(string description, uint value, address recipient) 
    public restricted {
        Request memory    newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });
        
        requests.push(newRequest);
    }
    
}

// poor approach for voting system 
// contract Campaign { 
//     function approveRequest(Request request) public {
//         // Make sure person calling this function has donated 
//         bool isApprover = false;
//         for (uint i = 0; i< approvers.length; i++) {
//             if (approvers[i] == msg.sender) {
//                 isApprover = true;
//             }
//         }
//         require(isApprover);
        
//         // Make sure person calling this function hasn't voted before
//         for (uint i = 0; i < request.approvers.length; i++) {
//             require(request.approvers[i] != msg.sender);
//         }
//     }
// }