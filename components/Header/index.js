import style from "./style.module.scss";
import Image from "next/image";
import logo from "../../public/logo.png";
import Nav from "../Nav";
import Link from "next/link";

export default function Header() {
  return (
    <header className={style.header}>
      <div className="container d-flex space-between align-center">
        <Link href="/" passHref>
          <a>
            <Image src={logo} alt="Logo App" width={60} height={20}/>
          </a>
        </Link>
        <Nav />
      </div>
    </header>
  );
}
