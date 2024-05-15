import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import Seo from "./components/seo";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Seo />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
