import classNames from "classnames/bind";
import styles from "./ViewDetailBeatPurchased.module.scss";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Avatar, Box, Button, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import axiosInstance from '../../authorization/axiosInstance';
import { Link, useParams } from 'react-router-dom';
import { ShopContext } from '../../context/shop-context';
import useToken from '../../authorization/useToken';
import jwtDecode from 'jwt-decode';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faPause, faPlay, faPlayCircle, faRedo, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";
import music from "../../assets/audio/Dont_Coi.mp3";
import { useNavigate } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
const cx = classNames.bind(styles);

function ViewDetailBeatPurchased() {
    const { addToCart } = useContext(ShopContext)
    const { beatId } = useParams();
    const [beatDetail, setBeatDetail] = useState(null)
    const [listMusicianBeat, setListMusicianBeat] = useState(null)
    const [play, setPlay] = useState(false);
    const audioRef = useRef();
    const token = useToken();
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    const [checkLike, setCheckLike] = useState(false)
    const [checkRating, setCheckRating] = useState("")
    const [data, setData] = useState(null)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [isCommenting, setIsCommenting] = useState(false);
    const [content, setContent] = useState('');
    const [listBeatComment, setListBeatComment] = useState([]);
    const [checkComment, setCheckComment] = useState(null)
    const [beatSoundFull, setBeatSoundFull] = useState("")
    let userId = ""
    if (token) {
        userId = jwtDecode(token).sub
    }
    // Comment Parent
    const [parentId, setParentId] = useState("0")
    const commentParent = { beatId, userId, parentId, content }

    useEffect(() => {
        loadDetailBeat()

    }, [beatId])


    useEffect(() => {
        loadMusicianBeat()
    }, [beatDetail])

    useEffect(() => {
        loadBeatComment()
    }, [checkComment, beatDetail])

    useEffect(() =>{
        loadSoundFull()
    },[])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleCommentClick = () => {
        setIsCommenting(true);
    };

    const handleInputChange = (event) => {
        setContent(event.target.value);
    };

    const handlePostComment = () => {
        console.log('Posted comment:', content);
        setIsCommenting(false);
        setContent('');
    };

    const Heart = ({ id }) => {
        return (<svg className={cx("new-icon-like")} id={id} width="155" height="130" viewBox="0 0 150 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M112.577 6.51645L112.588 6.51678L112.598 6.51707C124.83 6.85668 134.648 13.4871 139.798 25.162C147.658 42.9826 142.048 60.4882 131.657 75.7368C121.27 90.9784 106.855 102.747 99.8285 107.966C92.3832 113.495 84.0338 118.699 75 123.419C65.9653 118.698 57.6161 113.496 50.1717 107.966L50.1715 107.966C43.1455 102.747 28.7296 90.9784 18.3433 75.7368C7.95214 60.4882 2.34207 42.9826 10.2021 25.162L10.2022 25.1617C15.3515 13.4855 25.1696 6.85669 37.4015 6.51709L37.4155 6.51667C49.4687 6.15616 62.0214 12.1853 69.9783 21.8669L75 27.9771L80.0217 21.8669C87.982 12.1812 100.536 6.14284 112.577 6.51645Z" stroke="white" strokeWidth="13" />
        </svg>)
    }

    const handleLikeClick = (id) =>{
        handleConvertLike()
        handleLike(id)
    }

        const handleConvertLike = async(id) => {
            setCheckLike(!checkLike)
            console.log(checkLike)
        }

        
    

    const loadSoundFull = async () => {
        await axiosInstance(`http://localhost:8080/api/v1/beat/user/full/${beatId}`)
            .then((res) => {
                setBeatSoundFull(res.data.beatSound)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const loadBeatComment = async () => {
        await axiosInstance.get(`http://localhost:8080/api/v1/comment/beat/${beatId}`)
            .then((res) => {
                setListBeatComment(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const loadDetailBeat = async () => {

        await axiosInstance.get(`http://localhost:8080/api/v1/beat/${beatId}`)
            .then((res) => {
                setBeatDetail(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
        setPlay(false)
        setCheckRating("")
        setCheckLike(false)
    }

    const handleLike = async (id) => {
        if (!token) {
            navigate("/login")
        } else {
            await axiosInstance.post(`http://localhost:8080/api/v1/beat/like/${jwtDecode(token).sub}/${id}`)
                .then((res) => {
                    if(res.data.includes("Ok")){
                        setCheckLike(true)
                    }else{
                        setCheckLike(false)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    const loadMusicianBeat = async () => {

        if (beatDetail === null) {
            return
        }

        await axiosInstance.get(`http://localhost:8080/api/v1/beat/user/${beatDetail.user.id}/all`)
            .then((res) => {
                setListMusicianBeat(res.data)

            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleRating = async (e) => {
        if (!token) {
            navigate("/login")
        } else {
            await axiosInstance.post(`http://localhost:8080/api/v1/rate/beat/rating/${jwtDecode(token).sub}/${beatId}`, { rate: e.target.value })
                .then((res) => {
                    setCheckRating("Rating Successfully")
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    const handleComment = (e) => {
        setContent(e.target.value)
        console.log(content)
    }

    const handlePostCommentParent = async (e) => {
        console.log(content)
        console.log(commentParent)
        await axiosInstance.post("http://localhost:8080/api/v1/comment/beat/addComment", commentParent)
            .then((res) => {
                setCheckComment(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    if (listMusicianBeat !== null) {
        const dateReleasing = new Date(beatDetail.creatAt)
        const month = dateReleasing.getUTCMonth() + 1
        const day = dateReleasing.getUTCDate()
        const year = dateReleasing.getUTCFullYear()

        return (

            <div className={cx('first-container')}>
                {/* <div className={cx("text-header")}>
                <h1>
                    Beats Name
                </h1>
                <div className={cx('header-submit')}>
                    <Button variant="contained" className={cx('button-1')}>
                        <div>Share Beat</div>
                    </Button>
                </div>
            </div> */}
                <div className={cx('view-detail')}>


                    <div className={cx('view-detail-beat')}>
                        <div className={cx('detail-1')}>
                            <div className={cx('mid-detail-left')}>
                                <div>
                                    <div className={cx('container')}>

                                        <img className={cx('image')} src={require("../../assets/images/Other/beat-trong-am-nhac-la-gi1.jpg")} />
                                        <div className={cx('middle-image')}>
                                            {/* <div className={cx('text')}>Click</div> */}
                                            <Button variant="contained" className={cx('button-1')} onClick={() => loadSoundFull()}>
                                                <div>Click</div>
                                            </Button>
                                        </div>
                                    </div>

                                    <div className={cx('information')}>
                                        {console.log(beatDetail)}
                                        <h1><b>{beatDetail.beatName}</b></h1>
                                        <h4> {beatDetail.user.fullName} &#x2022; 2023 </h4>

                                    </div>
                                    {/* <div className={cx('button-submit')}>
                            <Button variant="contained" className={cx('button-1')}>
                                <div>Follow</div>
                            </Button>
                            <Button variant="contained" className={cx('button-1')}>
                                <div>Message</div>
                            </Button>
                        </div> */}
                                    <Stack className={cx("rating-form")} spacing={1}>
                                        <Rating className={cx("start-icon")} name="size-large" defaultValue={0} size="large" onChange={handleRating} />
                                    </Stack>
                                    
                                        
                                         <audio className={cx("audio")} id="audio" ref={audioRef} controls src={beatSoundFull}>
                                        </audio>
                                        
                                                <Button variant="contained" className={cx('button-1')} style={{marginLeft:170 , marginTop:20}}>
                                                    <div>View Cart</div>
                                                </Button>
                                            
                                    <div>{checkRating}</div>
                                </div>
                            </div>

                            <div className={cx('mid-detail-right')}>
                                <h3><b>Musician information</b></h3>
                                <div className={cx('info-musician')}>
                                    <span>&#x2022; Name: {beatDetail.user.fullName} </span>
                                    <span>&#x2022; Contact: {beatDetail.user.mail}</span>
                                    <span>&#x2022; Profession: {beatDetail.professional}</span>
                                    <span>&#x2022; Years of operation: {beatDetail.year} years</span>
                                    <span>&#x2022; Number of beats: {listMusicianBeat.length} </span>
                                    <span>&#x2022; Prize: {beatDetail.prize}</span>
                                </div>
                                <h3><b>Beat information</b></h3>
                                <div className={cx("container-like")}>
                                    <button onClick={() => handleLikeClick(beatDetail.id)}>
                                        <Heart id={checkLike ? cx('favorite-stroke') : cx('favorite-filled')} />
                                    </button>
                                </div>
                                {/* <div className={cx('list-of-beats')}>
                                <div className={cx('cart')}>
                                    <span>$25.00</span>
                                    <span>Standard License</span>
                                    <span>MP3</span>
                                </div>
                                <div className={cx('cart')}>
                            <span>$25.00</span>
                            <span>Standard License</span>
                            <span>MP3</span>
                        </div>
                        <div className={cx('cart')}>
                            <span>$25.00</span>
                            <span>Standard License</span>
                            <span>MP3</span>
                        </div>
                        <div className={cx('cart')}>
                            <span>$25.00</span>
                            <span>Standard License</span>
                            <span>MP3</span>
                        </div>
                        <div className={cx('cart')}>
                            <span>$25.00</span>
                            <span>Standard License</span>
                            <span>MP3</span>
                        </div>
                            </div> */}
                                <div className={cx('list')}>
                                    <div className={cx('genre')}>
                                        <span>&#x2022; Beat's Name: {beatDetail.beatName}</span>
                                        <span>&#x2022; Genre:
                                            {
                                                beatDetail.genres.map((item, index) => {
                                                    return <span> {item.name},</span>
                                                })

                                            }
                                        </span>
                                        <span>&#x2022; Price: ${beatDetail.price}</span>
                                        <span>&#x2022; Views: {(beatDetail.view / 2).toFixed()}</span>
                                        <span>&#x2022; Tone: {beatDetail.vocalRange}</span>
                                        <span>&#x2022; Total Rating: {(beatDetail.totalRating)}</span>
                                        <span>&#x2022; Release date: {day}/{month}/{year}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Comment */}
                {/* <div className={cx("audio")}>
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

                    <audio id="audio" ref={audioRef} src={music}></audio>

                </div> */}
            </div>

        );
    }
    else {
        return <h1 className={cx('first-container')}>Loading Page...</h1>
    }
}
export default ViewDetailBeatPurchased;