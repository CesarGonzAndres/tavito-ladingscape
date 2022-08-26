import '../styles/global.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// TODO: Integration and unitary test needed
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
