import Head from "next/head";
import Layout from "../components/Layout";
import carImage from "../public/car.jpg";
import houseImage from "../public/houses.jpg";
import toolsImage from "../public/tools.jpg";
import GridList from "../components/GridList";
import GridTitle from "../components/GridTitle";
import CategoryItem from "../components/CategoryItem";

export default function Products() {
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
          <GridTitle title="Product Categories"/>
          <CategoryItem image={carImage} category="cars" />
          <CategoryItem image={houseImage} category="houses" />
          <CategoryItem image={toolsImage} category="Tools" />
        </GridList>
      </Layout>
    </>
  );
}
