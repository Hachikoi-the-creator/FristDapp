import { Mood } from "../../types/MoodyContract";
import contractData from "../assets/contractData";

type Props = {
  adx: string;
  who: "Mine" | "User";
  moodId: number;
  moodGetter: () => Promise<void>;
};

export default function GetMood({ adx, who, moodId, moodGetter }: Props) {
  // * I know this string is type mood
  const mood: Mood = contractData.moods[moodId] as Mood;

  return (
    <section className="get-mood">
      <h3>Mood Finder</h3>
      <div className="wrapper">
        <p className="adx">{adx}</p>
        <p className="who">{who}</p>
        <p className="mood">{mood}</p>
      </div>
    </section>
  );
}
