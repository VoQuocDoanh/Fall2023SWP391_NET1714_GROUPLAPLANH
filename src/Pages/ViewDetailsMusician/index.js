
import classNames from "classnames/bind";
import styles from "./ViewDetailsMusicain.module.scss";
import { Link } from "react-router-dom";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { faChevronLeft, faChevronRight, faPause, faPlay, faPlayCircle, faRedo, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";
import { Button } from "bootstrap";
const cx = classNames.bind(styles);
const DATA = [
    {

        name: "abc",
    },
]
function ViewDetailsMusician() {
    const [search, setSearch] = useState("");
    const [list, setList] = useState(DATA);
    const [play, setPlay] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [genre, setGenre] = useState("");
    const [ten, setTen] = useState("");
    const [prize, setPrize] = useState("");
    const [year, setYear] = useState("");
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    const handleSearch1 = (e) => {
        setTen(e.target.value);
    }
    const handleSearch2 = (e) => {
        setGenre(e.target.value);
    }
    const handleSearch3 = (e) => {
        setYear(e.target.value);
    }
    const handleSearch4 = (e) => {
        setPrize(e.target.value);
    }


    useEffect(() => {
        const data = DATA.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
        setList(data);
    }, [search])
    useEffect(() => {
        const data = DATA.filter((item) => item.name.toLowerCase().includes(ten.toLowerCase()));
        setList(data);
    }, [ten])
    return (
        <div>
            <div>
                <h2 className={cx("title-myprofile")}>
                    My Profile
                </h2>
            </div>
            <div className={cx("profile")}>
                <div className={cx("volt8A")}>
                    <form style={{ marginTop: 20 }}>
                        <table className={classNames("profile-2")}>
                            <div className={cx("part0")}>
                                <td>
                                    <div className={cx("text-username0")}>
                                        <td >
                                            <label className={cx("login-text")}>Full Name</label>
                                        </td>
                                        <div>
                                            <input className={cx("input-username0")} type="text" placeholder value="Vo Quoc Doanh" onChange={handleSearch} />
                                        </div>
                                    </div>
                                </td>
                            </div>
                            <div className={cx("part1")}>
                                <td className={cx("")}>
                                    <td>
                                        <label className={cx("text-name")}>Address</label>
                                    </td>
                                    <div className={cx("placeholder-ten")}>
                                        <input className={cx("input-username")} type="text" placeholder value="Thanh pho Ho Chi Minh" onChange={handleSearch1} />
                                    </div>
                                </td>
                            </div>
                            <div className={cx("part2")}>
                                <td>
                                    <div className={cx("email-text")}>
                                        Email:
                                    </div>
                                    <div className={cx("email-change")}>
                                        do******@fpt.edu.vn
                                    </div>
                                    <button className={cx("email-button")}>Change</button>
                                </td>

                            </div>
                            <div className={cx("part3")}>
                                <td className={cx("phone-number")}>
                                    Phone number
                                </td>
                                <div className={cx("placeholder-ten")}>
                                    <input className={cx("input-phonenumber")} type="text" placeholder value="095-XXX-XXX-XXX" onChange={handleSearch1} />
                                </div>
                            </div>
                            <div className={cx("part3")}>
                                <td className={cx("phone-number")}>
                                    Genre
                                </td>
                                <div className={cx("placeholder-ten")}>
                                    <input className={cx("input-phonenumber")} type="text" placeholder value="Ballad" onChange={handleSearch2} />
                                </div>
                            </div>
                            <div className={cx("part3")}>
                                <td className={cx("phone-number")}>
                                    Year of operation
                                </td>
                                <div className={cx("placeholder-ten")}>
                                    <input className={cx("input-phonenumber")} type="text" placeholder value="3 years" onChange={handleSearch3} />
                                </div>
                            </div>
                            <div className={cx("part3")}>
                                <td className={cx("phone-number")}>
                                    Prize
                                </td>
                                <div className={cx("placeholder-ten")}>
                                    <input className={cx("input-phonenumber")} type="text" placeholder value="Music Nobel Prize" onChange={handleSearch4} />
                                </div>
                            </div>
                            <div className={cx("part3")}>
                                <td className={cx("phone-number")}>
                                    Sex
                                </td>
                                <div className={cx("placeholder-ten")}>
                                    <input className={cx("input-phonenumber")} type="text" placeholder value="Male" onChange={handleSearch4} />
                                </div>
                            </div>
                            <div className={cx("part5")}>
                                <td className={cx("save-button")}>
                                </td>
                                <td className={cx("button-type")}>
                                    <button type="button" className={cx("button-save-details")} aria-disabled="false" >Ban</button>
                                </td>
                                <td className={cx("button-type")}>
                                    <button type="button" className={cx("button-save-details2")} aria-disabled="false" >Unban</button>
                                </td>
                            </div>
                        </table>
                    </form>
                </div>
                <div className={cx("line")} />
                <div className={cx("img-user-div")}>
                    <div className={cx("img-user-div1")}>
                        <div className={cx("img-user-div2")}>
                            <div className={cx("img-user-div3")}>
                                <img className={cx("box-img")} alt="" />
                            </div>
                            {/* <input className={cx("img-click")} type="file" accept=".jpg,.jpeg,.png" /> */}
                            <div className={cx("info-user")}>
                                <td>
                                    User Name
                                </td>
                                <td style={{ marginLeft: 10 }}>
                                    Musician
                                </td>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewDetailsMusician;