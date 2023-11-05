import classNames from "classnames/bind";
import styles from "./ChordsDetails.module.scss";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Chords from "../../components/Chords";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faPause, faPlay, faPlayCircle, faRedo, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";
import GUITAR from "../../assets/ImageForChords/Guitar";
import PIANO from "../../assets/ImageForChords/Piano";
import UKULELE from "../../assets/ImageForChords/Ukulele";
import Popup from "reactjs-popup";
import axios from "axios";
import axiosInstance from "../../authorization/axiosInstance";
import useToken from "@/authorization/useToken";
import jwtDecode from "jwt-decode";

const cx = classNames.bind(styles);

const KEY = ["C", "D", "E", "F", "G", "A", "B", "A#", "C#", "D#", "F#", "G#"];
const SUFFIX = ["major", "minor", "7", "m7", "maj7"];
const INSTRUMENT = ["ukulele", "guitar", "piano"];


// const DATA = [
//     {
//         type: "Guitar",
//         value: GUITAR,
//     },
//     {
//         type: "Piano",
//         value: PIANO,
//     },
//     {
//         type: "Ukulele",
//         value: UKULELE,
//     },
//     {
//         type: "All",
//         value: [GUITAR, [
//             {
//                 type: "Ukulele",
//                 img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Ukulele1_HiRes.jpg",
//             }
//         ],]
//     }
// ]


