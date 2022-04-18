import style from "./ContentMiddle.module.scss";

export default function ContentMiddle({children}) {
  return (
    <div className={style.content}>
        {children}
    </div>
  );
}
