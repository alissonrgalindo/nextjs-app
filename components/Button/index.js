import Link from "next/link";
import { motion } from "framer-motion";

export default function Button({ url, children }) {
  return (
    <Link href={url} passHref>
      <motion.a
        role="button"
        className="btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
      >
        {children}
      </motion.a>
    </Link>
  );
}
