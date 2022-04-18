import { useState } from "react";
import style from "./CategoryItem.module.scss";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CategoryItem({ image, category }) {
  const [isOnHover, setIsShown] = useState(false);
  
  const title = {
    initial: {
      scale: .7,
      transition: {
        duration: .5
      }
    },
    show: {
      scale: 1.1,
      transition: {
        duration: .5
      }
    }
  };

  const overlayBG = {
    initial: {
      clipPath: "circle(0px at 150px 150px)",
      opacity: .5,
      transition: {
        duration: .8,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    show: {
      clipPath: `circle( 400px at 150px 150px)`,
      opacity: .8,
      transition: {
        duration: .8,
        type: "spring",
        stiffness: 20,
        restDelta: 1,
      },
    },
  };

  return (
    <div
      className={style.card}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className={style.background}>
        <Image
          src={image}
          alt={category}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <Link href={`/category/${category.toLowerCase()}`} passHref>
        <div className={style.content}>
          <motion.h2 className={`${style.title} font-medium`} animate={isOnHover ? "show" : "initial"} variants={title}>{category}</motion.h2>
        </div>
      </Link>
      <motion.div
        variants={overlayBG}
        animate={isOnHover ? "show" : "initial"}
        className={style.overlay}
      ></motion.div>
    </div>
  );
}
