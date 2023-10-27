import React, { useContext } from 'react'
import styles from "./Invoice.module.scss";
import classNames from "classnames/bind";
import useToken from '../../authorization/useToken';
import jwtDecode from 'jwt-decode';
import { ShopContext } from '../../context/shop-context';
import { Link, useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function Invoice() {
    const { getTotalCartAmount } = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()
    const token = useToken()
    const navigate = useNavigate()
    let beatInvoice = JSON.parse(sessionStorage.getItem("beatInvoice"))
    console.log(beatInvoice)
    let fullName = ""
    let mail = ""
    let phoneNumber = ""
    if (token) {
        fullName = jwtDecode(token).fullName
        mail = jwtDecode(token).mail
        phoneNumber = jwtDecode(token).phoneNumber
    }

    const handleCheckout = () =>{
        navigate("/listbeat")
    }

    return (
        <div className={cx('Invoice')}>
            <div className={cx('header')}>
                <h1>YOURCHORDS</h1>
                <h2><b>Thank you for your order</b></h2>
            </div>

            <footer className={cx("before-body")}>
                    <div className={cx("before-body-1", "card-action")} onClick={() => handleCheckout()}>RETURN TO SHOP</div>
                    {/* <div className={cx("card-update", "card-action")}>UPDATE CART</div> */}
                </footer>
            <div className={cx('body')}>
                <div className={cx('text-body-1')}>
                    <h3><b>ORDER NUMBER:</b></h3>
                    <h3>3008491675</h3>
                    <h3><b>CUSTOMER: </b></h3>
                    <h3>{fullName}</h3>
                    <h3><b>PHONE NUMBER: </b></h3>
                    <h3>{phoneNumber}</h3>
                </div>
                <div className={cx('text-body-2')}>
                    <h3><b>PAYMENT METHOD: </b></h3>
                    <h3>PayPal</h3>
                    <h3>**** **** **** 4012</h3>
                    <h3><b>EMAIL: </b></h3>
                    <h3>{mail}</h3>
                    <h3><b>TOTAL: </b>{totalAmount}$</h3>
                    
                </div>
            </div>
            <div className={cx("wrapper-viewBeat")}>
                <div className={cx('text')}>
                    <h1>List Order</h1>
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
                        {beatInvoice.map((item, index) => {
                                    return(
                                    <tr key={index}>
                                        <td>{item.beatName}</td>
                                        <td>POP</td>
                                        <td>Minh Hien</td>
                                        <td>{item.price}$</td>
                                    </tr>)                                                                                       
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Invoice
