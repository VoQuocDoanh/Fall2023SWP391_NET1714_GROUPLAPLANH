
import classNames from "classnames/bind";
import styles from "./ListBeat.module.scss";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import ListBeatBox from "../../components/ListBeatBox";
import videoBg from '../../assets/video/video (2160p).mp4'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faPause, faPlay, faPlayCircle, faRedo, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";
import audio from "../../assets/audio";
import { ShopContext } from "../../context/shop-context";
import axiosInstance from "../../authorization/axiosInstance";
const cx = classNames.bind(styles);
const DATA = [
    {
        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
        audio: audio.bai01,
        play: false,
    }, {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
        audio: audio.bai02,
        play: false,

    }, {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
        audio: audio.bai03,
        play: false,
    }, {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
        play: false,
    }, {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
        play: false,
    }, {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
        play: false,

    }, {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
        play: false,

    },
    {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
        play: false,

    },

    {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
        play: false,

    },

    {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
        play: false,

    },

    {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
        play: false,

    },

    {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
        play: false,

    },

    {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
        play: false,

    },

    {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
        play: false,

    },

    {

        name: "Hot Xoan edf",
        type: "BeatName",
        price: "85$",
        member: "85",
        play: false,

    },
    {

        name: "Hot Xoan xyz",
        type: "BeatName",
        price: "85$",
        member: "85",
        play: false,

    },
    {
        name: "Hot Xoan wyx",
        type: "BeatName",
        price: "85$",
        member: "85",
        play: false,

    },
    {

        name: "Hot Xoan abc",
        type: "BeatName",
        price: "85$",
        member: "85",
        play: false,

    },
]

