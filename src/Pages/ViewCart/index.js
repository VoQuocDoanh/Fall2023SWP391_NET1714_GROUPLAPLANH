//  Cart moi
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import React, { useEffect, useMemo, useState } from "react";
import styles from "./ViewCart.module.scss";
import { useReducer, useRef} from "react";
import CardItem from "../../components/CardItem";

const cx = classNames.bind(styles);


const DATA = [
    {
      id: 1,
      img: "beautiful-girl-sitting-down-playing-the-piano.webp",
      name: "Beatname",
      price: 70,
      quantity: 1,
    },
    {
      id: 2,
      img: "beautiful-girl-sitting-down-playing-the-piano.webp",
      name: "Beatname",
      price: 70,
      quantity: 1,
    },
    {
      id: 3,
      img: "beautiful-girl-sitting-down-playing-the-piano.webp",
      name: "Beatname",
      price: 70,
      quantity: 1,
    },
    {
      id: 4,
      img: "beautiful-girl-sitting-down-playing-the-piano.webp",
      name: "Beatname",
      price: 70,
      quantity: 1,
    },
    {
      id: 5,
      img: "beautiful-girl-sitting-down-playing-the-piano.webp",
      name: "Beatname",
      price: 70,
      quantity: 1,
    },
  ];

function ViewCart() {
    const [listData, setListData] = useState(DATA);
    // Remove product
    // Remove
    const handleRemove = (id) => {
      const data = listData.filter((item) => item.id !== id);
      setListData(data);
    };
    // Decrease quantity
    const handleDecrease = (index) => {
      const data = [...listData];
      if (data[index].quantity >= 1) data[index].quantity--;
      setListData(data);
    };
    // Increase quantity
    const handleIncrease = (index) => {
      const data = [...listData];
      data[index].quantity++;
      setListData(data);
    };
  
    // Sub Total
    const subTotal = listData.reduce((total, currentValue) => {
      return total + currentValue.price * currentValue.quantity;
    }, 0);
  
    // Ship
    const ship = useRef(0);
    // Discount
    const discount = useRef(0);
    // Tax
    const tax = useRef(0);



    return (
        <section className={cx("card-wrapper")}>
      {/* Shop cart */}
      <section className={cx("shop-card")}>
        {/* Header */}
        <header className={cx("card-header")}>
          <h2 className={cx("cart-heading")}>Shopping Cart</h2>
        </header>
        {/* Content */}
        <div className={cx("card-names")}>
          <div className={cx("card-product", "card-title")}>PRODUCTS_NAME</div>
          <div className={cx("card-price", "card-title")}>PRICE</div>
          {/* <div className={cx("card-quantity", "card-title")}>QUANTITY</div> */}
          <div className={cx("card-sub", "card-title")}>TOTAL</div>
        </div>
        <div className={cx("list-card")}>
          {listData.map((item, index) => {
            return (
              <CardItem
                key={index}
                index={index}
                id={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                remove={handleRemove}
                decrease={handleDecrease}
                increase={handleIncrease}
              />
            );
          })}
        </div>
        {/* Footer */}
        <footer className={cx("card-footer")}>
          <Link to = "/listbeat"className={cx("card-return", "card-action")}>RETURN TO SHOP</Link>
          {/* <div className={cx("card-update", "card-action")}>UPDATE CART</div> */}
        </footer>
      </section>

      {/* Card total */}
      <section className={cx("card-total")}>
        {/* Header */}
        <header className={cx("card-header")}>
          <h2 className={cx("card-heading")}>Card Totals</h2>
        </header>
        {/* Content */}
        <div className={cx("card-content")}>
          {/* Item */}
          <div className={cx("item")}>
            <span className={cx("card-title")}>Sub-total</span>
            <span className={cx("card-name")}>${subTotal}</span>
          </div>
          {/* Item */}
          <div className={cx("item")}>
            <span className={cx("card-title")}>Shipping</span>
            <span className={cx("card-name")}>Free</span>
          </div>
          {/* Item */}
          <div className={cx("item")}>
            <span className={cx("card-title")}>Discount</span>
            <span className={cx("card-name")}>${discount.current}</span>
          </div>
          {/* Item */}
          <div className={cx("item")}>
            <span className={cx("card-title")}>Tax</span>
            <span className={cx("card-name")}>${tax.current}</span>
          </div>
        </div>
        {/* Footer */}
        <footer className={cx("card-footer")}>
          <div className={cx("card-title")}>
            <span className={cx("card-name")}>Total</span>
            <span className={cx("card-name")}>
              ${subTotal + ship.current + discount.current + tax.current} USD
            </span>
          </div>
          <div className={cx("card-action")}>Proceed to Checkout</div>
        </footer>
      </section>
    </section>

    );
}

export default ViewCart;
