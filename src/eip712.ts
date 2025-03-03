import { TypedDataDomain, TypedDataField } from "@ethersproject/abstract-signer";
import { SupportedChainId } from "./constants";

const version = 1;

/**
 * Get LR typed data for creating maker orders.
 * Use with a signTypedData function.
 * @param chainId Current chain id
 * @param verifyingContract Exchange contract address
 * @returns { type: Record<string, TypedDataField[]>, domain: TypedDataDomain }
 */
export const getMakerOrderTypedData = (chainId: SupportedChainId, verifyingContract: string) => {
  const domain: TypedDataDomain = {
    name: "LooksRareExchange",
    version: version.toString(),
    chainId,
    verifyingContract,
  };

  const type: Record<string, Array<TypedDataField>> = {
    MakerOrder: [
      { name: "isOrderAsk", type: "bool" },
      { name: "signer", type: "address" },
      { name: "collection", type: "address" },
      { name: "price", type: "uint256" },
      { name: "tokenId", type: "uint256" },
      { name: "amount", type: "uint256" },
      { name: "strategy", type: "address" },
      { name: "currency", type: "address" },
      { name: "nonce", type: "uint256" },
      { name: "startTime", type: "uint256" },
      { name: "endTime", type: "uint256" },
      { name: "minPercentageToAsk", type: "uint256" },
      { name: "params", type: "bytes" },
    ],
  };

  return {
    type,
    domain,
  };
};