function ListBeat() {

    //Thao comment cho nay
    const [search, setSearch] = useState("");
    const [list, setList] = useState(DATA);
    const [play, setPlay] = useState(false);
    const [srcMusic, setSrcMusic] = useState("");
    const audioRef = useRef();

    //Comment lai cho nay
    // const navigate = useNavigate()
    // const { cartItems } = useContext(ShopContext)
    // const [list, setList] = useState([]);
    // const [play, setPlay] = useState(false);
    // const audioRef = useRef();
    // sessionStorage.setItem("listBeat", JSON.stringify(list))
    // console.log(JSON.parse(sessionStorage.getItem("listBeat")))

    const handleSearch = (e) => {
        setSearch(e.target.value);
        // setList(data);
    }

    const handleClickAudio = (value) => {
        value.play = !value.play;
        setSrcMusic(value.audio);
    }

    // useEffect(() => {
    //     const data = DATA.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    //     setList(data);
    // }, [search])
    // // useEffect(() => {
    // //     const video = document.querySelector('video');
    // //     if (video) {
    // //         video.playbackRate = 1.5;
    // //     }
    // // }, []);

    // //Comment lai cho nay
    // console.log(play);

    useEffect(() => {
        if (play) {
            audioRef.current.play();

        } else {
            audioRef.current.pause();
        }
    }, [play])

    // useEffect(() => {
    //     loadBeats();
    // }, []);

    // const loadBeats = async () => {
    //     await axiosInstance.get("http://localhost:8080/api/v1/beat")
    //         .then(res => {
    //             setList(res.data)
    //         })
    //         .catch((error) => {
    //             if (error.message.includes("Network")) {
    //                 navigate("/login")
    //             }
    //         })
    // }
    //


    return (
        <div className={cx("list-header")}>
            <div className={cx("text-header")}>
                <h1 className={cx("text-welcome")}>
                    Welcome To Our Beat
                </h1>

            </div>
            <div className={cx("icon-shopping")}>
                <Button>
                    <Link className={cx("viewCart")} to="/viewcart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 39 39" fill="none">
                            <path d="M30.875 30.75C28.7938 30.75 27.125 32.4188 27.125 34.5C27.125 35.4946 27.5201 36.4484 28.2234 37.1516C28.9266 37.8549 29.8804 38.25 30.875 38.25C31.8696 38.25 32.8234 37.8549 33.5266 37.1516C34.2299 36.4484 34.625 35.4946 34.625 34.5C34.625 33.5054 34.2299 32.5516 33.5266 31.8484C32.8234 31.1451 31.8696 30.75 30.875 30.75ZM0.875 0.75V4.5H4.625L11.375 18.7313L8.825 23.325C8.54375 23.85 8.375 24.4688 8.375 25.125C8.375 26.1196 8.77009 27.0734 9.47335 27.7766C10.1766 28.4799 11.1304 28.875 12.125 28.875H34.625V25.125H12.9125C12.7882 25.125 12.669 25.0756 12.581 24.9877C12.4931 24.8998 12.4438 24.7806 12.4438 24.6562C12.4438 24.5625 12.4625 24.4875 12.5 24.4312L14.1875 21.375H28.1562C29.5625 21.375 30.8 20.5875 31.4375 19.4438L38.15 7.3125C38.2812 7.0125 38.375 6.69375 38.375 6.375C38.375 5.87772 38.1775 5.40081 37.8258 5.04918C37.4742 4.69754 36.9973 4.5 36.5 4.5H8.76875L7.00625 0.75M12.125 30.75C10.0437 30.75 8.375 32.4188 8.375 34.5C8.375 35.4946 8.77009 36.4484 9.47335 37.1516C10.1766 37.8549 11.1304 38.25 12.125 38.25C13.1196 38.25 14.0734 37.8549 14.7766 37.1516C15.4799 36.4484 15.875 35.4946 15.875 34.5C15.875 33.5054 15.4799 32.5516 14.7766 31.8484C14.0734 31.1451 13.1196 30.75 12.125 30.75Z" fill="black" />
                        </svg>
                        <div className={cx("shopping-text")}>
                            Shopping Cart
                        </div>
                    </Link>
                </Button>
                <div className={cx("searchBox")}>
                    <input className={cx("searchInput")} type="text" placeholder="Search Beat..." value={search} onChange={handleSearch} />
                    <button className={cx("searchButton")} href="#">
                        <i class={cx("material-icons")}>
                            <svg className={cx("icon-search")} xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 35 35" fill="none">
                                <path d="M15.5 14H14.71L14.43 13.73C15.4439 12.554 16.0011 11.0527 16 9.5C16 8.21442 15.6188 6.95772 14.9046 5.8888C14.1903 4.81988 13.1752 3.98676 11.9874 3.49479C10.7997 3.00282 9.49279 2.87409 8.23192 3.1249C6.97104 3.3757 5.81285 3.99477 4.90381 4.90381C3.99477 5.81285 3.3757 6.97104 3.1249 8.23192C2.87409 9.49279 3.00282 10.7997 3.49479 11.9874C3.98676 13.1752 4.81988 14.1903 5.8888 14.9046C6.95772 15.6188 8.21442 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="black" />
                            </svg>
                        </i>
                    </button>
                </div>

            </div>

            {/* <div className={cx("list-beat")}>
                {list.map((item, index) => {
                    return <ListBeatBox key={index} name={item.name} type={item.type} price={item.price} member={item.member} play={play} setPlay={setPlay} />
                })}
            </div> */}

            <div className={cx("list-beat")}>
                {list.map((item, index) => {
                    return <ListBeatBox id={item.id} name={item.beatName} genre={item.genre} price={item.price} play={item.play} setPlay={setPlay} onClick={() => handleClickAudio(item)} />
                })}
            </div>

            <div className={cx("audio")}>
                <div className={cx("image-audio")}>
                    <img className={cx("trending-ellipse")} src={require("../../assets/images/Other/beat-trong-am-nhac-la-gi1.jpg")}>
                    </img>
                </div>
                <div className={cx("control")}>
                    <div className={cx("btn", "btn-prev")}>
                        <i class="fas fa-step-backward"></i>
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

                </div>
                <div className={cx("time-audio")}>
                    <span className={cx("start")}>0:00</span>
                    <input id="progress" className={cx("progress")} type="range" value="0" step="1" min="0" max="100" />
                    <span className={cx("end")}>0:00</span>
                </div>
                <audio id="audio" ref={audioRef} src={srcMusic}>
                </audio>

            </div>
        </div>

    );
}

export default ListBeat;