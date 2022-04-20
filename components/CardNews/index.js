import { useState } from "react";
import style from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CardNews({ id, title, image }) {
  const [isOnHover, setIsShown] = useState(false);

  const titleCard = {
    initial: {
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      scale: .8,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardScale = {
    initial: {
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
    show: {
      scale: 1.1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const overlayBG = {
    initial: {
      opacity: 0.1,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      { id && title && image ? (
        <motion.div
          className={style.card}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          variants={cardScale}
          animate={isOnHover ? "show" : "initial"}
        >
          <div className={style.background}>
            <Image
              src={image}
              alt={title}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <Link href={`/news/${id.toLowerCase()}`} passHref>
            <div className={style.content}>
              <motion.h2
                className={`${style.title} font-medium`}
                animate={isOnHover ? "show" : "initial"}
                variants={titleCard}
              >
                {title}
              </motion.h2>
              <motion.div className={style.overlay} variants={overlayBG} animate={isOnHover ? "show" : "initial"}></motion.div>
            </div>
          </Link>
        </motion.div>
      ) : null}
    </>
  );
}
