
import classNames from "classnames/bind";
import styles from "./MyProfile.module.scss";
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
function MyProfile() {
    const [search, setSearch] = useState("");
    const [list, setList] = useState(DATA);
    const [play, setPlay] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [ten, setTen] = useState("");
    const handleSearch = (e) => {
        setSearch(e.target.value);
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
                    <form>
                        <table className={classNames("profile-2")}>
                        <div className={cx("part0")}>
                                <td >
                                    <label className={cx("login-text")}>Full Name</label>
                                </td>
                                <td>
                                    <div className={cx("text-username0")}>
                                        <div>
                                            <input className={cx("input-username0")} type="text" placeholder value={search} onChange={handleSearch} />
                                        </div>
                                    </div>
                                </td>
                            </div>
                            <div className={cx("part1")}>
                                <td>
                                    <label className={cx("text-name")}>Address</label>
                                </td>
                                <td className={cx("")}>
                                    <div className={cx("placeholder-ten")}>
                                        <input className={cx("input-username")} type="text" placeholder value={ten} onChange={handleSearch} />
                                    </div>
                                </td>
                            </div>
                            <div className={cx("part2")}>
                                <td>
                                    <div className={cx("email-text")}>
                                        Email:    do**********@fpt.edu.vn
                                    </div>
                                </td>
                                <button className={cx("email-button")}>Change</button>
                            </div>
                            <div className={cx("part3")}>
                                <td className={cx("phone-number")}>
                                    Phone number
                                </td>
                                <td className={cx("button-phone")}>
                                    <div className={cx("button-details")}>
                                        <div className="space"></div>
                                        <button className={cx("add-phonenumber")}>Add</button>
                                    </div>
                                </td>
                            </div>
                            <div className={cx("part4")}>
                                <td className={cx("Sex")}>
                                    Sex
                                </td>
                                <td>
                                    <div className={cx("sex-button")}>
                                        <div className={cx("stardus-radio-group")}>
                                            <div className={cx("footer")}>
                                                <div className={cx("footer-left")}>
                                                    <input
                                                        type="checkbox"
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
                                                        type="checkbox"
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
                                                        type="checkbox"
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
                                    <button type="button" className={cx("button-save-details")} aria-disabled="false" >Save</button>
                                </td>
                            </div>
    
                        </table>
                    </form>
                </div>
                <div className={cx("line")}/>
                <div className={cx("img-user-div")}>
                    <div className={cx("img-user-div1")}>
                        <div className={cx("img-user-div2")}>
                            <div className={cx("img-user-div3")}>
                                <img className={cx("box-img")} alt="" />
                            </div>
                            <input className={cx("img-click")} type="file" accept=".jpg,.jpeg,.png"  />
                        </div>
    
                    </div>
    
                </div>
            </div>
        </div>
    );
}

export default MyProfile;