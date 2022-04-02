import React from "react";
import { ethers } from "ethers";
import abi from "../abi.json";

export default function App() {
  const NameContractAdress = "0x98e12935dcb06d4113df69ebd7318775622cfb07";
  const NameContractABI = abi;
  let NameContract;
  let signer;

  const provider = new ethers.providers.Web3Provider(
    window.ethereum,
    "ropsten"
  );

  /*A contract is created in the browser, whit the address and ABI of your contract, and the account of the user who is using it!*/
  provider.send("eth_requestAccounts", []).then(() => {
    provider.listAccounts().then(function (accounts) {
      signer = provider.getSigner(accounts[0]);
      NameContract = new ethers.Contract(
        NameContractAdress,
        NameContractABI,
        signer
      );
    });
  });

  //easier if it has the same name as the contract, no need tho
  async function SetName() {
    const yerName = document.getElementById("yer-name").value;
    const setNamePromise = NameContract.SetName(yerName);
    await setNamePromise;
  }

  async function GetAllNames() {
    const showNames = document.querySelector(".show-names");
    showNames.textContent = "";
    const getNamePromise = NameContract.GetAllNames();
    const Names = await getNamePromise;
    Names.forEach((element) => (showNames.textContent += ` ${element}`));
  }

  async function EraseLastName() {
    const removeNamePromise = NameContract.EraseLastName();
    await removeNamePromise;
  }

  return (
    <main>
      <h1>My first Dapp 🥳</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi unde
        saepe dicta culpa nostrum, sapiente dolores veniam, nam veritatis et,
        non magnam vero repellendus iste omnis corporis?
      </p>
      <label htmlFor="yer-name"></label>
      <input type="text" id="yer-name" placeholder="Please enter yer name" />
      <div className="btns">
        <button onClick={SetName}>Add Name</button>
        <button onClick={GetAllNames}>Get All Names</button>
        <button onClick={EraseLastName}>Remove Last Name</button>
      </div>
      <h5 className="show-names"></h5>
    </main>
  );
}
