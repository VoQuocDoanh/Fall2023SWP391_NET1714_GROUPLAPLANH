
import classNames from "classnames/bind";
import styles from "./AdminProfile.module.scss";
import { Link } from "react-router-dom";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { faChevronLeft, faChevronRight, faPause, faPlay, faPlayCircle, faRedo, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";
import { Button } from "bootstrap";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Checkbox, Row, Tag } from "antd";
const cx = classNames.bind(styles);
const DATA = [
    {

        name: "abc",
    },
]
function AdminProfile({ name, prioriry }) {
    const [search, setSearch] = useState("");
    const [list, setList] = useState(DATA);
    const [isChecked, setIsChecked] = useState(false);
    const [ten, setTen] = useState("");
    const [tenuser, setTenuser] = useState("");
    const [genre, setGenre] = useState("");
    const [profession, setProfession] = useState("");
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    const handleSearch2 = (e) => {
        setTen(e.target.value);
    }

    const handleSearch1 = (e) => {
        setTenuser(e.target.value);
    }
    const handleSearch5 = (e) => {
        setGenre(e.target.value);
    }
    const handleSearch6 = (e) => {
        setProfession(e.target.value);
    }
    //checkbox
    const [checked, setChecked] = useState(false);
    const [maleChecked, setMaleChecked] = useState(false);
    const [femaleChecked, setFemaleChecked] = useState(false);

    const toggleCheckbox2 = () => {
        setFemaleChecked(!femaleChecked);
    };
    const toggleCheckbox1 = () => {
        setMaleChecked(!maleChecked);
    };
    const toggleCheckbox = () => {
        setChecked(!checked);
    };

    useEffect(() => {
        const data = DATA.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
        setList(data);
    }, [search])
    useEffect(() => {
        const data = DATA.filter((item) => item.name.toLowerCase().includes(tenuser.toLowerCase()));
        setList(data);
    }, [tenuser])
    useEffect(() => {
        const data = DATA.filter((item) => item.name.toLowerCase().includes(ten.toLowerCase()));
        setList(data);
    }, [ten])
    useEffect(() => {
        const data = DATA.filter((item) => item.name.toLowerCase().includes(ten.toLowerCase()));
        setList(data);
    }, [profession])
    return (
        <div>
            <div>
                <h2 className={cx("title-myprofile")}>
                    Admin
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
                            <div className={cx("part")}>
                                <td >
                                    <label className={cx("login-text")}>Ten dang nhap</label>
                                </td>
                                <td>
                                    <div className={cx("text-username")}>
                                        <div>
                                            <input className={cx("input-username")} type="text" placeholder value={tenuser} onChange={handleSearch1} />
                                        </div>
                                        <div className={cx("input-text")}>Username can only be logged in once</div>
                                    </div>
                                </td>
                            </div>
                            <div className={cx("part1")}>
                                <td>
                                    <label className={cx("text-name")}>Ten</label>
                                </td>
                                <td className={cx("")}>
                                    <div className={cx("placeholder-ten")}>
                                        <input className={cx("input-username")} type="text" placeholder value={ten} onChange={handleSearch2} />
                                    </div>
                                </td>
                            </div>
                            <div className={cx("part2")}>
                                <td>
                                    <div className={cx("email-txet0")}>
                                        Email:
                                    </div>
                                </td>
                                <td>
                                    <div className={cx("email-text")}>
                                        do**********@fpt.edu.vn
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
                                            <Row
                                                justify='space-between'
                                                style={{
                                                    marginBottom: 3,
                                                    ...(maleChecked ? { textDecoration: 'none' } : {}),
                                                }}
                                            >
                                                <Checkbox maleChecked={maleChecked} onChange={toggleCheckbox1}>
                                                    {name} Male
                                                </Checkbox>
                                            </Row>
                                            <Row
                                                justify='space-between'
                                                style={{
                                                    marginBottom: 3,
                                                    ...(femaleChecked ? { textDecoration: 'none' } : {}),
                                                }}
                                            >
                                                <Checkbox femaleChecked={femaleChecked} onChange={toggleCheckbox2}>
                                                    {name} Female
                                                </Checkbox>
                                            </Row>
                                            <Row
                                                justify='space-between'
                                                style={{
                                                    marginBottom: 3,
                                                    ...(checked ? { textDecoration: 'none' } : {}),
                                                }}
                                            >
                                                <Checkbox checked={checked} onChange={toggleCheckbox}>
                                                    {name} Other
                                                </Checkbox>
                                            </Row>
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
                <div className={cx("line")} />
                <div className={cx("img-user-div")}>
                    <div className={cx("img-user-div1")}>
                        <div className={cx("img-user-div2")}>
                            <div className={cx("img-user-div3")}>
                                <img className={cx("box-img")} alt="" />
                            </div>
                            <input className={cx("img-click")} type="file" accept=".jpg,.jpeg,.png" />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default AdminProfile;