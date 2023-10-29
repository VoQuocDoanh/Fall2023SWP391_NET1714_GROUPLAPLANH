import classNames from "classnames/bind";
import styles from "./ChordsDetails.module.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Chords from "../../components/Chords";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faPause, faPlay, faPlayCircle, faRedo, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";
import GUITAR from "../../assets/ImageForChords/Guitar";
import PIANO from "../../assets/ImageForChords/Piano";
import UKULELE from "../../assets/ImageForChords/Ukulele";
import Popup from "reactjs-popup";

const cx = classNames.bind(styles);

const KEY = ["C", "D", "E", "F", "G", "A", "B"];
const SUFFIX = ["major", "minor", "7", "m7", "maj7"];
const INSTRUMENT = ["Ukulele", "Guitar", "Piano"];


const DATA = [
    {
        type: "Guitar",
        value: GUITAR,
    },
    {
        type: "Piano",
        value: PIANO,
    },
    {
        type: "Ukulele",
        value: UKULELE,
    },
    {
        type: "All",
        value: [GUITAR, [
            {
                type: "Ukulele",
                img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Ukulele1_HiRes.jpg",
            }
        ],]
    }
]


function ChordsDetails() {

    // const [list, setList] = useState(DATA);

    const [key, setKey] = useState(KEY[0]);
    const [suffix, setSuffix] = useState(SUFFIX[0]);
    const [instrument, setInstrument] = useState(INSTRUMENT[1]);
    const [listChord, setListChord] = useState([]);
    const contentStyle = { background: 'white', width: 360, height: 270, borderRadius: 20, background: '#34224F', color: 'white' };
    const handleKeyChange = (e) => {
        setKey(e.target.value);
    }

    const handleSuffixChange = (e) => {
        setSuffix(e.target.value);
    }

    const handleInstrumentChange = (e) => {
        setInstrument(e.target.value);
    }

    // useEffect(() => {
    //     let listFilter = DATA.filter((list) => list.type === instrument);
    //     let listType = listFilter[0].value.map((item) => {
    //         return item;
    //     })
    //     setListChord(listType.flat(Infinity));
    // }, [])

    useEffect(() => {
        let listFilter = DATA.filter((list) => list.type === instrument);
        let listType = listFilter[0].value.map((item) => {
            return item;
        })
        if (key !== "All") {
            let list = listType.flat(Infinity).filter((item) => {
                return item.key === key;
            });
            if (suffix !== "All") {
                list = list.filter(item => item.suffix === suffix);
            }
            setListChord(list);
        }
        // } else {
        //     setListChord(listType.flat(Infinity))
        // }
    }, [key])

    useEffect(() => {
        let listFilter = DATA.filter((list) => list.type === instrument);
        let listType = listFilter[0].value.map((item) => {
            return item;
        })
        if (suffix !== "All") {
            let list = listType.flat(Infinity).filter((item) => {
                return item.suffix === suffix;
            });
            if (key !== "All") {
                list = list.filter(item => item.key === key);
            }
            setListChord(list);
        }
        // } else {
        //     setListChord(listType.flat(Infinity))
        // }
    }, [suffix])

    useEffect(() => {
        let listFilter = DATA.filter((list) => list.type === instrument);
        let listType = listFilter[0].value.map((item) => {
            return item;
        })
        // if(key !== "All" && suffix == "All") {
        //     let list = listType.flat(Infinity).filter((item) => {
        //         return item.key === key;
        //     });
        //     setListChord(list);
        // } else if(key === "All" && suffix !== "All") {
        //     let list = listType.flat(Infinity).filter((item) => {
        //         return item.suffix === suffix;
        //     });
        //     setListChord(list);
        if (key !== "All" && suffix !== "All") {
            let list = listType.flat(Infinity).filter((item) => {
                return item.key === key && item.suffix === suffix;
            });
            setListChord(list)
            // }else {
            //     setListChord(listType.flat(Infinity));
        }
    }, [instrument])

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
                        <select id="chord-collection-keys" class="chord-collection-select" onChange={handleKeyChange} defaultValue={key}>
                            {KEY.map((item, index) => {
                                return <option key={index} value={item}>{item}</option>
                            })}
                        </select>
                    </div>
                    <div class="collection-box">
                        <h4>Suffix</h4>
                        <select id="chord-collection-suffixes" class="chord-collection-select" onChange={handleSuffixChange} defaultValue={suffix}>
                            {SUFFIX.map((item, index) => {
                                return <option key={index} value={item}>{item}</option>
                            })}
                        </select>
                    </div>
                    <div class="collection-box">
                        <h4>Instrument</h4>
                        <select id="chord-collection-suffixes" class="chord-collection-select" onChange={handleInstrumentChange} defaultValue={instrument}>
                            {INSTRUMENT.map((item, index) => {
                                return <option key={index} value={item}>{item}</option>
                            })}
                        </select>
                    </div>
                    <Popup trigger={<button className={cx("button-popup")} style={{ padding: 10 }} > More Options </button>} {...{ contentStyle }} position="right center" >
                        <div className={cx("text-all")} >
                            <div style={{ display: 'grid' }}>
                                <div className={cx("button-option-md")} style={{ padding: 10 }}>
                                    <button type="button" className={cx("button-option")} aria-disabled="false" >Dowload</button>
                                    <button type="button" className={cx("button-option")} aria-disabled="false" >Block</button>
                                </div>
                            </div>
                            <div style={{ marginTop: 40 }}>
                                <div className={cx("link-text")} style={{ display: 'flex', fontSize: 18, fontWeight: 400, gap: 20, justifyContent: 'center', marginRight: 30, marginTop: 10 }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 51 51" fill="none">
                                        <path d="M27.6253 40.6152C27.9093 40.8983 28.1347 41.2346 28.2885 41.605C28.4423 41.9754 28.5214 42.3724 28.5214 42.7734C28.5214 43.1744 28.4423 43.5715 28.2885 43.9419C28.1347 44.3122 27.9093 44.6486 27.6253 44.9316L26.1171 46.4398C23.2592 49.2977 19.383 50.9033 15.3413 50.9033C11.2996 50.9033 7.42344 49.2977 4.56553 46.4398C1.70761 43.5819 0.102051 39.7058 0.102051 35.6641C0.102051 31.6223 1.70761 27.7462 4.56553 24.8883L10.6897 18.7666C13.4357 16.0138 17.1303 14.4152 21.0167 14.2981C24.9031 14.1811 28.6872 15.5544 31.5938 18.1369C31.8939 18.4037 32.1385 18.7269 32.3137 19.0882C32.4889 19.4495 32.5912 19.8417 32.6148 20.2425C32.6383 20.6433 32.5827 21.0449 32.4511 21.4242C32.3195 21.8035 32.1145 22.1532 31.8478 22.4533C31.581 22.7534 31.2578 22.998 30.8965 23.1732C30.5352 23.3484 30.1429 23.4506 29.7421 23.4742C29.3413 23.4978 28.9398 23.4422 28.5605 23.3106C28.1811 23.179 27.8314 22.974 27.5313 22.7072C25.7883 21.1592 23.5197 20.3357 21.1896 20.4051C18.8594 20.4744 16.6438 21.4315 14.996 23.0805L8.87685 29.1945C7.16237 30.909 6.19919 33.2343 6.19919 35.659C6.19919 38.0836 7.16237 40.4089 8.87685 42.1234C10.5913 43.8379 12.9167 44.8011 15.3413 44.8011C17.7659 44.8011 20.0913 43.8379 21.8058 42.1234L23.314 40.6152C23.5969 40.3319 23.933 40.1072 24.3029 39.9539C24.6727 39.8005 25.0692 39.7216 25.4696 39.7216C25.87 39.7216 26.2665 39.8005 26.6364 39.9539C27.0063 40.1072 27.3423 40.3319 27.6253 40.6152ZM46.4347 4.56054C43.5744 1.70702 39.6991 0.104492 35.6589 0.104492C31.6186 0.104492 27.7434 1.70702 24.8831 4.56054L23.3749 6.06874C22.8025 6.64113 22.4809 7.41746 22.4809 8.22694C22.4809 9.03643 22.8025 9.81276 23.3749 10.3851C23.9473 10.9575 24.7236 11.2791 25.5331 11.2791C26.3426 11.2791 27.1189 10.9575 27.6913 10.3851L29.1995 8.87694C30.914 7.16246 33.2393 6.19928 35.664 6.19928C38.0886 6.19928 40.4139 7.16246 42.1284 8.87694C43.8429 10.5914 44.8061 12.9168 44.8061 15.3414C44.8061 17.766 43.8429 20.0914 42.1284 21.8058L36.0067 27.9301C34.3575 29.5783 32.1406 30.534 29.8099 30.6015C27.4792 30.669 25.2107 29.8432 23.4688 28.2932C23.1688 28.0264 22.8191 27.8214 22.4397 27.6898C22.0604 27.5582 21.6589 27.5026 21.2581 27.5262C20.8572 27.5497 20.465 27.652 20.1037 27.8272C19.7424 28.0024 19.4192 28.247 19.1524 28.5471C18.8857 28.8472 18.6807 29.1968 18.5491 29.5762C18.4175 29.9555 18.3619 30.357 18.3854 30.7579C18.409 31.1587 18.5113 31.5509 18.6865 31.9122C18.8616 32.2735 19.1063 32.5967 19.4063 32.8635C22.311 35.4454 26.0925 36.8196 29.9771 36.7049C33.8617 36.5902 37.5556 34.9953 40.3028 32.2465L46.427 26.1248C49.2839 23.2652 50.8893 19.3889 50.8907 15.3468C50.8921 11.3047 49.2895 7.42718 46.4347 4.56562V4.56054Z" fill="white" />
                                    </svg>
                                    <a style={{}}>Coppy link</a>
                                </div>
                                <Popup style={{ position: 'fixed', top: "50%", left: '50%' }} trigger={<button style={{ background: 'none', marginLeft: 85, fontSize: 18 }} className={cx("button-popup-add")}> Add to Playlist</button>} {...{ contentStyle }} position="left center" >
                                    <div className={cx("text-all")} style={{ padding: 10 }}>
                                        <td style={{fontSize: 17}}>
                                            <a>Create name of playlist</a>
                                        </td>
                                        <input style={{ resize: 'none', width: '275px', border: 1, height: 40, marginLeft: 24,marginTop: 20, marginBottom: 10, padding: 20, outline: '1px solid #E5E4E4', borderRadius: 12 }} type="text" id="name" name="name" required minlength="4" maxlength="20" size="20" />
                                        <td className={cx("button-type")}>
                                            <button type="button" className={cx("button-send")} aria-disabled="false" >Create</button>
                                        </td>
                                    </div>
                                </Popup>
                                <div className={cx("link-text")} style={{ display: 'flex', fontSize: 18, fontWeight: 400, gap: 20, justifyContent: 'center', marginRight: 70, marginTop: 15 }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20" fill="none">
                                        <path d="M5.83337 17.5C5.37504 17.5 4.98254 17.3367 4.65587 17.01C4.32921 16.6833 4.16615 16.2911 4.16671 15.8333V5H3.33337V3.33333H7.50004V2.5H12.5V3.33333H16.6667V5H15.8334V15.8333C15.8334 16.2917 15.67 16.6842 15.3434 17.0108C15.0167 17.3375 14.6245 17.5006 14.1667 17.5H5.83337ZM14.1667 5H5.83337V15.8333H14.1667V5ZM7.50004 14.1667H9.16671V6.66667H7.50004V14.1667ZM10.8334 14.1667H12.5V6.66667H10.8334V14.1667Z" fill="white" />
                                    </svg>
                                    <a style={{}}>Delete</a>
                                </div>
                            </div>
                        </div>
                    </Popup>
                </nav>
                <div className={cx("line")}>
                </div>
            </div>

            <div className={cx("list-chords")} style={{}}>
                {listChord.map((item) => {
                    return <img className={cx("detail-img")} style={{ width: 250, height: 260, objectFit: 'fill', marginLeft: 700 }} key={item.type} src={item.img} alt={item.type} />
                })}
                <p className={cx("img__description")}>This image looks super neat<p style={{ marginTop: 35 }}>Description About Chords</p></p>
            </div>
        </div>

    );
}

export default ChordsDetails;