import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import style from "./ImageContent.module.scss";
import Image from "next/image";

export default function ImageContent({ background, alt }) {
  const squareVariants = {
    visible: { x: 0, transition: { duration: 1.5 } },
    hidden: { x: "-100%" },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={squareVariants}
      className={style.content}
    >
      <Image
        src={background}
        alt={alt}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </motion.div>
  );
}
