import classNames from "classnames/bind";
import styles from "./ListBeat2.module.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useEffect, useMemo, useRef, useState } from "react";
import ListBeatBox from "../../components/ListBeatBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faPause, faPlay, faPlayCircle, faRedo, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";

import music from "../../assets/audio/audio.mp3";
const cx = classNames.bind(styles);


const DATA = [
    {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    }, {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    }, {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    }, {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    }, {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    }, {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    }, {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    },
    {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    },

    {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    },

    {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    },

    {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    },

    {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    },

    {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    },

    {

        name: "Hot Xoan",
        type: "BeatName",
        price: "85$",
        member: "85",
    },

    {

        name: "Hot Xoan edf",
        type: "BeatName",
        price: "85$",
        member: "85",
    },
    {

        name: "Hot Xoan xyz",
        type: "BeatName",
        price: "85$",
        member: "85",
    },
    {
        name: "Hot Xoan wyx",
        type: "BeatName",
        price: "85$",
        member: "85",
    },
    {

        name: "Hot Xoan abc",
        type: "BeatName",
        price: "85$",
        member: "85",
    },



]

function ListBeat2() {

    const [search, setSearch] = useState("");
    const [list, setList] = useState(DATA);
    const [play, setPlay] = useState(false);
    const audioRef = useRef();

    const handleSearch = (e) => {
        setSearch(e.target.value);
        // setList(data);
    }

    const handleClickBeat = () => {

    }

    // useEffect(() => {
    //     const video = document.querySelector('video');
    //     if (video) {
    //         video.playbackRate = 1.5;
    //     }
    // }, []);
    console.log(play);

    useEffect(() => {
        if (play) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [play])



    return (
        <div className={cx("list-header")}>
            <div className={cx("icon-shopping")}>
                <div className={cx("search")}>

                </div>
                <Link className={cx("cart-icon")} to="/viewcart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 39 39" fill="none">
                        <path d="M30.875 30.75C28.7938 30.75 27.125 32.4188 27.125 34.5C27.125 35.4946 27.5201 36.4484 28.2234 37.1516C28.9266 37.8549 29.8804 38.25 30.875 38.25C31.8696 38.25 32.8234 37.8549 33.5266 37.1516C34.2299 36.4484 34.625 35.4946 34.625 34.5C34.625 33.5054 34.2299 32.5516 33.5266 31.8484C32.8234 31.1451 31.8696 30.75 30.875 30.75ZM0.875 0.75V4.5H4.625L11.375 18.7313L8.825 23.325C8.54375 23.85 8.375 24.4688 8.375 25.125C8.375 26.1196 8.77009 27.0734 9.47335 27.7766C10.1766 28.4799 11.1304 28.875 12.125 28.875H34.625V25.125H12.9125C12.7882 25.125 12.669 25.0756 12.581 24.9877C12.4931 24.8998 12.4438 24.7806 12.4438 24.6562C12.4438 24.5625 12.4625 24.4875 12.5 24.4312L14.1875 21.375H28.1562C29.5625 21.375 30.8 20.5875 31.4375 19.4438L38.15 7.3125C38.2812 7.0125 38.375 6.69375 38.375 6.375C38.375 5.87772 38.1775 5.40081 37.8258 5.04918C37.4742 4.69754 36.9973 4.5 36.5 4.5H8.76875L7.00625 0.75M12.125 30.75C10.0437 30.75 8.375 32.4188 8.375 34.5C8.375 35.4946 8.77009 36.4484 9.47335 37.1516C10.1766 37.8549 11.1304 38.25 12.125 38.25C13.1196 38.25 14.0734 37.8549 14.7766 37.1516C15.4799 36.4484 15.875 35.4946 15.875 34.5C15.875 33.5054 15.4799 32.5516 14.7766 31.8484C14.0734 31.1451 13.1196 30.75 12.125 30.75Z" fill="black" />
                    </svg>
                    <div className={cx("shopping-text")}>
                        Shopping Cart
                    </div>
                </Link>
            </div>

            <div className={cx("list-beat")}>
                {list.map((item, index) => {
                    return <ListBeatBox key={index} name={item.name} type={item.type} price={item.price} member={item.member} play={play} setPlay={setPlay} />
                })}
            </div>
            <div className={cx("audio")}>
                <div className={cx("image-audio")}>
                    <img className={cx("trending-ellipse")} src={require("../../assets/images/Trending/beautiful-girl-sitting-down-playing-the-piano.webp")}>
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

                <audio id="audio" ref={audioRef} src={music}></audio>

            </div>


        </div>

    );
}

export default ListBeat2;