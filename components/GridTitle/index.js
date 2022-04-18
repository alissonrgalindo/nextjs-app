import style from "./GridTitle.module.scss";

export default function GridTitle({title}) {
  return (
    <div className="container">
        <div className={style.title}>
            <h2 className={`${style.title__content} font-medium`}>{title}</h2>
        </div>
    </div>
  );
}
