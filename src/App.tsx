// import { parseEther } from "ethers/lib/utils";
import { useState } from "react";
import contractData from "./assets/contractData";
import { Signer } from "../types/MoodyContract";
// * comps
import SetMoodBtn from "./components/SetMoodBtn";
import ConnectBtn from "./components/ConnectBtn";

// *  - component - *
export default function App() {
  const [signer, setSigner] = useState<Signer>();

  const updateSigner = (signer: Signer) => {
    setSigner(signer);
  };

  return (
    <main className="main">
      <h1>Select your mood!</h1>
      <div className="desc">
        {!signer && <ConnectBtn {...{ updateSigner }} />}

        <SetMoodBtn {...{ signer }} />
      </div>
    </main>
  );
}
