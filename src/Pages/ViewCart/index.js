import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import React, { useEffect, useMemo, useState } from "react";
import styles from "./ViewCart.module.scss";
import { Button } from "@mui/material";

const cx = classNames.bind(styles);


const DATA = [
    
        {
    
            product: "Beat 5",
            price: "180.00$",
            quantity: "Genre",
            total: "1800.00$",
            quantity: ""
    
        },
        {
    
            product: "Beat 5",
            price: "180.00$",
            quantity: "Genre",
            total: "1800.00$",
            quantity: ""
    
        },
        {
    
            product: "Beat 5",
            price: "180.00$",
            quantity: "Genre",
            total: "1800.00$",
            quantity: ""
    
        },
        {
    
            product: "Beat 5",
            price: "180.00$",
            quantity: "Genre",
            total: "1800.00$",
            quantity: ""
    
        },
        {
    
            product: "Beat 5",
            price: "180.00$",
            quantity: "Genre",
            total: "1800.00$",
            quantity: ""
    
        },
    

];

function ViewCart() {
    const handleDelete = (id) => {
        console.log(id);
    };

    const handleUpdate = (id) => {
        console.log(id);
    };
    const [searchBeat, setSearchBeat] = useState("");
    const [listBeat, setListBeat] = useState(DATA);

    const handleSearchBeat = (event) => {
        setSearchBeat(event.target.value);

    }
    const [quantity, setQuantity] = useState(1);
    //Quantity Decrement,Increment
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevCount => prevCount - 1);
        }

    }
    const handleIncrement = () => {
        if (quantity < 10) {
            setQuantity(prevCount => prevCount + 1);
        }

    }



    return (

        <div className={cx("wrapper-viewBeat")}>
            <div className={cx("header-text")}>
                <h1 className={cx("login-wrapper")}>YOUR BAG</h1>
                <Link to="/listbeat" className={cx("continue-shopping")}>Continue Shopping</Link>
            </div>
            <table className={cx("list-beat")}>
                <thead>
                    <tr className={cx("header-table-text")}>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>


                    </tr>
                </thead>
                <tbody>
                    {listBeat.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <div className={cx("chord-img-trending")}>
                                    <div className={cx("text-trending")}>


                                        <div className={cx("trending-text")}>
                                            <img className={cx("trending-ellipse")} src={require("../../assets/images/Other/pod-talk-logo.png")}>
                                            </img>
                                            <div className={cx("text-role")}>
                                                <span className={cx("text-ellipse3")}>
                                                    Beat qua hay
                                                </span>
                                                <div className={cx("text-ellipse1")}>
                                                    Type: Ballad
                                                </div>
                                                <div className={cx("text-ellipse2")}>
                                                    Musician
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>{item.price}</td>
                           {/* <td>
                                <div className={cx("input-group")}>
                                    <button variant="contained" type="button" onClick={handleDecrement} className={cx("input-group-text-1")}>-</button>
                                    <div className="form-text-center">{quantity}</div>
                                    <button variant="contained" type="button" onClick={handleIncrement} className={cx("input-group-text-2")}>+</button>
                                </div>
                           </td> */}
                           
                            <td>{item.total}</td>

                        </tr>
                    ))}
                </tbody>
            </table>

        </div>


    );
}

export default ViewCart;
