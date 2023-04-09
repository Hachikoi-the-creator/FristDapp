import "../sass/setMood.scss";
import contractData from "../assets/contractData";
import { Signer } from "../../types/MoodyContract";
import { getContractInstance } from "../utils/getContract";

export default function SetMoodBtn({ signer }: { signer: Signer | undefined }) {
  // ------------------------------------------------------
  const setMood = async (moodIdx: number): Promise<null | void> => {
    const moodsNum = contractData.moods.length - 1;
    if (moodIdx < 0 || moodIdx > moodsNum)
      return console.error("invalid mood bruv");

    // direct casting since will only be used if there's a signer
    const contractInstance = getContractInstance(signer as Signer);
    if (!contractInstance)
      return console.error("Failed trying get contract instance");

    try {
      // console.log("Your nft is being minted");
      const contractTnx = await contractInstance.setMood(moodIdx);
      contractTnx.wait().then((p: unknown) => {
        // console.log("transaction has been minted");
      });
    } catch (error) {
      console.error("Failed while minting");
    }
  };

  if (!signer)
    return (
      <section>
        <h1>No signer detected :c</h1>
      </section>
    );

  return (
    <section className="mood-btns">
      {contractData.moods.map((mood, idx) => (
        <button onClick={() => setMood(idx)} key={mood} className="btn">
          {mood}
        </button>
      ))}
    </section>
  );
}
