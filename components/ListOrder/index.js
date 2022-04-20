import style from "./style.module.scss";
import { motion } from "framer-motion";

export default function ListOrder({ orders }) {
  const item = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className={style.list}
      initial="hidden"
      animate="show"
      variants={item}
    >
      {orders.map((item) => (
        <div key={item.sku} className={style.list__item}>
          <h2 className={style.title}><b>{item.name}</b> - {item.category}</h2>
          <span>{item.quantity}</span>
        </div>
      ))}
    </motion.div>
  );
}
