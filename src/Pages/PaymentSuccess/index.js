import React, { useContext, useEffect } from 'react'
import styles from "./PaymentSuccess.module.scss";
import classNames from "classnames/bind";
import useToken from '../../authorization/useToken';
import jwtDecode from 'jwt-decode';
import { ShopContext } from '../../context/shop-context';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
const cx = classNames.bind(styles);

function Invoice() {
    const {checkOut } = useContext(ShopContext)
    const totalAmount = JSON.parse(localStorage.getItem("totalAmount"))
    console.log(totalAmount)
    const token = useToken()
    const navigate = useNavigate()
    let beatInvoice = JSON.parse(localStorage.getItem("beatInvoice"))
    console.log(beatInvoice)
    let fullName = ""
    let mail = ""
    let phoneNumber = ""
    if (token) {
        fullName = jwtDecode(token).fullName
        mail = jwtDecode(token).mail
        phoneNumber = jwtDecode(token).phoneNumber
    }
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const paymentId = searchParams.get("paymentId")
  const PayerID = searchParams.get("PayerID")
  console.log(paymentId)
  console.log(PayerID)
  const handleActivation = async () => {
    await axios.post(`http://localhost:8080/api/v1/paypal/user/${jwtDecode(token).sub}/success`, {paymentId: paymentId, payerID: PayerID, beatId: JSON.parse(localStorage.getItem("beatCheckout"))})
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() =>{
    handleActivation()
  },[])
  useEffect(() => {
    checkOut()
  },[])

    

    return (
        <div className={cx('Invoice')}>
            <div className={cx('header')}>
                <h1>YOURCHORDS</h1>
                <h2><b>Thank you for your order</b></h2>
            </div>

            <footer className={cx("before-body")}>
                    <Link to={"/listbeat"}><div className={cx("before-body-1", "card-action")}>RETURN TO SHOP</div></Link>
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
                                        <td>
                                        {item.genres.map((genre) => {
                                          return <div>{genre.name}</div>
                                        })}
                                        </td>
                                        <td>{item.user.fullName}</td>
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
