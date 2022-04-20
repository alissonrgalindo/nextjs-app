import style from "./style.module.scss";

export default function GridList({children}) {
  return (
    <div className="container">
        <div className={style.grid}>
            {children}
        </div>
    </div>
  );
}