function ChordsDetails() {

    // const [list, setList] = useState(DATA);

    const [DATA, setDATA] = useState([]);
    const [key, setKey] = useState(KEY[0]);
    const [suffix, setSuffix] = useState(SUFFIX[0]);
    const [instrument, setInstrument] = useState(INSTRUMENT[0]);
    const [listChord, setListChord] = useState([]);
    const [listCollectionChord, setListCollectionChord] = useState([])
    const [collectionName, setCollectionName] = useState("")
    const token = useToken()
    const navigate = useNavigate()
    let userId = ""
    if (token) {
        userId = jwtDecode(token).sub
    }
    const contentStyle = { background: 'white', width: 330, borderRadius: 12, background: 'gray', color: 'white', marginBot:100 };

    const handleKeyChange = (e) => {
        setKey(e.target.value);
    }

    const handleSuffixChange = (e) => {
        setSuffix(e.target.value);
    }

    const handleInstrumentChange = (e) => {
        setInstrument(e.target.value);
    }

    const loadChordCollection = async () => {
        await axiosInstance.get(`http://localhost:8080/api/v1/chordcollection/user/${userId}`)
            .then((res) => {
                setListCollectionChord(res.data)
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const addAndCreateChordToCollection = async() => {
        if(!token){
            navigate("/login")
            return
        }
        await axiosInstance.post("http://localhost:8080/api/v1/chordcollection/addchord",{userId: userId, flag: "Create new collection", name: collectionName , chordId: [listChord[0].id] })
        .then((res) => {
            alert("Add Successfully")
        })
        .catch((error) =>{
            if(error.status === 501){
                alert("Collection name is present!")
            }
        })
    }

    const addChordToCollection = async(name) => {
        if(!token){
            navigate("/login")
            return
        }
        await axiosInstance.post("http://localhost:8080/api/v1/chordcollection/addchord",{userId: userId, flag: "", name: name , chordId: [listChord[0].id] })
        .then((res) => {
            alert("Add Successfully")
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    useEffect(() => {
        loadChordCollection()
    }, [])

    useEffect(() => {
        async function fetchData() {
            let data = await axiosInstance.get(`http://localhost:8080/chord/searchChord/${instrument}`);
            setDATA(data.data);
            let list = data.data.filter((item) => item.key === key && item.suffix === suffix);
            setListChord(list);
        }
        fetchData();
    }, [instrument])


    useEffect(() => {
        let list = DATA.filter((item) => item.key === key && item.suffix === suffix);
        setListChord(list);
    }, [key])

    useEffect(() => {
        let list = DATA.filter((item) => item.key === key && item.suffix === suffix);
        setListChord(list);
    }, [suffix])

    return (
        <div className={cx("list-header")}>
            <div className={cx("title-back")}>
                <h1 className={cx("title")}> CHORDS VARIATIONS</h1>

                <div className={cx("back")}></div>
            </div>
            <div>
                <nav className={cx("choice-header")} id="sidebar">
                    <div class="sidebar-header">
                        <h3>Chord collection</h3>
                    </div>
                    <div class="collection-box">
                        <h4>Key</h4>
                        <select id="chord-collection-keys" style={{ height: 40, witdh: 150 }} class="chord-collection-select" onChange={handleKeyChange} defaultValue={key}>
                            {KEY.map((item, index) => {
                                return <option key={index} value={item}>{item}</option>
                            })}
                        </select>
                    </div>
                    <div class="collection-box">
                        <h4>Suffix</h4>
                        <select id="chord-collection-suffixes" style={{ height: 40, witdh: 150 }} class="chord-collection-select" onChange={handleSuffixChange} defaultValue={suffix}>
                            {SUFFIX.map((item, index) => {
                                return <option key={index} value={item}>{item}</option>
                            })}
                        </select>
                    </div>
                    <div class="collection-box">
                        <h4>Instrument</h4>
                        <select id="chord-collection-suffixes" style={{ height: 40, witdh: 150 }} class="chord-collection-select" onChange={handleInstrumentChange} defaultValue={instrument}>
                            {INSTRUMENT.map((item, index) => {
                                return <option style={{ textTransform: 'uppercase', fontWeight: 500 }} key={index} value={item}>{item}</option>
                            })}
                        </select>
                    </div>
                    <Popup trigger={<button className={cx("button-popup")} style={{ padding: 10 }}> More Options </button>} {...{ contentStyle }} position="right center" >
                        <div className={cx("text-all")} >
                            {/* <div style={{ display: 'grid' }}>
                                <div className={cx("button-option-md")} style={{ padding: 10 }}>
                                    <button type="button" className={cx("button-option")} aria-disabled="false" >Download</button>
                                    <button type="button" className={cx("button-option")} aria-disabled="false" >Block</button>
                                </div>
                            </div> */}
                            <div style={{ marginTop: 40, marginBottom: 40 }}>
                                <Popup trigger={<button style={{ background: 'none', marginLeft: 75, fontSize: 18 }} className={cx("button-popup-add")}> Add to Playlist</button>} {...{ contentStyle }} position="right center" >
                                    <div className={cx("text-all")} style={{ padding: 10 }}>
                                        <td style={{ fontSize: 17, display: 'flex', justifyContent: 'center', fontWeight: 500 }}>
                                            <a>Create name of playlist</a>

                                        </td>
                                        <input style={{ resize: 'none', width: '275px', border: 1, height: 40, marginLeft: 14, marginTop: 20, marginBottom: 10, padding: 20, outline: '1px solid #E5E4E4', borderRadius: 12, backgroundColor: 'rgba(255, 255, 255, 0.3)', }} type="text" id="name" placeholder="Type here..." name="name" required minlength="4" maxlength="20" size="20" onChange={(e) => setCollectionName(e.target.value)} />
                                        <td className={cx("button-type")}>
                                            <button type="button" className={cx("button-send")} aria-disabled="false" onClick={() => addAndCreateChordToCollection()} >Create</button>
                                        </td>
                                    </div>
                                </Popup>
                                {listCollectionChord.length !== 0 && listCollectionChord.map((collectionChord) => {
                                    return (
                                        <div className={cx("link-text")} style={{ display: 'flex', fontSize: 18, fontWeight: 400, gap: 20, justifyContent: 'center', marginRight: 38, marginTop: 30 }} onClick={() => addChordToCollection(collectionChord.name)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M21 15V6M12 12H3M16 6H3M12 18H3M18.5 18C19.163 18 19.7989 17.7366 20.2678 17.2678C20.7366 16.7989 21 16.163 21 15.5C21 14.837 20.7366 14.2011 20.2678 13.7322C19.7989 13.2634 19.163 13 18.5 13C17.837 13 17.2011 13.2634 16.7322 13.7322C16.2634 14.2011 16 14.837 16 15.5C16 16.163 16.2634 16.7989 16.7322 17.2678C17.2011 17.7366 17.837 18 18.5 18Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <a>{collectionChord.name}</a>
                                        </div>)
                                })}
                            </div>
                        </div>
                    </Popup>
                </nav>
                <div className={cx("line")}>
                </div>
            </div>

            <div className={cx("list-chords")} style={{ marginBottom: '300px' }}>
                {listChord.map((item) => {
                    return <div style={{ display: "flex", flexDirection: "column", rowGap: "10px", }}>
                        <img className={cx("detail-img")} style={{ width: 250, height: 280, objectFit: 'fill', marginLeft: 400 }} key={item.type} src={item.image} alt={item.chordName} />
                        <p className={cx("img__description")} style={{ paddingTop: 100, fontWeight: "bold" }}>{item.chordName} {item.description}<p style={{ marginTop: -50, fontWeight: "normal" }}>{item.type}</p></p>
                    </div>
                })}
            </div>
        </div>

    );
}

export default ChordsDetails;