import style from "./style.module.scss";
import Button from "../Button";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Content({
  aligment,
  size,
  title,
  subtitle,
  url,
  label,
}) {
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
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={ref}
      className={`${style.content} ${aligment} ${size == "small" ? style.small : ""}`}
      variants={container}
      initial="hidden"
      animate={controls}
    >
      <motion.h2 className={style.title} variants={item}>
        {title}
      </motion.h2>
      <motion.p className={style.subtitle} variants={item}>
        {subtitle}
      </motion.p>
      <motion.div variants={item}>
        <Button url={url}>{label}</Button>
      </motion.div>
    </motion.div>
  );
}
