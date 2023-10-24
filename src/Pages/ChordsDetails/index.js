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

const cx = classNames.bind(styles);

const KEY = ["All", "C", "D", "E", "F", "G", "A", "B"];
const SUFFIX = ["All", "major", "minor", "7", "m7", "maj7"];
const INSTRUMENT = ["All", "Ukulele", "Guitar", "Piano"];


const DATA = [
    {
        type: "Guitar",
        value: GUITAR,
    },
    {
        type: "Piano",
        value: [
            {
                type: "Piano",
                img: "https://i0.wp.com/pianohome.vn/wp-content/uploads/2020/10/16-scaled.jpeg",
            }
        ],
    },
    {
        type: "Ukulele",
        value: [
            {
                type: "Ukulele",
                img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Ukulele1_HiRes.jpg",
            }
        ],
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
    const [instrument, setInstrument] = useState(INSTRUMENT[0]);
    const [listChord, setListChord] = useState([]);

    const handleKeyChange = (e) => {
        setKey(e.target.value);
    }

    const handleSuffixChange = (e) => {
        setSuffix(e.target.value);
    }

    const handleInstrumentChange = (e) => {
        setInstrument(e.target.value);
    }

    useEffect(() => {
        let listFilter = DATA.filter((list) => list.type === instrument);
        let listType = listFilter[0].value.map((item) => {
            return item;
        })
        setListChord(listType.flat(Infinity));
    }, [])

    useEffect(() => {
        let listFilter = DATA.filter((list) => list.type === instrument);
        let listType = listFilter[0].value.map((item) => {
            return item;
        })
        if (key !== "All") {
            let list = listType.flat(Infinity).filter((item) => {
                return item.key === key;
            });
            if(suffix !== "All") {
                list = list.filter(item => item.suffix === suffix);
            }
            setListChord(list);
        } else {
            setListChord(listType.flat(Infinity))
        }
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
            if(key !== "All") {
                list = list.filter(item => item.key === key);
            }
            setListChord(list);
        } else {
            setListChord(listType.flat(Infinity))
        }
    }, [suffix])

    useEffect(() => {
        let listFilter = DATA.filter((list) => list.type === instrument);
        let listType = listFilter[0].value.map((item) => {
            return item;
        })
        if(key !== "All" && suffix == "All") {
            let list = listType.flat(Infinity).filter((item) => {
                return item.key === key;
            });
            setListChord(list);
        } else if(key === "All" && suffix !== "All") {
            let list = listType.flat(Infinity).filter((item) => {
                return item.suffix === suffix;
            });
            setListChord(list);
        }else if(key !== "All" && suffix !== "All"){
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
                </nav>
                <div className={cx("line")}>
                </div>
            </div>

            <div className={cx("list-chords")}>
                {listChord.map((item) => {
                    return <img key={item.type} src={item.img} alt={item.type} />
                })}
            </div>


        </div>

    );
}

export default ChordsDetails;