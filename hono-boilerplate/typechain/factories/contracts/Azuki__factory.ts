/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Azuki, AzukiInterface } from "../../contracts/Azuki";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_SUPPLY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "salePrice",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "royaltyAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "saleIsActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "customBaseURI_",
        type: "string",
      },
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "saleIsActive_",
        type: "bool",
      },
    ],
    name: "setSaleIsActive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600b805460ff60a01b1916600160a01b1790553480156200002457600080fd5b506040805180820182526005815264417a756b6960d81b602080830191825283518085019094526003845262415a4b60e81b9084015281519192916200006d91600091620000ee565b50805162000083906001906020840190620000ee565b50506001600a555062000096336200009c565b620001d1565b600b80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620000fc9062000194565b90600052602060002090601f0160209004810192826200012057600085556200016b565b82601f106200013b57805160ff19168380011785556200016b565b828001600101855582156200016b579182015b828111156200016b5782518255916020019190600101906200014e565b50620001799291506200017d565b5090565b5b808211156200017957600081556001016200017e565b600181811c90821680620001a957607f821691505b60208210811415620001cb57634e487b7160e01b600052602260045260246000fd5b50919050565b611f1880620001e16000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c806355f804b3116100de578063a0712d6811610097578063c87b56dd11610071578063c87b56dd14610357578063e985e9c51461036a578063eb8d2444146103a6578063f2fde38b146103ba57600080fd5b8063a0712d681461031e578063a22cb46514610331578063b88d4fde1461034457600080fd5b806355f804b3146102c45780636352211e146102d757806370a08231146102ea578063715018a6146102fd5780638da5cb5b1461030557806395d89b411461031657600080fd5b806323b872dd1161014b57806332cb6b0c1161012557806332cb6b0c1461028d5780633ccfd60b1461029657806342842e0e1461029e5780634f6ccce7146102b157600080fd5b806323b872dd146102355780632a55205a146102485780632f745c591461027a57600080fd5b806301ffc9a71461019357806302c88989146101bb57806306fdde03146101d0578063081812fc146101e5578063095ea7b31461021057806318160ddd14610223575b600080fd5b6101a66101a1366004611924565b6103cd565b60405190151581526020015b60405180910390f35b6101ce6101c9366004611956565b6103f8565b005b6101d8610449565b6040516101b291906119c9565b6101f86101f33660046119dc565b6104db565b6040516001600160a01b0390911681526020016101b2565b6101ce61021e366004611a0c565b610570565b6008545b6040519081526020016101b2565b6101ce610243366004611a36565b610686565b61025b610256366004611a72565b6106b7565b604080516001600160a01b0390931683526020830191909152016101b2565b610227610288366004611a0c565b6106df565b6102276107d081565b6101ce610775565b6101ce6102ac366004611a36565b6107f1565b6102276102bf3660046119dc565b61080c565b6101ce6102d2366004611b20565b61089f565b6101f86102e53660046119dc565b6108e0565b6102276102f8366004611b69565b610957565b6101ce6109de565b600b546001600160a01b03166101f8565b6101d8610a14565b6101ce61032c3660046119dc565b610a23565b6101ce61033f366004611b84565b610b1e565b6101ce610352366004611bb7565b610b29565b6101d86103653660046119dc565b610b61565b6101a6610378366004611c33565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b600b546101a690600160a01b900460ff1681565b6101ce6103c8366004611b69565b610c3c565b60006001600160e01b0319821663152a902d60e11b14806103f257506103f282610cd7565b92915050565b600b546001600160a01b0316331461042b5760405162461bcd60e51b815260040161042290611c5d565b60405180910390fd5b600b8054911515600160a01b0260ff60a01b19909216919091179055565b60606000805461045890611c92565b80601f016020809104026020016040519081016040528092919081815260200182805461048490611c92565b80156104d15780601f106104a6576101008083540402835291602001916104d1565b820191906000526020600020905b8154815290600101906020018083116104b457829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166105545760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610422565b506000908152600460205260409020546001600160a01b031690565b600061057b826108e0565b9050806001600160a01b0316836001600160a01b031614156105e95760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610422565b336001600160a01b038216148061060557506106058133610378565b6106775760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610422565b6106818383610cfc565b505050565b6106903382610d6a565b6106ac5760405162461bcd60e51b815260040161042290611ccd565b610681838383610e61565b600080306127106106ca856103e8611d34565b6106d49190611d69565b915091509250929050565b60006106ea83610957565b821061074c5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b6064820152608401610422565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b6002600a5414156107c85760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610422565b6002600a55476107e96107e3600b546001600160a01b031690565b82611008565b506001600a55565b61068183838360405180602001604052806000815250610b29565b600061081760085490565b821061087a5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b6064820152608401610422565b6008828154811061088d5761088d611d7d565b90600052602060002001549050919050565b600b546001600160a01b031633146108c95760405162461bcd60e51b815260040161042290611c5d565b80516108dc90600c906020840190611875565b5050565b6000818152600260205260408120546001600160a01b0316806103f25760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610422565b60006001600160a01b0382166109c25760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610422565b506001600160a01b031660009081526003602052604090205490565b600b546001600160a01b03163314610a085760405162461bcd60e51b815260040161042290611c5d565b610a126000611121565b565b60606001805461045890611c92565b6002600a541415610a765760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610422565b6002600a55600b54600160a01b900460ff16610ac65760405162461bcd60e51b815260206004820152600f60248201526e53616c65206e6f742061637469766560881b6044820152606401610422565b6107d0610ad260085490565b10610b145760405162461bcd60e51b815260206004820152601260248201527145786365656473206d617820737570706c7960701b6044820152606401610422565b6107e93382611173565b6108dc3383836112c1565b610b333383610d6a565b610b4f5760405162461bcd60e51b815260040161042290611ccd565b610b5b84848484611390565b50505050565b6000818152600260205260409020546060906001600160a01b0316610be05760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610422565b6000610bea6113c3565b90506000815111610c0a5760405180602001604052806000815250610c35565b80610c14846113d2565b604051602001610c25929190611d93565b6040516020818303038152906040525b9392505050565b600b546001600160a01b03163314610c665760405162461bcd60e51b815260040161042290611c5d565b6001600160a01b038116610ccb5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610422565b610cd481611121565b50565b60006001600160e01b0319821663780e9d6360e01b14806103f257506103f2826114d0565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610d31826108e0565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b0316610de35760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610422565b6000610dee836108e0565b9050806001600160a01b0316846001600160a01b03161480610e295750836001600160a01b0316610e1e846104db565b6001600160a01b0316145b80610e5957506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b0316610e74826108e0565b6001600160a01b031614610ed85760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610422565b6001600160a01b038216610f3a5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610422565b610f45838383611520565b610f50600082610cfc565b6001600160a01b0383166000908152600360205260408120805460019290610f79908490611dc2565b90915550506001600160a01b0382166000908152600360205260408120805460019290610fa7908490611dd9565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b804710156110585760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152606401610422565b6000826001600160a01b03168260405160006040518083038185875af1925050503d80600081146110a5576040519150601f19603f3d011682016040523d82523d6000602084013e6110aa565b606091505b50509050806106815760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152608401610422565b600b80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0382166111c95760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610422565b6000818152600260205260409020546001600160a01b03161561122e5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610422565b61123a60008383611520565b6001600160a01b0382166000908152600360205260408120805460019290611263908490611dd9565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b816001600160a01b0316836001600160a01b031614156113235760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610422565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b61139b848484610e61565b6113a7848484846115d8565b610b5b5760405162461bcd60e51b815260040161042290611df1565b6060600c805461045890611c92565b6060816113f65750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611420578061140a81611e43565b91506114199050600a83611d69565b91506113fa565b60008167ffffffffffffffff81111561143b5761143b611a94565b6040519080825280601f01601f191660200182016040528015611465576020820181803683370190505b5090505b8415610e595761147a600183611dc2565b9150611487600a86611e5e565b611492906030611dd9565b60f81b8183815181106114a7576114a7611d7d565b60200101906001600160f81b031916908160001a9053506114c9600a86611d69565b9450611469565b60006001600160e01b031982166380ac58cd60e01b148061150157506001600160e01b03198216635b5e139f60e01b145b806103f257506301ffc9a760e01b6001600160e01b03198316146103f2565b6001600160a01b03831661157b5761157681600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b61159e565b816001600160a01b0316836001600160a01b03161461159e5761159e83826116e5565b6001600160a01b0382166115b55761068181611782565b826001600160a01b0316826001600160a01b031614610681576106818282611831565b60006001600160a01b0384163b156116da57604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061161c903390899088908890600401611e72565b602060405180830381600087803b15801561163657600080fd5b505af1925050508015611666575060408051601f3d908101601f1916820190925261166391810190611eaf565b60015b6116c0573d808015611694576040519150601f19603f3d011682016040523d82523d6000602084013e611699565b606091505b5080516116b85760405162461bcd60e51b815260040161042290611df1565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610e59565b506001949350505050565b600060016116f284610957565b6116fc9190611dc2565b60008381526007602052604090205490915080821461174f576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b60085460009061179490600190611dc2565b600083815260096020526040812054600880549394509092849081106117bc576117bc611d7d565b9060005260206000200154905080600883815481106117dd576117dd611d7d565b600091825260208083209091019290925582815260099091526040808220849055858252812055600880548061181557611815611ecc565b6001900381819060005260206000200160009055905550505050565b600061183c83610957565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b82805461188190611c92565b90600052602060002090601f0160209004810192826118a357600085556118e9565b82601f106118bc57805160ff19168380011785556118e9565b828001600101855582156118e9579182015b828111156118e95782518255916020019190600101906118ce565b506118f59291506118f9565b5090565b5b808211156118f557600081556001016118fa565b6001600160e01b031981168114610cd457600080fd5b60006020828403121561193657600080fd5b8135610c358161190e565b8035801515811461195157600080fd5b919050565b60006020828403121561196857600080fd5b610c3582611941565b60005b8381101561198c578181015183820152602001611974565b83811115610b5b5750506000910152565b600081518084526119b5816020860160208601611971565b601f01601f19169290920160200192915050565b602081526000610c35602083018461199d565b6000602082840312156119ee57600080fd5b5035919050565b80356001600160a01b038116811461195157600080fd5b60008060408385031215611a1f57600080fd5b611a28836119f5565b946020939093013593505050565b600080600060608486031215611a4b57600080fd5b611a54846119f5565b9250611a62602085016119f5565b9150604084013590509250925092565b60008060408385031215611a8557600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115611ac557611ac5611a94565b604051601f8501601f19908116603f01168101908282118183101715611aed57611aed611a94565b81604052809350858152868686011115611b0657600080fd5b858560208301376000602087830101525050509392505050565b600060208284031215611b3257600080fd5b813567ffffffffffffffff811115611b4957600080fd5b8201601f81018413611b5a57600080fd5b610e5984823560208401611aaa565b600060208284031215611b7b57600080fd5b610c35826119f5565b60008060408385031215611b9757600080fd5b611ba0836119f5565b9150611bae60208401611941565b90509250929050565b60008060008060808587031215611bcd57600080fd5b611bd6856119f5565b9350611be4602086016119f5565b925060408501359150606085013567ffffffffffffffff811115611c0757600080fd5b8501601f81018713611c1857600080fd5b611c2787823560208401611aaa565b91505092959194509250565b60008060408385031215611c4657600080fd5b611c4f836119f5565b9150611bae602084016119f5565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600181811c90821680611ca657607f821691505b60208210811415611cc757634e487b7160e01b600052602260045260246000fd5b50919050565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611d4e57611d4e611d1e565b500290565b634e487b7160e01b600052601260045260246000fd5b600082611d7857611d78611d53565b500490565b634e487b7160e01b600052603260045260246000fd5b60008351611da5818460208801611971565b835190830190611db9818360208801611971565b01949350505050565b600082821015611dd457611dd4611d1e565b500390565b60008219821115611dec57611dec611d1e565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6000600019821415611e5757611e57611d1e565b5060010190565b600082611e6d57611e6d611d53565b500690565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611ea59083018461199d565b9695505050505050565b600060208284031215611ec157600080fd5b8151610c358161190e565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220fda4e31c57580416c990197f609695b51709007ac30f63ad234dc7adb1d394d264736f6c63430008090033";

type AzukiConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AzukiConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Azuki__factory extends ContractFactory {
  constructor(...args: AzukiConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Azuki> {
    return super.deploy(overrides || {}) as Promise<Azuki>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Azuki {
    return super.attach(address) as Azuki;
  }
  override connect(signer: Signer): Azuki__factory {
    return super.connect(signer) as Azuki__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AzukiInterface {
    return new utils.Interface(_abi) as AzukiInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Azuki {
    return new Contract(address, _abi, signerOrProvider) as Azuki;
  }
}