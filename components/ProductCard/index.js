import style from "./style.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart.slice";

export default function ProductCard({ product }) {
  const [isOnHover, setIsShown] = useState(false);
  const dispatch = useDispatch();
  const imageBg = {
    initial: {
      scale: 1.1,
      transition: {
        duration: 1,
      },
    },
    show: {
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };
  const textCard = {
    initial: {
      y: 0,
      transition: {
        duration: 1,
      },
    },
    show: {
      y: 30,
      transition: {
        duration: 0.8,
      },
    },
  };
  const contentHeight = {
    initial: {
      height: "100%",
      transition: {
        duration: 1,
      },
    },
    show: {
      height: "20%",
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      className={style.card}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <motion.div
        className={style.image}
        variants={imageBg}
        animate={isOnHover ? "show" : "initial"}
      >
        <Image
          src={product.image}
          alt={product.category}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </motion.div>
      <motion.div
        className={style.content}
        variants={contentHeight}
        animate={isOnHover ? "show" : "initial"}
      >
        <motion.h2
          className={`${style.title} font-medium`}
          variants={textCard}
          animate={isOnHover ? "show" : "initial"}
        >
          {product.name}
        </motion.h2>
        <motion.span
          className={style.price}
          variants={textCard}
          animate={isOnHover ? "show" : "initial"}
        >
          £{product.price}
        </motion.span>
        <div className={style.action}>
          <button className="btn" onClick={() => dispatch(addToCart(product))}>
            Buy Now
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
