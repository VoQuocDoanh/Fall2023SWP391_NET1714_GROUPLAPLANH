// import { Link } from "react-router-dom";
// import classNames from "classnames/bind";
// import React, { useEffect, useMemo, useState } from "react";
// import styles from "./ViewCart.module.scss";
// import { Button } from "@mui/material";

// const cx = classNames.bind(styles);


// const DATA = [

//     {

//         product: "Beat 5",
//         price: "180.00$",
//         quantity: "Genre",
//         total: "1800.00$",
//         quantity: ""

//     },
//     {

//         product: "Beat 5",
//         price: "180.00$",
//         quantity: "Genre",
//         total: "1800.00$",
//         quantity: ""

//     },
//     {

//         product: "Beat 5",
//         price: "180.00$",
//         quantity: "Genre",
//         total: "1800.00$",
//         quantity: ""

//     },
//     {

//         product: "Beat 5",
//         price: "180.00$",
//         quantity: "Genre",
//         total: "1800.00$",
//         quantity: ""

//     },
//     {

//         product: "Beat 5",
//         price: "180.00$",
//         quantity: "Genre",
//         total: "1800.00$",
//         quantity: ""

//     },


// ];

// function ViewCart() {
//     const handleDelete = (id) => {
//         console.log(id);
//     };

//     const handleUpdate = (id) => {
//         console.log(id);
//     };
//     const [searchBeat, setSearchBeat] = useState("");
//     const [listBeat, setListBeat] = useState(DATA);

//     const handleSearchBeat = (event) => {
//         setSearchBeat(event.target.value);

//     }
//     // const [quantity, setQuantity] = useState(1);
//     // //Quantity Decrement,Increment
//     // const handleDecrement = () => {
//     //     if (quantity > 1) {
//     //         setQuantity(prevCount => prevCount - 1);
//     //     }

//     // }
//     // const handleIncrement = () => {
//     //     if (quantity < 10) {
//     //         setQuantity(prevCount => prevCount + 1);
//     //     }

//     // }



//     return (

//         <div className={cx("wrapper-viewBeat")}>
//             <div className={cx("header-text")}>
//                 <h1 className={cx("login-wrapper")}>YOUR BAG</h1>
//                 <Link to="/listbeat" className={cx("continue-shopping")}>Continue Shopping</Link>
//             </div>
//             <div className={cx("viewcart-header")}>
//                 <div className={cx("footer-wrapper")}>
//                 <div className={cx("viewcart-1")}>
//                     <div className={cx("navigation-2")}>
//                           <div className={cx("viewcart-img")}>
//                           <img className={cx("chords-details-img")} src={require("../../assets/images/Chords/Rectangle 23.png")}/>
//                           </div>
//                         </div>
//                         <div className={cx("viewcart-details")}>
//                             <div className={cx("navigation-2")}>
//                                 <div className={cx("nav-item")}>NameBeat</div>
//                                 <div className={cx("nav-item")}>oalayonthebeat</div>
//                             </div>
//                             <div className={cx("navigation-2")}>
//                             <div className={cx("nav-item")}>Standar</div>
//                             </div>
//                             <div className={cx("navigation-2", "footer-contact")}>
//                                 <div className={cx("title-item")}>Contact</div>
//                                 <div className={cx("box-contact")}>
//                                     <div className={cx("contact-item")}>29.5$</div>
//                                 </div>
//                             </div>
//                             <div className={cx("navigation-2", "footer-contact")}>
//                                 <div className={cx("icon-item")}>Social</div>
//                             </div>
//                         </div>
//                 </div>
//                 <div className={cx("viewcart-2")}>
//                     <div className={cx("navigation-2")}>
//                           <div className={cx("viewcart-img")}>
//                           <img className={cx("chords-details-img")} src={require("../../assets/images/Chords/Rectangle 23.png")}/>
//                           </div>
//                         </div>
//                         <div className={cx("viewcart-details")}>
//                             <div className={cx("navigation-2")}>
//                                 <div className={cx("nav-item")}>NameBeat</div>
//                                 <div className={cx("nav-item")}>oalayonthebeat</div>
//                             </div>
//                             <div className={cx("navigation-2")}>
//                             <div className={cx("nav-item")}>Standar</div>
//                             </div>
//                             <div className={cx("navigation-2", "footer-contact")}>
//                                 <div className={cx("title-item")}>Contact</div>
//                                 <div className={cx("box-contact")}>
//                                     <div className={cx("contact-item")}>29.5$</div>
//                                 </div>
//                             </div>
//                             <div className={cx("navigation-2", "footer-contact")}>
//                                 <div className={cx("icon-item")}>Social</div>
//                             </div>
//                         </div>
//                 </div>
//                 </div>
                
//             </div>
//         </div>


//     );
// }

// export default ViewCart;



//  Cart moi
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import React, { useEffect, useMemo, useState } from "react";
import styles from "./ViewCart.module.scss";
import { Button } from "@mui/material";

const cx = classNames.bind(styles);


const DATA = [

    {
        id: "1",
        product: "Beat 5",
        beattype: "Ballad",
        musician: "QuocDoanh",
        price: "180.00$",
        options: ""

    },
    {
        id: "2",
        product: "Beat 5",
        beattype: "Ballad",
        musician: "QuocDoanh",
        price: "180.00$",
        options: ""

    },
    {
        id: "3",
        product: "Beat 5",
        beattype: "Ballad",
        musician: "QuocDoanh",
        price: "180.00$",
        options: ""

    },
    {
        id: "4",
        product: "Beat 5",
        beattype: "Ballad",
        musician: "QuocDoanh",
        price: "180.00$",
        options: ""

    },
    {
        id: "5",
        product: "Beat 5",
        beattype: "Ballad",
        musician: "QuocDoanh",
        price: "180.00$",
        options: ""

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
                        <th>Beat Type</th>
                        <th>Musician</th>
                        <th>Price</th>
                        <th>Options</th>


                    </tr>
                </thead>
                <tbody>
                    {listBeat.map((item, index) => (
                        <tr key={index}>

                            <td>
                                <div className={cx("chord-img-trending")}>
                                    <div className={cx("text-trending")}>


                                        <div className={cx("trending-text")}>
                                            <img className={cx("trending-ellipse")} src={require("../../assets/images/Chords/Rectangle 18.png")}>
                                            </img>
                                            <div className={cx("text-role")}>
                                                <span className={cx("text-ellipse3")}>
                                                    Beat qua hay
                                                </span>
                                                <div className={cx("text-ellipse2")}>
                                                    Musician
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </td>
                            <td>{item.beattype}</td>
                            <td>{item.musician}</td>
                            <td>{item.price}</td>
                            {/* <td>
                                <div className={cx("input-group")}>
                                    <button variant="contained" type="button" onClick={handleDecrement} className={cx("input-group-text-1")}>-</button>
                                    <div className="form-text-center">{quantity}</div>
                                    <button variant="contained" type="button" onClick={handleIncrement} className={cx("input-group-text-2")}>+</button>
                                </div>
                           </td> */}

                            <td className={cx("button-options")}>
                                <button className={cx("button-item")} onClick={() => handleDelete(item.product)}>DELETE</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={cx("total")}>
                <h3 className="total-text">Total</h3>
                <span>900.00$</span>
                <h3 className={cx("purchase-button")}>Purchase</h3>
            </div>
        </div>


    );
}

export default ViewCart;
