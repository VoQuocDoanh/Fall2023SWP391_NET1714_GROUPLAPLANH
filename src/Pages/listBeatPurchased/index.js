
import classNames from "classnames/bind";
import styles from "./listBeatPurchased.module.scss";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faPause, faPlay, faPlayCircle, faRedo, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";
import audio from "../../assets/audio";
import { ShopContext } from "../../context/shop-context";
import axiosInstance from "../../authorization/axiosInstance";
import Sidebar from "../../components/SideBar";
import useToken from "../../authorization/useToken";
import jwtDecode from "jwt-decode";
import ListBeatPurchasedBox from "../../components/listBeatPurchasedBox";

const cx = classNames.bind(styles);

function ListBeatPurchased() {

    //Comment lai cho nay
    const navigate = useNavigate()
    const { setListBeatContext, setDefaultCart, setViewBeatFirstTime, viewBeatFirstTime, checkOut } = useContext(ShopContext)
    const [search, setSearch] = useState("");
    const [list, setList] = useState(null);
    const [listGenres, setListGenres] = useState(null);
    const [listMusicianName, setListMusicianName] = useState(null);
    // const [play, setPlay] = useState(false);
    // const [srcMusic, setSrcMusic] = useState("");
    // const audioRef = useRef();
    const token = useToken();
    const [checkLike, setCheckLike] = useState();
    // 
    const handleSearch = (e) => {
        setSearch(e.target.value);
        // setList(data);
    }

    // const handleClickAudio = (value) => {

    //     setSrcMusic(`data:audio/mpeg;base64,${atob(value.beatSound)}`);
    //     console.log(srcMusic)

    // }

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
    //  UseEffect(() => {
    //     if (play) {
    //         audioRef.current.play();

    //     } else {

    //         audioRef.current.pause();
    //     }
    // }, [play])

    useEffect(() => {
        loadBeats()
    }, [checkLike])

    useEffect(() => {
        loadGenres()
    }, [])

    useEffect(() => {
        loadMusicianName()
    }, [])



    const loadBeats = async () => {
        await axiosInstance.get(`http://localhost:8080/api/v1/beat/user/${jwtDecode(token).sub}`)
            .then(res => {
                setList(res.data)
                setListBeatContext(res.data)
                if (viewBeatFirstTime === 0) {
                    setViewBeatFirstTime(1)
                }

            })
            .catch((error) => {
                if (error.message.includes("Network")) {
                    navigate("/login")
                }
            })
    }

    //
    if (viewBeatFirstTime === 1) {
        setViewBeatFirstTime(2)
        setDefaultCart()
    }

    const loadGenres = async () => {
        await axiosInstance.get("http://localhost:8080/api/v1/genre")
            .then((res) => {
                setListGenres(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const loadMusicianName = async() =>{
        await axiosInstance.get("http://localhost:8080/api/v1/beat/musician/full")
        .then((res) => {
            setListMusicianName(res.data)
            console.log(res.data)
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    const handleLike = async (id) => {
        if (!token) {
            navigate("/login")
        } else {
            await axiosInstance.post(`http://localhost:8080/api/v1/beat/like/${jwtDecode(token).sub}/${id}`)
                .then((res) => {
                    setCheckLike(res.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    if (list !== null) {
        return (
            <div className={cx("list-header")}>
                {listGenres && listMusicianName ?
                    <Sidebar  listGenres={listGenres} listMusicianName = {listMusicianName}></Sidebar>
                    : <div></div>}
                <div className={cx("text-header")}>
                    <h1 className={cx("text-welcome")}>
                        List of my beat purchased
                    </h1>

                </div>

                {/* <div className={cx("list-beat")}>
                {list.map((item, index) => {
                    return <ListBeatBox key={index} name={item.name} type={item.type} price={item.price} member={item.member} play={play} setPlay={setPlay} />
                })}
            </div> */}
                {list.length > 0 ?
                    <div className={cx("listbeat")}>
                        {list.map((item) => {
                            return <ListBeatPurchasedBox id={item.id} name={item.beatName} genre={item.genre} price={item.price} view={(item.view / 2).toFixed()} like={item.totalLike} handleLike={() => handleLike(item.id)} rating={item.rating} vocalRange={item.vocalRange} fullName={item.user.fullName} />
                        })}
                    </div> : <div className={cx("sold-out")}> 404 Not Found!<div> Hết Beat Rồi Bạn Ơi!.... </div> </div>}

                {/* <div className={cx("audio")}>

                <div className={cx("control")}>
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

                </div>
                <div className={cx("time-audio")}>
                    <span className={cx("start")}>0:00</span>
                    <input id="progress" className={cx("progress")} type="range" value="0" step="1" min="0" max="100" />
                    <span className={cx("end")}>0:00</span>
                </div>
            </div> */}
                {/* <audio style={{ borderRadius: 10 }} id="audio" ref={audioRef} src={srcMusic}>
            </audio> */}

            </div>

        );
    }
    else {
        return <div>Loading Page... {console.log("check")}</div>
    }
}

export default ListBeatPurchased;