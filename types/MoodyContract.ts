import { Contract, ContractTransaction, providers } from "ethers";

export type MoodyContract = Contract & {
  getMood(): Promise<number>;
  setMood(_mood: number): Promise<ContractTransaction>;
  userToMood(arg0: string): Promise<number>;
};

export type Signer = providers.JsonRpcSigner;

export type Mood =
  | "Moody"
  | "Happy"
  | "Depressed"
  | "Exited"
  | "Stressed"
  | "Gratefull"
  | "Joyfull"
  | "Inspired"
  | "Furious"
  | "Focused"
  | "Productive";
