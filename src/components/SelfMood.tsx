import { useMemo } from "react";
import "../sass/SelfMood.scss";
import { Mood } from "../../types/MoodyContract";
import contractData from "../assets/contractData";

type Props = { adx: string; moodIdx: number };

const DEFAULT_ADX = "0x82a6521D75879372bbe735553f7cc76cAdF54616";

export default function SelfMood({ adx, moodIdx }: Props) {
  const address = adx.length ? adx : DEFAULT_ADX;
  // * check if it's better with or without hook
  const displayAdx = useMemo(
    () => `${address.slice(0, 6)}...${address.slice(address.length - 6)}`,
    [adx],
  );

  const mood: Mood = contractData.moods[moodIdx] as Mood;

  return (
    <section className="self-mood">
      <h2 className="sub-title">You are feeling...</h2>
      <p className="adx">{displayAdx}</p>
      <p className="mood">{mood}</p>
    </section>
  );
}
