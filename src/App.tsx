// import { parseEther } from "ethers/lib/utils";
import { useState } from "react";
import { Signer } from "../types/MoodyContract";
// * comps
import SetMoodBtn from "./components/SetMoodBtn";
import ConnectBtn from "./components/ConnectBtn";

// *  - component - *
export default function App() {
  const [signer, setSigner] = useState<Signer>();
  // const [showModal, setShowModal] = useState(!signer);
  const [showModal, setShowModal] = useState(false);

  const updateSigner = (signer: Signer) => {
    setSigner(signer);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <main className="main">
      <div className="main-bg"></div>
      <h1 className="title">Share your mood~</h1>
      {showModal && <ConnectBtn {...{ updateSigner, closeModal }} />}
      <SetMoodBtn {...{ signer }} />
    </main>
  );
}
