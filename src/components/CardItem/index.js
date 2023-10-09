import classNames from "classnames/bind";
import styles from "./CardItem.module.scss";
const cx = classNames.bind(styles);

function CartItem({
  index,
  id,
  img,
  name,
  price,
  quantity,
  remove,
  increase,
  decrease,
}) {
  return (
    <div className={cx("card-wrapper")}>
      {/* Card product */}
      <div className={cx("card-product")}>
        <svg
          onClick={() => remove(id)}
          className={cx("remove")}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
            stroke="#929FA5"
            // stroke-width="1.5"
            // stroke-miterlimit="10"
          />
          <path
            d="M15 9L9 15"
            stroke="#929FA5"
            // stroke-width="1.5"
            // stroke-linecap="round"
            // stroke-linejoin="round"
          />
          <path
            d="M15 15L9 9"
            stroke="#929FA5"
            // stroke-width="1.5"
            // stroke-linecap="round"
            // stroke-linejoin="round"
          />
        </svg>
        <img src={img} className={cx("card-img")} alt="anh dep" />
        <h2 className={cx("card-name")}>{name}</h2>
      </div>
      {/* Card price */}
      <div className={cx("card-price")}>${price}</div>
      {/* Card quantity */}
      {/* <div className={cx("card-quantity")}>
        <span className={cx("minus")} onClick={() => decrease(index)}>
          -
        </span>
        <span className={cx("number")}>{quantity}</span>
        <span className={cx("plus")} onClick={() => increase(index)}>
          +
        </span>
      </div> */}
      {/* Card total */}
      <div className={cx("card-total")}>${price * quantity}</div>
    </div>
  );
}

export default CartItem;
