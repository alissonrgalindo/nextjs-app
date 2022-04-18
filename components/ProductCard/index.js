import style from "./ProductCard.module.scss";
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
        duration: .8,
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
        animate={isOnHover ? "show" : "initial"}>
        <Image
          src={product.image}
          alt={product.category}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </motion.div>
      <div className={style.content}>
        <h2 className={`${style.title} font-medium`}>{product.name}</h2>
        <span className={style.price}>£{product.price}</span>
        <div className={style.action}>
          <button className="btn" onClick={() => dispatch(addToCart(product))}>
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}
