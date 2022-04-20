import style from "./style.module.scss";
import Image from "next/image";
import logo from "../../public/logo.png";
import { navLinks } from "../../utils/dataMenuFooter";
import Link from "next/link";
import googleLogo from "../../public/google-logo.svg";
import facebookLogo from "../../public/facebook-logo.svg";
import instagramLogo from "../../public/instagram-logo.svg";
import twitterLogo from "../../public/twitter-logo.svg";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={`${style.container} container d-flex space-between align-center`}>
        <div className={style.menu}>
          <Link href="/" passHref>
            <a>
              <Image src={logo} alt="Logo App" width={60} height={20}/>
            </a>
          </Link>
          <ul className={style.list}>
            {navLinks.map((link, index) => {
              return (
                <li key={index} className={style.list__item}>
                  <Link href={link.path} passHref>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={style.details}>
          <div className={style.network}>
            <a href="http://www.google.com" target={"_blank"} className={style.network__item} rel={"noreferrer"}>
              <Image src={googleLogo} alt="Logo Google" width={24} height={24} />
            </a>
            <a href="http://www.facebook.com" target={"_blank"} className={style.network__item} rel={"noreferrer"}>
              <Image src={facebookLogo} alt="Logo Facebook" width={17} height={31} />
            </a>
            <a href="http://www.instagram.com" target={"_blank"} className={style.network__item} rel={"noreferrer"}>
              <Image src={instagramLogo} alt="Logo Instagram" width={31} height={31} />
            </a>
            <a href="http://www.twitter.com" target={"_blank"} className={style.network__item} rel={"noreferrer"}>
              <Image src={twitterLogo} alt="Logo Twitter" width={32} height={25} />
            </a>
          </div>
          <div className={`${style.copyright} font-medium`}>
            <p>Privacy Policy <br/>© {new Date().getFullYear()} Google. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
