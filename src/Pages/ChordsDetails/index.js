import classNames from "classnames/bind";
import styles from "./ChordsDetails.module.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Chords from "../../components/Chords";
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
    },
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
    },
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



]

function ChordsDetails() {

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
                        <select id="chord-collection-keys" class="chord-collection-select"><option value="C" selected="selected">C</option><option value="C#">C#</option><option value="D">D</option><option value="D#">D#</option><option value="E">E</option><option value="F">F</option><option value="F#">F#</option><option value="G">G</option><option value="G#">G#</option><option value="A">A</option><option value="A#">A#</option><option value="B">B</option></select>
                    </div>
                    <div class="collection-box">
                        <h4>Suffix</h4>
                        <select id="chord-collection-suffixes" class="chord-collection-select"><option value="" selected="selected">major</option><option value="m">minor</option><option value="dim">dim</option><option value="aug">aug</option><option value="sus2">sus2</option><option value="sus4">sus4</option><option value="majb5">majb5</option><option value="m#5">m#5</option><option value="mbb5">mbb5</option><option value="sus4#5">sus4#5</option><option value="sus2b5">sus2b5</option><option value="sus2#5">sus2#5</option><option value="7">7</option><option value="m7">m7</option><option value="maj7">maj7</option><option value="mmaj7">mmaj7</option><option value="dim7">dim7</option><option value="aug7">aug7</option><option value="augmaj7">augmaj7</option><option value="7b5">7b5</option><option value="maj7b5">maj7b5</option><option value="m7b5">m7b5</option><option value="mmaj7b5">mmaj7b5</option><option value="mmaj7bb5">mmaj7bb5</option><option value="m7#5">m7#5</option><option value="mmaj7#5">mmaj7#5</option><option value="7b9">7b9</option><option value="6">6</option><option value="m6">m6</option><option value="6b5">6b5</option><option value="6add9">6add9</option><option value="m6add9">m6add9</option><option value="9">9</option><option value="m9">m9</option><option value="maj9">maj9</option><option value="mmaj9">mmaj9</option><option value="9b5">9b5</option><option value="aug9">aug9</option><option value="9sus4">9sus4</option><option value="7#9">7#9</option><option value="7#9b5">7#9b5</option><option value="augmaj9">augmaj9</option><option value="11">11</option><option value="m11">m11</option><option value="maj11">maj11</option><option value="mmaj11">mmaj11</option><option value="maj#11">maj#11</option><option value="13">13</option><option value="m13">m13</option><option value="maj13">maj13</option><option value="mmaj13">mmaj13</option><option value="7sus2">7sus2</option><option value="maj7sus2">maj7sus2</option><option value="7sus4">7sus4</option><option value="maj7sus4">maj7sus4</option><option value="7sus2#5">7sus2#5</option><option value="7sus4#5">7sus4#5</option><option value="maj7sus4#5">maj7sus4#5</option><option value="sus2sus4">sus2sus4</option><option value="7sus2sus4">7sus2sus4</option><option value="maj7sus2sus4">maj7sus2sus4</option><option value="5">5</option><option value="add9">add9</option></select>
                    </div>
                    <div class="collection-box">
                        <h4>Instrument</h4>
                        <select id="chord-collection-bass-note" class="chord-collection-select"><option value="" selected="selected"></option><option value="C">Ukulele</option><option value="C#">Guitar</option><option value="D">Piano</option></select>
                    </div>
                </nav>
                <div className={cx("line")}>
                </div>
            </div>
            <div className={cx("list-chords")}>
                {list.map((item, index) => {
                    return <Chords />
                })}
            </div>


        </div>

    );
}

export default ChordsDetails;