import React, { useContext } from 'react'
import styles from "./Invoice.module.scss";
import classNames from "classnames/bind";
import useToken from '../../authorization/useToken';
import jwtDecode from 'jwt-decode';
import { ShopContext } from '../../context/shop-context';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const DATA = [
    {

        selectedbeats: "FANTASTIC BABY",
        amount: "$50",
        quantity: "1",
        total: "$50",

    },
    {

        selectedbeats: "BANG BANG BANG",
        amount: "$75",
        quantity: "3",
        total: "$225",
    },
    {

        selectedbeats: "LAST DANCE",
        amount: "$80",
        quantity: "2",
        total: "$160",
    },
    {

        selectedbeats: "HARU HARU",
        amount: "$45",
        quantity: "4",
        total: "$180",
    },
    {

        selectedbeats: "FXXK IT",
        amount: "$90",
        quantity: "6",
        total: "$540",
    },


];

function Invoice() {
    const { cartItems, getTotalCartAmount, checkOut, listBeatContext } = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()
    const token = useToken()
    let fullName = ""
    let mail = ""
    let phoneNumber = ""
    if (token) {
        fullName = jwtDecode(token).fullName
        mail = jwtDecode(token).mail
        phoneNumber = jwtDecode(token).phoneNumber
    }

    const handleDelete = (id) => {
        console.log(id);
    };

    const handleUpdate = (id) => {
        console.log(id);
    };

    return (
        <div className={cx('Invoice')}>
            <div className={cx('header')}>
                <h1>YOURCHORDS</h1>
                <h2><b>Thank you for your order</b></h2>
            </div>

            <footer className={cx("before-body")}>
                <Link to="/listbeat" className={cx("before-body-1", "card-action")}>RETURN TO SHOP</Link>
                {/* <div className={cx("card-update", "card-action")}>UPDATE CART</div> */}
            </footer>
            <div className={cx('body')}>
                <div className={cx('icon-check')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" viewBox="0 0 130 130" fill="none">
                        <path d="M65 0C29.12 0 0 29.12 0 65C0 100.88 29.12 130 65 130C100.88 130 130 100.88 130 65C130 29.12 100.88 0 65 0ZM47.385 92.885L24.05 69.55C23.4482 68.9482 22.9709 68.2338 22.6452 67.4475C22.3195 66.6613 22.1519 65.8185 22.1519 64.9675C22.1519 64.1165 22.3195 63.2737 22.6452 62.4875C22.9709 61.7012 23.4482 60.9868 24.05 60.385C24.6518 59.7832 25.3662 59.3059 26.1525 58.9802C26.9387 58.6545 27.7815 58.4869 28.6325 58.4869C29.4836 58.4869 30.3263 58.6545 31.1125 58.9802C31.8988 59.3059 32.6132 59.7832 33.215 60.385L52 79.105L96.72 34.385C97.9353 33.1696 99.5837 32.4869 101.302 32.4869C103.021 32.4869 104.67 33.1696 105.885 34.385C107.1 35.6004 107.783 37.2487 107.783 38.9675C107.783 40.6863 107.1 42.3346 105.885 43.55L56.55 92.885C55.9487 93.4876 55.2344 93.9656 54.4481 94.2918C53.6617 94.618 52.8188 94.7859 51.9675 94.7859C51.1162 94.7859 50.2733 94.618 49.4869 94.2918C48.7006 93.9656 47.9863 93.4876 47.385 92.885Z" fill="#699BF7" />
                    </svg>
                </div>
                <div className={cx('text-body-1')}>
                    <h3><b>ORDER NUMBER:</b>3008491675</h3>
                    <h3><b>CUSTOMER: </b></h3>
                    <h3>{fullName}</h3>
                    <h3><b>PHONE NUMBER: </b></h3>
                    <h3>{phoneNumber}</h3>
                </div>
                <div className={cx('text-body-2')}>
                    <h3><b>PAYMENT METHOD: </b>PayPal **** **** **** 4012</h3>
                    <h3><b>EMAIL: </b></h3>
                    <h3>{mail}</h3>
                    <h3><b>TOTAL: </b>{totalAmount}$</h3>

                </div>
            </div>
            <div className={cx("wrapper-viewBeat")}>
                <div className={cx('text')}>
                    <h1><b>List Order</b></h1>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>PROUDUCT</th>
                            <th>GENRE</th>
                            <th>AUTHOR</th>
                            <th>PRICE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listBeatContext.map((item, index) => {
                            console.log(listBeatContext)
                            if (cartItems) {
                                if (cartItems[item.id] !== 0) {
                                    return (
                                        <tr key={index}>
                                            <td>{item.beatName}</td>
                                            <td>POP</td>
                                            <td>Minh Hien</td>
                                            <td>{item.price}$</td>
                                        </tr>)
                                }

                            }

                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Invoice
