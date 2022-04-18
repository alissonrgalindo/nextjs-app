import style from "./FullWidth.module.scss";

export default function FullWidth({children}) {
  return (
    <section className={style.section}>
        <div className="container position-relative d-flex align-center">
            {children}
        </div>
    </section>
  );
}
