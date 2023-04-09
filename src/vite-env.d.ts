/// <reference types="vite/client" />
// import { ExternalProvider } from "ethers/providers";
import { Provider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum?: Provider;
  }
}
// declare global {
//   interface Window {
//     ethereum?: ExternalProvider;
//   }
// }
