import { useRouter } from "next/router";
import getNewsById from "../api/news/[news]"
import GridList from "../../components/GridList";
import GridTitle from "../../components/GridTitle";
import Layout from "../../components/Layout";
import Head from "next/head";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NewsDetail from "../../components/NewsDetail"

export default function NewsPage({ news }) {
  const router = useRouter();
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      width: "100%",
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -50},
    show: { opacity: 1, y: 0,transition: { duration: 0.8 } },
  };

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
        <motion.div ref={ref} variants={container} initial="hidden" animate={controls}>
          <GridList>
            <GridTitle title={router.query.id} />
              <motion.div variants={item}>
                <NewsDetail news ={news}/>
              </motion.div>
          </GridList>
        </motion.div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const id = ctx.query.id;
  const news = await getNewsById(id);
  return { props: { news } };
}
