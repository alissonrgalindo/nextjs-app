import style from "./style.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NewsDetail({ news }) {
  const item = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      id={news.id}
      className={style.list}
      initial="hidden"
      animate="show"
      variants={item}
    >
      <div className={style.image}>
        <Image
          src={news.image}
          alt={news.category}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className={style.title}>{news.title}</div>

      <div className={style.body}>
        <p className={style.body__text}>{news.text}</p>
      </div>
      <div>
        <span>{news.date}</span>
      </div>
    </motion.div>
  );
}
