import { SupportedChainId, Addresses } from "./types";

const mainnetAddresses: Addresses = {
  CHILL: "0xDF899Fe99Ee4b4B12aAAF734CDAc8e601A8E4ef8",
  CHILL_LP: "0xDC00bA87Cc2D99468f7f34BC04CBf72E111A32f7",
  WAVAX: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  ROYALTY_FEE_MANAGER: "0x8A7D7cF94Aa008079597170464C74194581D4834",
  ROYALTY_FEE_REGISTRY: "0x27B306A43A38aBc2f1cEcbBfB9F97BC7fBA7c070",
  ROYALTY_FEE_SETTER: "0x66466107d9cAE4da0176a699406419003F3C27a8",
  EXCHANGE: "0x35a196bA95ebf33513B5997e14C5533018D59452",
  TRANSFER_MANAGER_ERC721: "0xD40835EC8bFE05A58C211DD2628F517F5FFb3d3b",
  TRANSFER_MANAGER_ERC1155: "0x9781d6c97926EdD9a336439a59f76c0dF8C78b4e",
  TRANSFER_SELECTOR_NFT: "0x5D973792acCf00811486d5649ebB3A07578E8391",
  STRATEGY_STANDARD_SALE: "0x7777ae478ACA2c41606F9Cbc30f4C6A31E2785D0",
  STRATEGY_COLLECTION_SALE: "0x6678478829c0853F19Cf9d06a96DfAdc8f9E95df",
  STRATEGY_PRIVATE_SALE: "0x58D83536D3EfeDB9F7f2A1Ec3BDaad2b1A4DD98C",
  STRATEGY_DUTCH_AUCTION: "0x3E80795Cae5Ee215EBbDf518689467Bf4243BAe0",
  PRIVATE_SALE_WITH_FEE_SHARING: "0x9571cdD8ACB71C83393290F0D63A46173dddE65B",
  FEE_SHARING_SYSTEM: "0xBcD7254A1D759EFA08eC7c3291B2E85c5dCC12ce",
  STAKING_POOL_FOR_LOOKS_LP: "0x2A70e7F51f6cd40C3E9956aa964137668cBfAdC5",
  TOKEN_DISTRIBUTOR: "0x465A790B428268196865a3AE2648481ad7e0d3b1",
  AIRDROP: "0xA35dce3e0E6ceb67a30b8D7f4aEe721C949B5970",
  TRADING_REWARDS_DISTRIBUTOR: "0x453c1208B400fE47aCF275315F14E8F9F9fbC3cD",
  MULTICALL2: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696", // https://github.com/makerdao/multicall#multicall2-contract-addresses
  REVERSE_RECORDS: "0x3671aE578E63FdF66ad4F3E12CC0c0d71Ac7510C",
  AGGREGATOR_UNISWAP_V3: "",
};

const rinkebyAddresses: Addresses = {
  LOOKS: "0xAf15b8F7f5f4aC6E2c8b22485DF720c4e3A76bEe",
  LOOKS_LP: "0xceb65559c96F21832e6d2163977A37aE928F164a",
  WETH: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
  ROYALTY_FEE_MANAGER: "0x3162647917b151D35174AbBB079C3DF088C72E4E",
  ROYALTY_FEE_REGISTRY: "0xE2084D0Bacc95bF76F68A5Af7D6989e5e674d0A3",
  ROYALTY_FEE_SETTER: "0xdC6dC8d1B784890BA2c38947218F89E963EC2673",
  EXCHANGE: "0x1AA777972073Ff66DCFDeD85749bDD555C0665dA",
  TRANSFER_MANAGER_ERC721: "0x3f65A762F15D01809cDC6B43d8849fF24949c86a",
  TRANSFER_MANAGER_ERC1155: "0xaf3115757A96e9439FE8d5898dB820afDA15958A",
  TRANSFER_SELECTOR_NFT: "0x28754822Fb07Fcd4DF7815EF17E57FeF682B6eDC",
  STRATEGY_STANDARD_SALE: "0x732319A3590E4fA838C111826f9584a9A2fDEa1a",
  STRATEGY_COLLECTION_SALE: "0xa6e7decd4e18b510c6b98aa0c8ee2db3879f529d",
  STRATEGY_PRIVATE_SALE: "0x861fDb71CCc266b3c0A4b8da8A929E52E83F5e7c",
  STRATEGY_DUTCH_AUCTION: "0xAA0188CeCDD5924a2a256345C825d8528129d9B8",
  PRIVATE_SALE_WITH_FEE_SHARING: "0x6FC27d1a4f83c02f85cFa7d171d3020F3d34c191",
  FEE_SHARING_SYSTEM: "0xF32E6141d54512814fB94584fc17BAaf0C1203dE",
  STAKING_POOL_FOR_LOOKS_LP: "0x81E06b62b9d21f3b249162Ab3811E172Ab32AF19",
  TOKEN_DISTRIBUTOR: "0xd66A1138AF58d02b5571F2EF06e14e88505BDcD3",
  AIRDROP: "0x89BbbCe49C6e7fe7D86589f7E72744469266f306",
  TRADING_REWARDS_DISTRIBUTOR: "0x8f1aB228E892Ad2a7E10605531C9EC23D5cbA4fD",
  MULTICALL2: "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696", // https://github.com/makerdao/multicall#multicall2-contract-addresses
  REVERSE_RECORDS: "0x196eC7109e127A353B709a20da25052617295F6f",
  AGGREGATOR_UNISWAP_V3: "",
};

export const addressesByNetwork: Omit<{ [chainId in SupportedChainId]: Addresses }, SupportedChainId.HARDHAT> = {
  [SupportedChainId.MAINNET]: mainnetAddresses,
  [SupportedChainId.RINKEBY]: rinkebyAddresses,
};
