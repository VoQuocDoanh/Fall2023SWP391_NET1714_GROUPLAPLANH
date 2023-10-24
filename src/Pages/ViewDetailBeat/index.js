import classNames from "classnames/bind";
import styles from "./ViewDetailBeat.module.scss";
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

function ViewDetailBeat() {
    const { addToCart } = useContext(ShopContext)
    const { beatId } = useParams();
    const [beatDetail, setBeatDetail] = useState(null)
    const [listMusicianBeat, setListMusicianBeat] = useState(null)
    const [play, setPlay] = useState(false);
    const audioRef = useRef();
    const token = useToken();
    const navigate = useNavigate();
    const [list, setList] = useState([]);
    const [checkLike, setCheckLike] = useState(null)
    const [checkRating, setCheckRating] = useState("")
    const [data, setData] = useState(null)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const [isCommenting, setIsCommenting] = useState(false);
    const [content, setContent] = useState('');
    const [listBeatComment, setListBeatComment] = useState([]);
    const [checkComment, setCheckComment] = useState(null)
    let userId = ""
    if (token) {
        userId = jwtDecode(token).sub
    }
    // Comment Parent
    const [parentId, setParentId] = useState("0")
    const commentParent = { beatId, userId, parentId, content }
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

    useEffect(() => {
        loadDetailBeat()

    }, [beatId, checkLike, checkRating])


    useEffect(() => {
        loadMusicianBeat()
    }, [beatDetail])

    useEffect(() => {
        loadBeatComment()
    }, [checkComment])

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
            await axiosInstance.post(`http://localhost:8080/api/v1/beat/ratingStar/${jwtDecode(token).sub}/${beatId}`, { rating: e.target.value })
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
        await axiosInstance.post("http://localhost:8080/api/v1/comment/beat/addComment",commentParent)
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

            <div>
                <Link to={"/listbeat"}>
                    <Button variant="contained" className={cx("back-to-shop")}>
                        <div>Back to Shop</div>
                    </Button>
                </Link>
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
                                            <Button variant="contained" className={cx('button-1')}>
                                                <div>Click</div>
                                            </Button>
                                        </div>
                                    </div>

                                    <div className={cx('information')}>
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
                                    <div>{checkRating}</div>
                                </div>
                            </div>

                            <div className={cx('mid-detail-right')}>
                                <h3><b>Musician information</b></h3>
                                <div className={cx('info-musician')}>
                                    <span>&#x2022; Name: {beatDetail.user.fullName} </span>
                                    <span>&#x2022; Contact: {beatDetail.user.mail}</span>
                                    <span>&#x2022; Profession: Singer, Musician</span>
                                    <span>&#x2022; Years of operation: 2018–present</span>
                                    <span>&#x2022; Number of beats: {listMusicianBeat.length} </span>
                                    <span>&#x2022; Prize: Zing MP3 - Best of 2022, Green Wave 2022, Golden Apricot Award...</span>
                                </div>
                                <h3><b>Beat information</b></h3>
                                <div className={cx('icon-like')} onClick={() => handleLike(beatDetail.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                                        <path d="M36 20.88C36 18.99 34.47 18 32.4 18H26.37C26.82 16.38 27 14.85 27 13.5C27 8.27995 25.56 7.19995 24.3 7.19995C23.49 7.19995 22.86 7.28995 22.05 7.73995C21.78 7.91995 21.69 8.09995 21.6 8.36995L20.7 13.23C19.71 15.75 17.28 18 15.3 19.53V32.4C16.02 32.4 16.74 32.76 17.64 33.21C18.63 33.66 19.62 34.2 20.7 34.2H29.25C31.05 34.2 32.4 32.76 32.4 31.5C32.4 31.23 32.4001 31.0499 32.3101 30.8699C33.3901 30.4199 34.2 29.52 34.2 28.35C34.2 27.81 34.1101 27.36 33.9301 26.91C34.6501 26.46 35.2801 25.65 35.2801 24.75C35.2801 24.21 35.01 23.67 34.74 23.22C35.46 22.68 36 21.78 36 20.88ZM34.1101 20.88C34.1101 22.05 32.9401 22.14 32.7601 22.68C32.5801 23.31 33.4801 23.49 33.4801 24.57C33.4801 25.65 32.13 25.65 31.95 26.28C31.77 27 32.4 27.18 32.4 28.26V28.44C32.22 29.34 30.87 29.4299 30.6 29.7899C30.33 30.2399 30.6 30.42 30.6 31.41C30.6 31.95 29.97 32.31 29.25 32.31H20.7C19.98 32.31 19.26 31.95 18.36 31.5C17.64 31.14 16.92 30.78 16.2 30.6V21.15C18.45 19.44 21.33 16.92 22.41 13.77V13.59L23.22 9.08995C23.58 8.99995 23.85 8.99995 24.3 8.99995C24.48 8.99995 25.2 10.08 25.2 13.5C25.2 14.85 24.93 16.29 24.48 18H24.3C23.76 18 23.4 18.36 23.4 18.9C23.4 19.44 23.76 19.8 24.3 19.8H32.4C33.3 19.8 34.1101 20.25 34.1101 20.88Z" fill="#699BF7" />
                                        <path d="M14.4 34.2H8.99995C8.00995 34.2 7.19995 33.39 7.19995 32.4V19.8C7.19995 18.81 8.00995 18 8.99995 18H14.4C15.39 18 16.2 18.81 16.2 19.8V32.4C16.2 33.39 15.39 34.2 14.4 34.2ZM8.99995 19.8V32.4H14.4V19.8H8.99995Z" fill="#699BF7" />
                                    </svg>
                                    <span>{beatDetail.totalLike}</span>
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
                                    {token ? <div className={cx('mid-button')}>
                                        <Button variant="contained" className={cx('button-1')} onClick={() => addToCart(beatId)}>
                                            <div>Add to cart</div>
                                        </Button>
                                        <Link to={"/viewCart"}>
                                            <Button variant="contained" className={cx('button-1')}>
                                                <div>View Cart</div>
                                            </Button>
                                        </Link>
                                    </div>
                                        : <div className={cx('mid-button')}>
                                            <Link to={"/login"}>
                                                <Button variant="contained" className={cx('button-1')}>
                                                    <div>Add to cart</div>
                                                </Button>
                                            </Link>
                                            <Link to={"/login"}>
                                                <Button variant="contained" className={cx('button-1')}>
                                                    <div>View Cart</div>
                                                </Button>
                                            </Link>
                                        </div>
                                    }


                                </div>

                            </div>
                        </div>

                        <div className={cx('total-detail')}>
                            <div className={cx('title-detail')}>
                                <span>Song List</span>
                            </div>

                            {listMusicianBeat.map((item, index) => {
                                return (
                                    <div className={cx('detail-2')}>
                                        <div className={cx('mid-detail-left-2')}>
                                            <div className={cx('container')}>
                                                <img className={cx('image-1')} src={require("../../assets/images/Other/beat-trong-am-nhac-la-gi1.jpg")} />
                                                <div className={cx('middle-image-2')}>
                                                    <Button variant="contained" className={cx('button-3')}>
                                                        <div>Click</div>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('mid-detail-right-2')}>
                                            <div className={cx('text-2')}>
                                                <h4 className={cx("musician-beat")}><b><Link to={`/viewdetailbeat/${item.id}`}>{item.beatName}</Link></b></h4>
                                                <span className={cx("musician-name")}>{item.user.fullName}</span>
                                            </div>
                                        </div>
                                    </div>)
                            })}



                        </div>
                    </div>
                </div>

                {/* Comment */}

                <div className={cx('comment-all')}>
                    <div className={cx('comment')}>
                        <textarea id="ABC" name="ABC" rows="2" cols="174" placeholder=' Comment...' onChange={handleComment} ></textarea>
                        {!token ?
                            <Link to={"/login"}>
                                <div className={cx('post-button')}>
                                    <button>Post a comment</button>
                                </div>
                            </Link>
                            : <div className={cx('post-button')} onClick={() => handlePostCommentParent()}>
                                <button>Post a comment</button>
                            </div>
                        }
                        <div>
                            <select name="comment" id="comment">
                                <option value="Latest comments">Latest comments</option>
                                <option value="Oldest comment">Oldest comment</option>
                            </select>
                        </div>
                        {listBeatComment.length !== 0 ? <div>
                            {listBeatComment.map((comment, index) => {
                                return (
                                    <div className={cx('show-comment-of-cus')}>
                                        <div className={cx('show-comment-left')}>
                                            <img className={cx('background-image')} src="https://static.hopamchuan.com/assets/images/default-ava.png" />
                                        </div>
                                        <div className={cx('show-comment-right')}>
                                            <div className={cx('comment-item-username')}>
                                                <span className={cx('username')}>Toi la Customer</span>
                                            </div>
                                            <div className={cx('comment-username')}>
                                                <div className={cx('text-comment-username')}>
                                                    <span>{comment.content}</span>
                                                </div>
                                                <div className={cx('edit-delete')}>
                                                    <React.Fragment>
                                                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                                            <Tooltip title="Chỉnh sửa hoặc xóa bình luận này">
                                                                <IconButton
                                                                    onClick={handleClick}
                                                                    size="small"
                                                                    sx={{ ml: 2 }}
                                                                    aria-controls={open ? 'account-menu' : undefined}
                                                                    aria-haspopup="true"
                                                                    aria-expanded={open ? 'true' : undefined}
                                                                >
                                                                    <Avatar sx={{
                                                                        width: 20,
                                                                        height: 20,
                                                                        color: 'black',
                                                                        backgroundColor: 'white',
                                                                        '&:hover': {
                                                                            backgroundColor: 'lightgray',
                                                                            cursor: 'pointer'
                                                                        },
                                                                    }}>...</Avatar>
                                                                </IconButton>
                                                            </Tooltip>
                                                        </Box>
                                                        <Menu
                                                            anchorEl={anchorEl}
                                                            id="account-menu"
                                                            open={open}
                                                            onClose={handleClose}
                                                            onClick={handleClose}
                                                            PaperProps={{
                                                                elevation: 0,
                                                                sx: {
                                                                    overflow: 'visible',
                                                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                                    mt: 1.5,
                                                                    '& .MuiAvatar-root': {
                                                                        width: 32,
                                                                        height: 32,
                                                                        ml: -0.5,
                                                                        mr: 1,
                                                                    },
                                                                    '&:before': {
                                                                        content: '""',
                                                                        display: 'block',
                                                                        position: 'absolute',
                                                                        top: 0,
                                                                        right: 14,
                                                                        width: 10,
                                                                        height: 10,
                                                                        bgcolor: 'background.paper',
                                                                        transform: 'translateY(-50%) rotate(45deg)',
                                                                        zIndex: 0,
                                                                    },
                                                                },
                                                            }}
                                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                                        >
                                                            <MenuItem onClick={handleClose}>
                                                                Chỉnh sửa
                                                            </MenuItem>
                                                            <MenuItem onClick={handleClose}>
                                                                Xóa
                                                            </MenuItem>
                                                        </Menu>
                                                    </React.Fragment>
                                                </div>
                                            </div>
                                            <div className={cx('reply')}>
                                                <div className={cx('replay-title')}>
                                                    <div className={cx('comment-box')}>
                                                        <span
                                                            onClick={handleCommentClick}
                                                        >
                                                            trả lời
                                                        </span>
                                                        {isCommenting && (
                                                            <div>
                                                                <textarea
                                                                    value={content}
                                                                    onChange={handleInputChange}
                                                                    placeholder="Enter your comment..."
                                                                    rows="2"
                                                                    cols="50"
                                                                />
                                                                <br />
                                                                <button onClick={handlePostComment}>Post a comment</button>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}</div> : <div></div>}
                    </div>
                </div>



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
        return <h1>Loading Page...</h1>
    }
}
export default ViewDetailBeat;