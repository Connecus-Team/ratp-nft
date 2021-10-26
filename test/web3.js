
const Web3 = require('web3');

// test smart contract
const init = async () =>{
  const web3 = new Web3(new Web3.providers.HttpProvider('https://data-seed-prebsc-1-s1.binance.org:8545'));

  const abi = [{'inputs': [{'internalType': 'address', 'name': '_vrfCoordinator', 'type': 'address'}, {'internalType': 'address', 'name': '_linkToken', 'type': 'address'}, {'internalType': 'bytes32', 'name': '_keyhash', 'type': 'bytes32'}], 'stateMutability': 'nonpayable', 'type': 'constructor'},
    {'anonymous': false, 'inputs': [{'indexed': true, 'internalType': 'address', 'name': 'owner', 'type': 'address'}, {'indexed': true, 'internalType': 'address', 'name': 'approved', 'type': 'address'}, {'indexed': true, 'internalType': 'uint256', 'name': 'tokenId', 'type': 'uint256'}], 'name': 'Approval', 'type': 'event'},
    {'anonymous': false, 'inputs': [{'indexed': true, 'internalType': 'address', 'name': 'owner', 'type': 'address'}, {'indexed': true, 'internalType': 'address', 'name': 'operator', 'type': 'address'}, {'indexed': false, 'internalType': 'bool', 'name': 'approved', 'type': 'bool'}], 'name': 'ApprovalForAll', 'type': 'event'},
    {'anonymous': false, 'inputs': [{'indexed': false, 'internalType': 'bytes32', 'name': 'requestId', 'type': 'bytes32'}, {'indexed': false, 'internalType': 'uint256', 'name': 'tokenId', 'type': 'uint256'}], 'name': 'CreatedColection', 'type': 'event'},
    {'anonymous': false, 'inputs': [{'indexed': true, 'internalType': 'address', 'name': 'from', 'type': 'address'}, {'indexed': true, 'internalType': 'address', 'name': 'to', 'type': 'address'}, {'indexed': true, 'internalType': 'uint256', 'name': 'tokenId', 'type': 'uint256'}], 'name': 'Transfer', 'type': 'event'},
    {'inputs': [{'internalType': 'address', 'name': 'to', 'type': 'address'}, {'internalType': 'uint256', 'name': 'tokenId', 'type': 'uint256'}], 'name': 'approve', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'},
    {'inputs': [{'internalType': 'address', 'name': 'owner', 'type': 'address'}], 'name': 'balanceOf', 'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}], 'stateMutability': 'view', 'type': 'function'},
    {'inputs': [], 'name': 'baseURI', 'outputs': [{'internalType': 'string', 'name': '', 'type': 'string'}], 'stateMutability': 'view', 'type': 'function'},
    {'inputs': [], 'name': 'counter', 'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}], 'stateMutability': 'view', 'type': 'function'},
    {'inputs': [{'internalType': 'string', 'name': 'tokenURI', 'type': 'string'}, {'internalType': 'string', 'name': 'productText', 'type': 'string'}], 'name': 'create', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'},
    {'inputs': [], 'name': 'fee', 'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}], 'stateMutability': 'view', 'type': 'function'},
    {'inputs': [{'internalType': 'uint256', 'name': 'tokenId', 'type': 'uint256'}], 'name': 'getApproved', 'outputs': [{'internalType': 'address', 'name': '', 'type': 'address'}], 'stateMutability': 'view', 'type': 'function'},
    {'inputs': [{'internalType': 'address', 'name': 'owner', 'type': 'address'}, {'internalType': 'address', 'name': 'operator', 'type': 'address'}], 'name': 'isApprovedForAll', 'outputs': [{'internalType': 'bool', 'name': '', 'type': 'bool'}], 'stateMutability': 'view', 'type': 'function'},
    {'inputs': [], 'name': 'keyHash', 'outputs': [{'internalType': 'bytes32', 'name': '', 'type': 'bytes32'}], 'stateMutability': 'view', 'type': 'function'},
    {'inputs': [], 'name': 'linkToken', 'outputs': [{'internalType': 'address', 'name': '', 'type': 'address'}], 'stateMutability': 'view', 'type': 'function'},
    {'inputs': [], 'name': 'name', 'outputs': [{'internalType': 'string', 'name': '', 'type': 'string'}], 'stateMutability': 'view', 'type': 'function'},
    {'inputs': [{'internalType': 'uint256', 'name': 'tokenId', 'type': 'uint256'}], 'name': 'ownerOf', 'outputs': [{'internalType': 'address', 'name': '', 'type': 'address'}], 'stateMutability': 'view', 'type': 'function'},
    {'inputs': [{'internalType': 'bytes32', 'name': '', 'type': 'bytes32'}], 'name': 'products', 'outputs': [{'internalType': 'string', 'name': '', 'type': 'string'}], 'stateMutability': 'view', 'type': 'function'},
    {'inputs': [{'internalType': 'bytes32', 'name': 'requestId', 'type': 'bytes32'}, {'internalType': 'uint256', 'name': 'randomness', 'type': 'uint256'}], 'name': 'rawFulfillRandomness', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'},
    {'inputs': [{'internalType': 'bytes32', 'name': '', 'type': 'bytes32'}], 'name': 'requestIdToSender', 'outputs': [{'internalType': 'address', 'name': '', 'type': 'address'}], 'stateMutability': 'view', 'type': 'function'},
    {'inputs': [{'internalType': 'bytes32', 'name': '', 'type': 'bytes32'}], 'name': 'requestIdToTokenId', 'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}], 'stateMutability': 'view', 'type': 'function'},
    {'inputs': [{'internalType': 'bytes32', 'name': '', 'type': 'bytes32'}], 'name': 'requestIdToTokenURI', 'outputs': [{'internalType': 'string', 'name': '', 'type': 'string'}], 'stateMutability': 'view', 'type': 'function'},
    {'inputs': [{'internalType': 'address', 'name': 'from', 'type': 'address'}, {'internalType': 'address', 'name': 'to', 'type': 'address'}, {'internalType': 'uint256', 'name': 'tokenId', 'type': 'uint256'}], 'name': 'safeTransferFrom', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'},
    {'inputs': [{'internalType': 'address', 'name': 'from', 'type': 'address'}, {'internalType': 'address', 'name': 'to', 'type': 'address'}, {'internalType': 'uint256', 'name': 'tokenId', 'type': 'uint256'}, {'internalType': 'bytes', 'name': '_data', 'type': 'bytes'}], 'name': 'safeTransferFrom', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'}, {'inputs': [{'internalType': 'address', 'name': 'operator', 'type': 'address'}, {'internalType': 'bool', 'name': 'approved', 'type': 'bool'}], 'name': 'setApprovalForAll', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'}, {'inputs': [{'internalType': 'bytes4', 'name': 'interfaceId', 'type': 'bytes4'}], 'name': 'supportsInterface', 'outputs': [{'internalType': 'bool', 'name': '', 'type': 'bool'}], 'stateMutability': 'view', 'type': 'function'}, {'inputs': [], 'name': 'symbol', 'outputs': [{'internalType': 'string', 'name': '', 'type': 'string'}], 'stateMutability': 'view', 'type': 'function'}, {'inputs': [{'internalType': 'uint256', 'name': 'index', 'type': 'uint256'}], 'name': 'tokenByIndex', 'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}], 'stateMutability': 'view', 'type': 'function'}, {'inputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}], 'name': 'tokenIdToGene', 'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}], 'stateMutability': 'view', 'type': 'function'}, {'inputs': [{'internalType': 'address', 'name': 'owner', 'type': 'address'}, {'internalType': 'uint256', 'name': 'index', 'type': 'uint256'}], 'name': 'tokenOfOwnerByIndex', 'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}], 'stateMutability': 'view', 'type': 'function'}, {'inputs': [{'internalType': 'uint256', 'name': 'tokenId', 'type': 'uint256'}], 'name': 'tokenURI', 'outputs': [{'internalType': 'string', 'name': '', 'type': 'string'}], 'stateMutability': 'view', 'type': 'function'}, {'inputs': [], 'name': 'totalSupply', 'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}], 'stateMutability': 'view', 'type': 'function'}, {'inputs': [{'internalType': 'address', 'name': 'from', 'type': 'address'}, {'internalType': 'address', 'name': 'to', 'type': 'address'}, {'internalType': 'uint256', 'name': 'tokenId', 'type': 'uint256'}], 'name': 'transferFrom', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'}, {'inputs': [], 'name': 'vrfCoordinator', 'outputs': [{'internalType': 'address', 'name': '', 'type': 'address'}], 'stateMutability': 'view', 'type': 'function'}];


  const address = '0x8bEDFf6315e415d549384E4518219bCB0d2Cb832';
  let contract = new web3.eth.Contract(abi, address);
  // console.log(contract);
  contract.methods.create('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_DxuIzwaufEjdPlEs-SGFgZQH0SGTDUtjFQ&usqp=CAU', '1 do sen').
      send({from: '0x4cf496524CE5fe537A04101E051703B808ffb65a'}).then((res) => {
        console.log(res);
      });

  // const result = await contract.methods.countFunc().call();
};
init();

// const selector = Web3.utils.keccak256('symbol()').slice(2, 10);
// web3.eth.getCode(address).then(function(bytecode) {
//   if (bytecode.includes(selector))
//   {
//     console.log('function is in the contract');
//   }
//   else {
//     console.log('function is not in the contract');
//   }
// });
