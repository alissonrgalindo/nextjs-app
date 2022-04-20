import Head from "next/head";
import Layout from "../components/Layout";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - My dream Store</title>
        <meta name="description" content="Checkout My Dream Store!" />
        <meta property="og:title" content="Checkout - My Dream Store" />
        <meta property="og:description" content="Checkout My Dream Store!" />
        <meta
          property="og:url"
          content="https://alissongalindo.com/store/checkout"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <h1>Contact</h1>
      </Layout>
    </>
  );
}
