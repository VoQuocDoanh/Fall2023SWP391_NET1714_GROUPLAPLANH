import React from 'react'
import classNames from "classnames/bind";
import styles from "./ListOrderBox.module.scss";
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);


function ListOrderBox({id, beatName, cusName, msName, date}) {
    const dateReleasing = new Date(date)
    const month = dateReleasing.getUTCMonth() + 1
    const day = dateReleasing.getUTCDate()
    const year = dateReleasing.getUTCFullYear()
    return (
        <div className={cx("list-box")}>
            <div className={cx("card-item")}>
                <img className={cx("box-img")} src={require("../../assets/images/Other/beat-trong-am-nhac-la-gi1.jpg")} alt="anh" />
            </div>
            <div className={cx("content")}>
                {/* Content left */}
                <div className={cx("content-left")}>
                    <h2 className={cx("name-beat")}> <Link style={{ color: 'white' }} to={`/orderbeatdetails/${id}`}>{beatName}</Link></h2>
                    <span style={{ marginTop: 12, fontWeight: 500, fontSize: 20 }} className={cx("type-beat")}>Customer: <div style={{fontSize:17}}>{cusName}</div></span><br />
                    <span style={{ marginTop: 12, fontWeight: 500, fontSize: 20 }} className={cx("type-beat")}>Musician: <div style={{fontSize:17}}>{msName}</div></span>
                    <div style={{ marginTop: 12 }} className={cx("footer")}>
                        <span className={cx("price")}>{day + "/" + month + "/" + year}</span>
                    </div>
                </div>
                {/* Content right  */}
            </div>
            {/* <div className={cx("control")}>
            <div className={cx("btn", "btn-prev")}>
                <i className="fas fa-step-backward"></i>
                <FontAwesomeIcon icon={faStepBackward} />
            </div>
            <div className={cx("btn", "btn-toggle-play")} onClick={() => setPlay(!play)}>
                <FontAwesomeIcon icon={faPause} className={cx("icon-pause", "icon", {
                    "play": play === true,
                })} />
                <FontAwesomeIcon icon={faPlay} className={cx("icon-play", "icon", {
                    "play": play === false,
                })} />
            </div>
            <div className={cx("btn", "btn-next")}>
                <FontAwesomeIcon icon={faStepForward} />
            </div>

        </div> */}
        </div>);
}

export default ListOrderBox