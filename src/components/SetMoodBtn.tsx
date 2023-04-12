import "../sass/setMood.scss";
import contractData from "../assets/contractData";
import { Signer } from "../../types/MoodyContract";
import { getContractInstance } from "../utils/getContract";

type Props = {
  signer: Signer | undefined;
  flipLoading: () => void;
  updateMood: (idx:number) => void;
};

export default function SetMoodBtn({ signer, flipLoading, updateMood }: Props) {
  // ------------------------------------------------------
  const setMood = async (moodIdx: number): Promise<null | void> => {
    const moodsNum = contractData.moods.length - 1;
    if (moodIdx < 0 || moodIdx > moodsNum) {
      return console.error("invalid mood bruv");
    }

    // direct casting since will only be used if there's a signer
    const contractInstance = getContractInstance(signer as Signer);
    if (!contractInstance) {
      return console.error("Failed trying get contract instance");
    }

    try {
      // console.log("Your nft is being minted");
      flipLoading(); // => true
      const contractTnx = await contractInstance.setMood(moodIdx);
      await contractTnx.wait();
      console.log("transaction has been minted");
      updateMood(moodIdx)
    } catch (error) {
      console.error("Failed while minting");
    }
    // by being here will remove it regardless of whether the tnx went ok or no
    flipLoading(); // => false
  };

  return (
    <section className="mood-btns">
      {contractData.moods.map((mood, idx) => (
        <button
          onClick={() => setMood(idx)}
          key={mood}
          className={`btn ${mood.toLowerCase()}`}
        >
          {mood}
        </button>
      ))}
    </section>
  );
}
