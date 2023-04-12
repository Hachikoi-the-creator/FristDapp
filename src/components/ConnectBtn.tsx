import "../sass/connectBtn.scss";
import { providers } from "ethers";
import closeSvg from "../assets/close.svg";
import { Signer } from "../../types/MoodyContract";

type Props = {
  updateSigner: (signer: Signer) => void;
  closeModal: () => void;
  flipLoading: () => void;
};

export default function ConnectBtn(props: Props) {
  const { updateSigner, closeModal, flipLoading } = props;
  // -----------------------------------------------------
  const connectWallet = async () => {
    try {
      // * later on try with maticmum & sepolia, instead of any
      flipLoading(); // => true
      const provider = new providers.Web3Provider(window.ethereum, "any");
      await provider.send("eth_requestAccounts", []);
      updateSigner(provider.getSigner());
      flipLoading(); // => false
      closeModal()
    } catch (error) {
      console.error("coudl find web3 provider", error);
    }
  };

  return (
    <div className="connect-modal">
      <button className="close-btn" onClick={closeModal}>
        <img src={closeSvg} alt="close btn" />
      </button>
      <button onClick={connectWallet} className="connect-btn">
        Connect
      </button>
    </div>
  );
}
