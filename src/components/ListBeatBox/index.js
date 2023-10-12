import classNames from "classnames/bind";
import styles from "./ListBeatBox.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPlay, faPause ,faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { Button, colors } from "@mui/material";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { red } from "@mui/material/colors";


const cx = classNames.bind(styles);

function ListBeatBox({id, name, genre, price, play, setPlay }) {
    const {addToCart, cartItems} = useContext(ShopContext)
    return (<div className={cx("list-box")}>
        <div className={cx("card-item")}>
                <div onClick={() => setPlay(!play)}>
                    <FontAwesomeIcon icon={faPlay} className={cx("play-btn", "play", {
                        "playing": play === true
                    })} />
                    <FontAwesomeIcon icon={faPause} className={cx("play-btn", "pause", {
                        "playing": play === false
                    })} />
                </div>
                <img className={cx("box-img")} src={require("../../assets/images/Other/beat-trong-am-nhac-la-gi1.jpg")} alt="anh" />
            </div>
        <div className={cx("content")}>
            {/* Content left */}
            <div className={cx("content-left")}>
                <h2 className={cx("name-beat")}>{name}</h2>
                <span className={cx("type-beat")}>Minh Hien</span>
                <FontAwesomeIcon className={cx("check")} icon={faCheckCircle}/>
                <div className={cx("footer")}>
                    <span className={cx("price")}>${price}</span>
                    <div className={cx("number-sell")}>
                        <span className={cx("box")}></span>
                        <span className={cx("number")}>50</span>
                    </div>
                    <span className={cx("like")}>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <span className={cx("number")}>50</span>
                    </span>
                </div>
            </div>
            {/* Content right  */}
            <div className={cx("content-right")}>
            <Button className={cx("action")} onClick={() => addToCart(id)}><FontAwesomeIcon icon={faCartShopping} className={cx("shop")} /></Button>
            
            </div>
        </div>
    </div>);
}
export default ListBeatBox;