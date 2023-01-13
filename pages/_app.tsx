import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import "../styles/icon.css";
import { Provider } from "react-redux";
import store from "../store/store";
import "../styles/loading.css";
import { DefaultSeo } from "next-seo";
import DEFAULT_SEO from "../util/defaultSeo";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "../styles/darkmode.css";
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <DefaultSeo {...DEFAULT_SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
