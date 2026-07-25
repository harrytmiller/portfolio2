import Head from "next/head";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { ThemeProvider } from "../context/ThemeContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/icon-512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
