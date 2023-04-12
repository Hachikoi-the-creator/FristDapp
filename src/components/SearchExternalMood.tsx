import { useRef } from "react";
import { Signer } from "../../types/MoodyContract";
import { getContractInstance } from "../utils/getContract";

type Props = { signer: Signer | undefined };

export default function SearchExternalMood({ signer }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const searchHandler = () => {
    const adx = inputRef.current?.value;
    if (!adx) {
      return console.error("please enter an address");
    }
    if (!signer) {
      return console.error("There aint no signer available, isntall");
    }
    const contractInstance = getContractInstance(signer);
    if(!contractInstance) return console.error("couldn't get contract instance, sadge");
    
    contractInstance.getMood()
  };

  return (
    <section className="search-mood">
      <article className="mood-wrapper">
        <input type="text" ref={inputRef} />
        <p className="mood">{}</p>
      </article>
    </section>
  );
}
