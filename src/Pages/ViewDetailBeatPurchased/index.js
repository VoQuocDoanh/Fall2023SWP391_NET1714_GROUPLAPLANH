import classNames from "classnames/bind";
import styles from "./ViewDetailBeatPurchased.module.scss";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Alert, Avatar, Box, Button, IconButton, Menu, MenuItem, Snackbar, Tooltip } from "@mui/material";
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
import Popup from "reactjs-popup";
const cx = classNames.bind(styles);

function ViewDetailBeatPurchased() {
    const { beatId } = useParams();
    const [beatDetail, setBeatDetail] = useState(null)
    const audioRef = useRef();
    const token = useToken();
    const navigate = useNavigate();
    const [beatSoundFull, setBeatSoundFull] = useState("")
    const [checkFeedBack, setCheckFeedBack] = useState(false)
    const [feedBack, setFeedBack] = useState()
    const [feedBackContent, setFeedBackContent] = useState("")
    const [idFeedback, setIdFeedback] = useState("")
    const [messageSuccess, setMessageSuccess] = useState("")
    const [messageFailed, setMessageFailed] = useState("")
    const [openSuccessSnackBar, setOpenSuccessSnackBar] = useState(false);
    const [openFailedSnackBar, setOpenFailedSnackBar] = useState(false);
    const contentStyle = { background: 'white', width: 460, height: 370, borderRadius: 20 };
    let userId = ""
    if (token) {
        userId = jwtDecode(token).sub
    }
    // Comment Parent
    useEffect(() => {
        loadDetailBeat()

    }, [beatId])

    useEffect(() => {

    })
    useEffect(() => {
        loadSoundFull()
    }, [])

    useEffect(() => {
        loadFeedback()
    }, [checkFeedBack], [beatId])

    const loadSoundFull = async () => {
        await axiosInstance(`http://localhost:8080/api/v1/beat/user/full/${beatId}`)
            .then((res) => {
                setBeatSoundFull(res.data.beatSound)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const loadDetailBeat = async () => {
        if (!token) {
            navigate("/login")
            return
        }
        await axiosInstance.get(`http://localhost:8080/api/v1/beat/${beatId}`)
            .then((res) => {
                setBeatDetail(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleFeedback = async () => {
        await axiosInstance.post("http://localhost:8080/api/v1/beat/feedback", { userId: userId, beatId: beatId, content: feedBackContent })
            .then((res) => {
                setOpenSuccessSnackBar(true)
                setMessageSuccess("Feedback successfully")
                setCheckFeedBack(true)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // const handleUpdateFeedback = async() => {
    //     await axiosInstance.put("http://localhost:8080/api/v1/beat/feedback", {id:})
    // }

    const loadFeedback = async () => {
        if (!token) {
            navigate("/login")
            return
        }
        await axiosInstance.get(`http://localhost:8080/api/v1/beat/feedback/user/${userId}/${beatId}`)
            .then((res) => {
                if (res.data) {
                    setFeedBack(res.data)
                    setFeedBackContent(res.data.content)
                    setCheckFeedBack(true)
                    console.log(res.data.content)
                    // setIdFeedback(res.data.)
                }
                else {
                    setCheckFeedBack(false)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleUpdateFeedback = async (e) => {
        if (!token) {
            navigate("/login")
            return
        }
        await axiosInstance.put(`http://localhost:8080/api/v1/beat/feedback`, { id: feedBack.id, content: feedBackContent })
            .then((res) => {
                setOpenSuccessSnackBar(true)
                setMessageSuccess("Update feedback successfully")
            })
    }

    if (beatDetail !== null) {
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

                                    </div>

                                    <div className={cx('information')}>
                                        {console.log(beatDetail)}
                                        <h1><b style={{ color: 'white', fontFamily: 'fredoka one' }}>{beatDetail.beatName}</b></h1>
                                        <Link style={{color:"white"}} to={`/viewdetailsmusician/${beatDetail.user.id}`}><h4> {beatDetail.description} &#x2022; 2023 </h4></Link>

                                    </div>
                                    {/* <div className={cx('button-submit')}>
                            <Button variant="contained" className={cx('button-1')}>
                                <div>Follow</div>
                            </Button>
                            <Button variant="contained" className={cx('button-1')}>
                                <div>Message</div>
                            </Button>
                        </div> */}
                                    <audio className={cx("audio")} id="audio" ref={audioRef} controls src={beatSoundFull}>
                                    </audio>
                                </div>
                            </div>

                            <div className={cx('mid-detail-right')}>

                                <h3><b style={{ fontSize: '2.5rem' }}>Beat information</b></h3>

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
                                        {beatDetail.genres !== null ?
                                            <span>&#x2022; Genre:
                                                {
                                                    beatDetail.genres.map((item, index) => {
                                                        return <span> {item.name}</span>
                                                    })

                                                }
                                            </span>
                                            :
                                            <span>&#x2022; Genre:

                                            </span>
                                        }
                                        <span>&#x2022; Price: ${beatDetail.price}</span>
                                        <span>&#x2022; Views: {(beatDetail.view / 2).toFixed()}</span>
                                        <span>&#x2022; Tone: {beatDetail.vocalRange}</span>
                                        <span>&#x2022; Total Rating: {(beatDetail.totalRating)}</span>
                                        <span>&#x2022; Release date: {day}/{month}/{year}</span>
                                        <div style={{ textAlign: "center", marginTop: 20 }}>

                                            <div>
                                                {!checkFeedBack ?
                                                    <Popup className={cx("part-5")} style={{ width: "120%" }} trigger={<Button variant="contained" className={cx('button-2')}>
                                                        <div style={{ fontSize: '2rem' }}>Feedback</div>
                                                    </Button>}  {...{ contentStyle }} position="bottom left center">
                                                        <div className={cx("text-all")} style={{ padding: 10 }}>
                                                            <div style={{ display: 'grid' }}>
                                                                <td style={{ fontWeight: 'bold', fontSize: "2.2rem", marginLeft: 80, color: 'red' }}>Feedback Information</td>

                                                            </div>
                                                            <textarea className={cx("text-des")} value={feedBackContent} style={{ resize: 'none', width: '385px', border: 1, height: 150, marginLeft: 24, marginTop: 20, marginBottom: 20, padding: 20, outline: '1px solid #E5E4E4', borderRadius: 12 }} onChange={(e) => setFeedBackContent(e.target.value)} />
                                                            <td className={cx("button-type")}>
                                                                <button type="button" className={cx("button-send")} aria-disabled="false" onClick={() => handleFeedback()} >Send</button>
                                                            </td>
                                                        </div>
                                                    </Popup>
                                                    :
                                                    <Popup className={cx("part-5")} style={{ width: "120%" }} trigger={<Button variant="contained" className={cx('button-2')}>
                                                        <div style={{ fontSize: '1.5rem' }}>View Feedback</div>
                                                    </Button>}  {...{ contentStyle }} position="bottom left center">
                                                        <div className={cx("text-all")} style={{ padding: 10 }}>
                                                            <div style={{ display: 'grid' }}>
                                                                <td style={{ fontWeight: 'bold', fontSize: "2.2rem", marginLeft: 80, color: 'red' }}>Feedback Information</td>

                                                            </div>
                                                            <textarea className={cx("text-des")} value={feedBackContent} style={{ resize: 'none', width: '385px', border: 1, height: 150, marginLeft: 24, marginTop: 20, marginBottom: 20, padding: 20, outline: '1px solid #E5E4E4', borderRadius: 12 }} onChange={(e) => setFeedBackContent(e.target.value)} />
                                                            <td className={cx("button-type")}>
                                                                <button type="button" className={cx("button-send")} aria-disabled="false" onClick={(e) => handleUpdateFeedback(e.target.value)} >Update</button>
                                                            </td>
                                                        </div>
                                                    </Popup>
                                                }
                                            </div>


                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <Snackbar open={openSuccessSnackBar} autoHideDuration={2000} onClose={() => setOpenSuccessSnackBar(false)} anchorOrigin={{ vertical: "top", horizontal: "right" }} style={{ marginTop: '100px' }} >
                <Alert variant="filled" onClose={() => setOpenSuccessSnackBar(false)} severity="success" sx={{ width: '100%' }} style={{ fontSize: 20 }}>
                    {messageSuccess}
                </Alert>
            </Snackbar>
            <Snackbar open={openFailedSnackBar} autoHideDuration={2000} onClose={() => setOpenFailedSnackBar(false)} anchorOrigin={{ vertical: "top", horizontal: "right" }} style={{ marginTop: '100px' }}>
                <Alert variant="filled" onClose={() => setOpenFailedSnackBar(false)} severity="error" sx={{ width: '100%' }} style={{ fontSize: 20 }}>
                    {messageFailed}
                </Alert>
            </Snackbar>
            </div>

        );
    }
    else {
        return <h1 className={cx('first-container')}>Loading Page...</h1>
    }
}
export default ViewDetailBeatPurchased;