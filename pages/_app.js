import Head from "next/head";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { ThemeProvider } from "../context/ThemeContext";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Head>
        <link rel="icon" href={`${BASE}/favicon.ico`} sizes="any" />
        <link rel="icon" href={`${BASE}/icon-192.png`} type="image/png" sizes="192x192" />
        <link rel="icon" href={`${BASE}/icon-512.png`} type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href={`${BASE}/apple-touch-icon.png`} />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
