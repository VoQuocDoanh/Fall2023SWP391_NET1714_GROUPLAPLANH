import classNames from "classnames/bind";
import styles from "./Songs.module.scss";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useMemo, useRef, useState } from "react";
import axiosInstance from "../../authorization/axiosInstance";
import useToken from "../../authorization/useToken";
import { faComment, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const cx = classNames.bind(styles);

function Songs() {
    const token = useToken()
    const navigate = useNavigate()
    const [listSongs, setListSongs] = useState(null)
    const [listGenres, setListGenres] = useState(null)
    const loadSongs = async () => {
        if (!token) {
            navigate("/login")
        }
        await axiosInstance.get("http://localhost:8080/api/v1/song")
            .then((res) => {
                setListSongs(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const loadGenres = async() => {
        await axiosInstance.get("http://localhost:8080/api/v1/genre")
        .then((res) =>{
            setListGenres(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
        loadGenres()
    },[])
    useEffect(() => {
        loadSongs()
    }, [])
    if (listSongs !== null) {
        return (

            <div className={cx("list-songs")}>
                <h1 className={cx("title")}> CHORDS OF SONGS</h1>
                <footer className={cx("Add-Songs")}>
                    <Link to="/UploadSong" className={cx("Add-Songs-body", "card-action")}>Add new song</Link>
                </footer>
                {/* <div className={cx("button-chords")}>
                <Link to="/chordsdetails">
                    <button variant="contained" className={cx("button")}>
                        <div className={cx("text")}>Chords</div>
                    </button>
                </Link>
                <Link to="/songs">
                    <button variant="contained" className={cx("button")}>
                        <div className={cx("text")}>Songs</div>
                    </button>
                </Link>
                <Link to="/listbeat2">
                    <button variant="contained" className={cx("button")}>
                        <div className={cx("text")}>List Beat</div>
                    </button>
                </Link>
                <div className={cx("line")}>
                </div>
            </div> */}
                <div className={cx("middle-moinoi")}>
                    <div className={cx("panel-content-text-center-padding-both")}>
                        <div className={cx("title-song-style")}>
                            <h3 >Songs Style</h3>
                        </div>
                        <div className={cx('sum')}>
                        {listGenres ? 
                            <div className={cx("rhythm-list")} id="rhythms">
                                {listGenres.map((item) => {

                                
                                return <a className={cx("rhythm-item")} data-rhythm="ballad" >
                                    {item.name}
                                </a>
                                })}
                                
                            </div> : <div></div>}
                        </div>


                    </div>


                    {listSongs ?
                        <div>
                            {listSongs.map((song, index) => {
                                return (
                                    <div className={cx("list-songs-middle")}>


                                        <h3 className={cx("title-song-style2")}>  Most Popular Today</h3>
                                        <div className={cx("hot-today-item flex-center-between")}>
                                            <div className="flex-center-start">
                                                <span className={cx("hot-today-views")}>
                                                    <FontAwesomeIcon icon={faStar} />
                                                    <span className={cx("hot-today-view-count")}>{song.view}</span>
                                                </span>

                                                <div>
                                                    <a className={cx("hot-today-item-song")}>
                                                        {song.songName} |                                </a>
                                                    <span className={("hot-today-item-singers")}>
                                                        <a className={cx("author-item")}>
                                                            {song.author}                                  </a>

                                                    </span>
                                                </div>
                                            </div>
                                            <div className={cx("text-gray nowrap text-small pr-10")}>
                                                <FontAwesomeIcon icon={faComment} />
                                            </div>
                                        </div>

                                    </div>
                                )
                            })}
                        </div> : <div>There are no songs in the system</div>}
                    <div className={cx("moinoi")}>
                        <div className={cx("new-release")}>New Realse</div>
                        <div className={cx("hot-today-item-flex-center-between")}>
                            <div className={cx("flex-center-start")}>
                                <span className={cx("hot-today-views")}>
                                    <i className={cx("fa fa-caret-up")}></i>
                                    <span className={cx("hot-today-view-count")}>1641</span>
                                </span>

                                <div>
                                    <a className={cx("ot-today-item-song")} href="https://hopamchuan.com/song/66072/cat-doi-noi-sau">
                                        1. You are the greatest                               </a>
                                </div>
                            </div>
                        </div>
                        

                    </div>

                </div>

            </div>
        );
    }
    else {
        <div>Loading Songs Page...</div>
    }
}

export default Songs;
