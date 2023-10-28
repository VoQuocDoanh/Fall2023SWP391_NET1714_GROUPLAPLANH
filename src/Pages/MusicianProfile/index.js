
import classNames from "classnames/bind";
import styles from "./MusicianProfile.module.scss";
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
function MusicianProfile() {
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
                    <form style={{marginTop: 20}}>
                        <table className={classNames("profile-2")}>
                            <div className={cx("part0")}>
                                <td>
                                    <div className={cx("text-username0")}>
                                        <td >
                                            <label className={cx("login-text")}>Full Name</label>
                                        </td>
                                        <div>
                                            <input className={cx("input-username0")} type="text" placeholder value={search} onChange={handleSearch} />
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
                                        <input className={cx("input-username")} type="text" placeholder value={ten} onChange={handleSearch1} />
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
                                    <input className={cx("input-phonenumber")} type="text" placeholder value={ten} onChange={handleSearch1} />
                                </div>
                            </div>
                            <div className={cx("part3")}>
                                <td className={cx("phone-number")}>
                                    Genre
                                </td>
                                <div className={cx("placeholder-ten")}>
                                    <input className={cx("input-phonenumber")} type="text" placeholder value={genre} onChange={handleSearch2} />
                                </div>
                            </div>
                            <div className={cx("part3")}>
                                <td className={cx("phone-number")}>
                                    Year of operation
                                </td>
                                <div className={cx("placeholder-ten")}>
                                    <input className={cx("input-phonenumber")} type="text" placeholder value={year} onChange={handleSearch3} />
                                </div>
                            </div>
                            <div className={cx("part3")}>
                                <td className={cx("phone-number")}>
                                    Prize
                                </td>
                                <div className={cx("placeholder-ten")}>
                                    <input className={cx("input-phonenumber")} type="text" placeholder value={prize} onChange={handleSearch4} />
                                </div>
                            </div>
                            <div className={cx("part4")} style={{marginLeft: 65}}>
                                <td className={cx("sex")}>
                                    Sex
                                </td>
                                <td>
                                    <div className={cx("sex-button")}>
                                        <div className={cx("stardus-radio-group")}>
                                            <div className={cx("footer")}>
                                                <div className={cx("footer-left")}>
                                                    <input
                                                        type="radio"
                                                        id="remember"
                                                        name="rememeber"
                                                        value="check"
                                                        checked={isChecked}
                                                        onChange={() => setIsChecked(!isChecked)}
                                                        className={cx("input-check")}
                                                    />
                                                    <label htmlFor="remember" className={cx("text")}>
                                                        Male
                                                    </label>
                                                </div>
                                            </div>
                                            <div className={cx("footer")}>
                                                <div className={cx("footer-left")}>
                                                    <input
                                                        type="radio"
                                                        id="remember"
                                                        name="rememeber"
                                                        value="check"
                                                        checked={isChecked}
                                                        onChange={() => setIsChecked(!isChecked)}
                                                        className={cx("input-check")}
                                                    />
                                                    <label htmlFor="remember" className={cx("text")}>
                                                        Female
                                                    </label>
                                                </div>
                                            </div>
                                            <div className={cx("footer")}>
                                                <div className={cx("footer-left")}>
                                                    <input
                                                        type="radio"
                                                        id="remember"
                                                        name="rememeber"
                                                        value="check"
                                                        checked={isChecked}
                                                        onChange={() => setIsChecked(!isChecked)}
                                                        className={cx("input-check")}
                                                    />
                                                    <label htmlFor="remember" className={cx("text")}>
                                                        Other
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </div>
                            <div className={cx("part5")}>
                                <td className={cx("save-button")}>
                                </td>
                                <td className={cx("button-type")}>
                                    <button type="button" className={cx("button-save-details")} aria-disabled="false" >Edit</button>
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
                                <td style={{marginLeft: 10}}>    
                                    Musician
                                </td>
                            </div>
                            <input className={cx("img-click")} style={{marginLeft: -30}} type="file" accept=".jpg,.jpeg,.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MusicianProfile;