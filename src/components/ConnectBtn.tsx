import { providers } from "ethers";
import { Signer } from "../../types/MoodyContract";

type Props = {
  updateSigner: (signer: Signer) => void;
};

export default function ConnectBtn(props: Props) {
  const connectWallet = async () => {
    try {
      // * later on try with maticmum & sepolia, instead of any
      const provider = new providers.Web3Provider(window.ethereum, "any");
      await provider.send("eth_requestAccounts", []);
      props.updateSigner(provider.getSigner());
    } catch (error) {
      console.error("coudl find web3 provider", error);
    }
  };

  return (
    <div className="connect-modal">
      <button onClick={connectWallet}>Connect</button>
    </div>
  );
}
