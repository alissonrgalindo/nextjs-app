import style from "./style.module.scss";
import Image from "next/image";
import backgroundImage from "../../public/background-hero.png";
import { motion } from "framer-motion";

export default function Hero({ title, subtitle }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  return (
    <section className={style.hero}>
      <div className={style.background}>
        <Image
          src={backgroundImage}
          alt="Table with a mug and laptop"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="container position-relative d-flex align-center">
        <motion.div
          className={style.header}
          variants={container}
          initial="hidden"
          animate={"show"}
        >
          <motion.h1 className={style.header__title} variants={item}>
            {title}
          </motion.h1>
          <motion.h2 className={style.header__subtitle} variants={item}>
            {subtitle}
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
}
