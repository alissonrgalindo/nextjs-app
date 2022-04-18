import style from "./CheckoutContent.module.scss";
import CheckoutTable from "../CheckoutTable";

export default function CheckoutContent() {
  return (
    <section className={style.section}>
      <div className="container">
        <div className={style.content}>
          <div className={style.header}>
              <h1 className={style.header__title}>Your Basket</h1>
              <p className={style.header__description}>Items you have added to your basket are shown below. Adjust the quantities or remove items before continuing purchase.</p>
          </div>
          <CheckoutTable />
        </div>
      </div>
    </section>
  );
}
