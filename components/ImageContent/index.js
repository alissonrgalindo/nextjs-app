import { motion } from "framer-motion";
import style from "./style.module.scss";
import Image from "next/image";

export default function ImageContent({ background, alt }) {
  const squareVariants = {
    visible: { opacity: 1, x:[-200, 0], transition: { duration: 1.5 } },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      viewport={{ once: true }}
      whileInView="visible"
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
