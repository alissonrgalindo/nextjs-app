import style from "./style.module.scss";
import { useState } from 'react';
import Image from "next/image";
import lessIcon from "../../public/icon-less.svg";
import moreIcon from "../../public/icon-more.svg";
import deleteIcon from "../../public/delete-icon.svg";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart, updateQuantity } from "../../redux/cart.slice";
import { motion } from "framer-motion";
import ListOrder from "../ListOrder";

export default function CheckoutTable() {

  const [result, setOrder] = useState(null);
  const container = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const sku = event.target.id;
    const value = event.target.value;
    const values = {sku, value}
    dispatch(updateQuantity(values))
  };

  const getSubTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  const getVatTotalPrice = () => {
    return cart.reduce(
      (accumulator) => accumulator + (getSubTotalPrice() / 100) * 20,
      0
    );
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + getSubTotalPrice() + getVatTotalPrice(),
      0
    );
  };

const submitOrder = async (event) => {
  event.preventDefault();
  const order = cart;
  const res = await fetch('/api/order', {
    body: JSON.stringify(order),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
  const result = await res.json();
  setOrder(result);
};

console.log({result});

  return (
    <section className={style.section}>
      <div className="container">
        <div className={style.content}>
          <div className={style.header}>
            <h1 className={style.header__title}>
              {result ? "Success" : "Your Basket"}
            </h1>
            {result ? (
              <p className={style.header__description}>
                Your order was submitted with success, below are the items
                ordered
              </p>
            ) : (
              <p className={style.header__description}>
                Items you have added to your basket are shown below. Adjust the
                quantities or remove items before continuing purchase.
              </p>
            )}
          </div>
          {result ? 
          
          <ListOrder orders={result}/> 
          
          : 
          
            <motion.div variants={container} initial="hidden" animate={"show"}>
              {cart.length === 0 ? (
                <h1>Your Cart is Empty!</h1>
              ) : (
                <>
                  <form onSubmit={submitOrder}>
                    <div className={style.theader}>
                      <div>
                        <label className={`${style.label} font-medium`}>
                          Product
                        </label>
                      </div>
                      <div className="center">
                        <label className={`${style.label} font-medium`}>
                          Price
                        </label>
                      </div>
                      <div className="center">
                        <label className={`${style.label} font-medium`}>
                          Quantity
                        </label>
                      </div>
                      <div className="right">
                        <label className={`${style.label} font-medium`}>
                          Cost
                        </label>
                      </div>
                    </div>

                    {cart.map((item) => (
                      <div key={item.sku} className={style.body}>
                        <div className={style.body__line}>
                          <div className={style.product}>
                            <span>{item.name}</span>
                          </div>
                          <div className={style.price}>
                            <label className={`${style.label} font-medium`}>
                              Price
                            </label>
                            <div>
                              <span>£{item.price}</span>
                            </div>
                          </div>
                          <div className={style.quantity}>
                            <label className={`${style.label} font-medium`}>
                              Quantity
                            </label>
                            <div className={style.count}>
                              <button
                                onClick={() =>
                                  dispatch(decrementQuantity(item.sku))
                                }
                              >
                                <Image src={lessIcon} alt="Less Icon" />
                              </button>
                              <input
                                type="number"
                                pattern="[0-9]*"
                                id={item.sku}
                                value={item.quantity}
                                onChange={handleChange}
                                onKeyPress={(e) =>
                                  !/[0-9]/.test(e.key) && e.preventDefault()
                                }
                              />
                              <button
                                onClick={() =>
                                  dispatch(incrementQuantity(item.sku))
                                }
                              >
                                <Image src={moreIcon} alt="More Icon" />
                              </button>
                            </div>
                          </div>
                          <div className={style.cost}>
                            <label className={`${style.label} font-medium`}>
                              Cost
                            </label>
                            <div>
                              <span>£{item.quantity * item.price}</span>
                            </div>
                          </div>
                          <div className={style.action}>
                            <label className={`${style.label} font-medium`}>
                              Remove
                            </label>
                            <div>
                              <motion.button
                                className={style.action__button}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 1 }}
                                onClick={() => dispatch(removeFromCart(item.sku))}
                              >
                                <Image src={deleteIcon} alt="Delete Icon" />
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className={style.footer}>
                      <div className={style.footer__line}>
                        <span>Subtotal</span>
                        <span>£{getSubTotalPrice()}</span>
                      </div>
                      <div className={style.footer__line}>
                        <span>VAT at 20%</span>
                        <span>£{getVatTotalPrice()}</span>
                      </div>
                      <div className={style.footer__line}>
                        <span>
                          <strong>Total cost</strong>
                        </span>
                        <span>
                          <strong>{getTotalPrice()}</strong>
                        </span>
                      </div>
                      <div className={style.footer__action}>
                        <button type="submit" className="btn">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          }
        </div>
      </div>
    </section>
  );
}
