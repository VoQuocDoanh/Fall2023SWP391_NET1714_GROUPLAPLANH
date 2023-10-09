import classNames from "classnames/bind";
import styles from "./ListBeatBox.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faThumbsUp } from "@fortawesome/free-regular-svg-icons";


const cx = classNames.bind(styles);

function ListBeatBox({name, type, price, member}) {
    return (<div className={cx("list-box")}>
        <img className={cx("box-img")} src={require("../../assets/images/Trending/beautiful-girl-sitting-down-playing-the-piano.webp")} alt="anh" />
        <div className={cx("content")}>
            {/* Content left */}
            <div className={cx("content-left")}>
                <h2 className={cx("name-beat")}>{name}</h2>
                <span className={cx("type-beat")}>{type}</span>
                <div className={cx("footer")}>
                    <span className={cx("price")}>${price}</span>
                    <div className={cx("number-sell")}>
                        <span className={cx("box")}></span>
                        <span className={cx("number")}>{member}</span>
                    </div>
                    <span className={cx("like")}>
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </span>
                </div>
            </div>
            {/* Content right  */}
            <div className={cx("content-right")}>
                <FontAwesomeIcon icon={faCartShopping} className={cx("shop")}/>
                <FontAwesomeIcon icon={faHeart} className={cx("follow")}/>
            </div>
        </div>
    </div>);
}
export default ListBeatBox;