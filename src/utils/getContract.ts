import { Contract } from "ethers";
import { MoodyContract, Signer } from "../../types/MoodyContract";
import contractData from "../assets/contractData";

const abi = contractData.abi;
const CONTRACT_ADDRESS = contractData.address;

export const getContractInstance = (signer: Signer): MoodyContract | void => {
  if (!signer) return console.error("there ain't no signer");

  return new Contract(CONTRACT_ADDRESS, abi, signer) as MoodyContract;
};
