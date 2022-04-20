import Head from "next/head";
import Layout from "../components/Layout";
import CheckoutTable from "../components/CheckoutTable";

export default function Checkout() {
  return (
    <>
      <Head>
        <title>Checkout - My dream Store</title>
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
        <CheckoutTable />
      </Layout>
    </>
  );
}
