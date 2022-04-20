import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import style from "./style.module.scss";
import Image from "next/image";
import iconCart from "../../public/icon-cart.svg";
import iconMenu from "../../public/icon-menu.svg";
import { navLinks } from "../../utils/dataMenu";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from 'react-redux';

export default function Nav() {
  const router = useRouter();

  const cart = useSelector((state) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  useEffect(() => {
    const updateMobile = () => {
      setShowMenu(false);
    };

    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  }, []);

  const [ShowMenu, setShowMenu] = useState(false);

  const overlayBG = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 100% -10px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 100% -10px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  let count;
    if (getItemsCount() > 0) {
      count = getItemsCount();
    } else {
      count = false;
    }

  return (
    <>
      <nav className={style.nav}>
        <button
          className={`${style.mobile} font-medium`}
          onClick={() => setShowMenu((e) => !e)}
        >
          Menu <Image src={iconMenu} alt="Icon Menu" width={16} height={14} />
        </button>
        <ul className={`${style.menu} ${ShowMenu ? `${style.show}` : ""}`}>
          {navLinks.map((link, index) => {
            return (
              <li
                key={index}
                className={`${style.menu__item}  ${
                  router.pathname == link.path ? `${style.active}` : ""
                }`}
              >
                <Link href={link.path} passHref>
                  {link.name}
                </Link>
              </li>
            );
          })}

          <li
            className={`${style.menu__icon}  ${
              router.pathname == "/checkout" ? "active" : ""
            }`}
          >
            <Link href="/checkout" passHref>
              <a>
                <Image src={iconCart} alt="Icon Cart" width={20} height={16} />
                {count &&
                  <motion.div className={style.counter} animate={{scale: [1, 1.8, 1.8, 1, 1]}}>{count}</motion.div>
                }
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <motion.div
        variants={overlayBG}
        initial={false}
        animate={ShowMenu ? "open" : "closed"}
        className={style.overlay}
        onClick={() => setShowMenu((e) => !e)}
      ></motion.div>
    </>
  );
}
