import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import FullWidth from "../components/FullWidth";
import Content from "../components/Content";
import ImageContent from "../components/ImageContent";
import background from "../public/image-content.png";
import ContentMiddle from "../components/ContentMiddle";

export default function Home() {
  return (
    <>
      <Head>
        <title>App - My dream Store</title>
        <meta name="description" content="The story behind My Dream Store!" />
        <meta property="og:title" content="App - My Dream Store" />
        <meta property="og:description" content="The story behind My Dream Store!" />
        <meta property="og:url" content="https://alissongalindo.com/store" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero title="APPS unveils new studio" subtitle="Lagom" />
        <FullWidth>
          <Content
            aligment="center"
            title="Innovation and experience design agency."
            subtitle="Apps is an innovation and experience design agency. We exist to create a better future with you."
            url="/products"
            label="Products"
          />
        </FullWidth>
        <section>
          <div className="container d-flex reverse-mobile">
            <ImageContent background={background} alt="Image Background" />
            <ContentMiddle>
              <Content
                size="small"
                aligment="left"
                title="The imaginative application of art and science."
                subtitle="We architect, design and deliver iconic experiences, services and products that improve people’s lives. "
                url="/news"
                label="Read Latest"
              />
            </ContentMiddle>
          </div>
        </section>
      </Layout>
    </>
  );
}
