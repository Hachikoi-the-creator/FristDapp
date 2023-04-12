import "./sass/spinner.scss";
import { useState } from "react";
import { Signer } from "../types/MoodyContract";
// * comps
import SetMoodBtn from "./components/SetMoodBtn";
import ConnectBtn from "./components/ConnectBtn";
import SearchMood from "./components/SelfMood";

// *  - component - *
export default function App() {
  const [signer, setSigner] = useState<Signer>();
  const [showModal, setShowModal] = useState(!signer);
  // const [showModal, setShowModal] = useState(false); // dev purposes
  const [isLoading, setIsLoading] = useState(false);
  const [moodIdx, setMoodIdx] = useState(0)

  const updateSigner = (signer: Signer) => {
    setSigner(signer);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const flipLoading = () => {
    setIsLoading((prev) => !prev);
  };

  const updateMood = (index:number)=>{
    setMoodIdx(index)
  }

  return (
    <main className="main">
      <div className="main-bg"></div>
      <h1 className="title">Share your mood~</h1>
      {showModal && (
        <ConnectBtn {...{ updateSigner, closeModal, flipLoading }} />
      )}
      
      <SetMoodBtn {...{ signer, flipLoading }} updateMood={(idx:number)=>updateMood(idx)} />
      <SearchMood {...{moodIdx}} adx={signer?._address||""} />

      {isLoading &&
        <div className="lds-hourglass"></div>}
    </main>
  );
}
// <SearchExternalMood {...{ signer }} />
