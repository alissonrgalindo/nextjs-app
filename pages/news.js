import Head from "next/head";
import Layout from "../components/Layout";
import { getNews } from "./api/news";
import GridList from "../components/GridList";
import GridTitle from "../components/GridTitle";
import CardNews from "../components/CardNews";


export default function News({news}) {
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
          <GridList>
              <GridTitle title="News"/>
                {news.map((item) => (
                    <CardNews key={item.id} id={item.id} title={item.title} image={item.image} />
                ))}
          </GridList>
      </Layout>
    </>
  );
}


export async function getStaticProps() {
    const news = await getNews();
    return { props: { news } };
  }