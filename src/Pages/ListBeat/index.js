
import classNames from "classnames/bind";
import styles from "./ListBeat.module.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useEffect, useMemo, useState } from "react";
import ListBeatBox from "../../components/ListBeatBox";

const cx = classNames.bind(styles);


const DATA = [
    {
        name: "anh 1",
        type: "beat",
        price: "85$",
        member: "85",
    }, {
        name: "anh 2",
        type: "beat",
        price: "85$",
        member: "85",
    }, {
        name: "anh 3",
        type: "beat",
        price: "85$",
        member: "85",
    }, {
        name: "anh 4",
        type: "beat",
        price: "85$",
        member: "85",
    }, {
        name: "anh 5",
        type: "beat",
        price: "85$",
        member: "85",
    }, {
        name: "anh 6",
        type: "beat",
        price: "85$",
        member: "85",
    }, {
        name: "anh 7",
        type: "beat",
        price: "85$",
        member: "85",
    },
    {
        name: "anh 8",
        type: "beat",
        price: "85$",
        member: "85",
    },

    {
        name: "anh 9",
        type: "beat",
        price: "85$",
        member: "85",
    },

    {
        name: "anh 10",
        type: "beat",
        price: "85$",
        member: "85",
    },

    {
        name: "anh 11",
        type: "beat",
        price: "85$",
        member: "85",
    },

    {
        name: "anh 12",
        type: "beat",
        price: "85$",
        member: "85",
    },

    {
        name: "anh 13",
        type: "beat",
        price: "85$",
        member: "85",
    },

    {
        name: "anh 14",
        type: "beat",
        price: "85$",
        member: "85",
    },

    {
        name: "anh 15",
        type: "beat",
        price: "85$",
        member: "85",
    },
    {
        name: "anh 15",
        type: "beat",
        price: "85$",
        member: "85",
    },
    {
        name: "anh 15",
        type: "beat",
        price: "85$",
        member: "85",
    },
    {
        name: "anh 15",
        type: "beat",
        price: "85$",
        member: "85",
    },
    


]

function ListBeat() {

    const [search, setSearch] = useState("");
    const [list, setList] = useState(DATA);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        // setList(data);
    }

    useEffect(() => {
        const data = DATA.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
        setList(data);
    }, [search])
    // useEffect(() => {
    //     const video = document.querySelector('video');
    //     if (video) {
    //         video.playbackRate = 1.5;
    //     }
    // }, []);
    return (


        <div className={cx("list-header")}>
            <div className={cx("text-header")}>
                <h1 className={cx("text-welcome")}>
                    Welcome To Our Beat
                </h1>
                {/* <div>
                    <video src="src/assets/video/video(2160p).mp4" controls/>
                </div> */}
            </div>
            <div className={cx("icon-shopping")}>
                <Link to="/viewcart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 39 39" fill="none">
                        <path d="M30.875 30.75C28.7938 30.75 27.125 32.4188 27.125 34.5C27.125 35.4946 27.5201 36.4484 28.2234 37.1516C28.9266 37.8549 29.8804 38.25 30.875 38.25C31.8696 38.25 32.8234 37.8549 33.5266 37.1516C34.2299 36.4484 34.625 35.4946 34.625 34.5C34.625 33.5054 34.2299 32.5516 33.5266 31.8484C32.8234 31.1451 31.8696 30.75 30.875 30.75ZM0.875 0.75V4.5H4.625L11.375 18.7313L8.825 23.325C8.54375 23.85 8.375 24.4688 8.375 25.125C8.375 26.1196 8.77009 27.0734 9.47335 27.7766C10.1766 28.4799 11.1304 28.875 12.125 28.875H34.625V25.125H12.9125C12.7882 25.125 12.669 25.0756 12.581 24.9877C12.4931 24.8998 12.4438 24.7806 12.4438 24.6562C12.4438 24.5625 12.4625 24.4875 12.5 24.4312L14.1875 21.375H28.1562C29.5625 21.375 30.8 20.5875 31.4375 19.4438L38.15 7.3125C38.2812 7.0125 38.375 6.69375 38.375 6.375C38.375 5.87772 38.1775 5.40081 37.8258 5.04918C37.4742 4.69754 36.9973 4.5 36.5 4.5H8.76875L7.00625 0.75M12.125 30.75C10.0437 30.75 8.375 32.4188 8.375 34.5C8.375 35.4946 8.77009 36.4484 9.47335 37.1516C10.1766 37.8549 11.1304 38.25 12.125 38.25C13.1196 38.25 14.0734 37.8549 14.7766 37.1516C15.4799 36.4484 15.875 35.4946 15.875 34.5C15.875 33.5054 15.4799 32.5516 14.7766 31.8484C14.0734 31.1451 13.1196 30.75 12.125 30.75Z" fill="black" />
                    </svg>
                    <div className={cx("shopping-text")}>
                        Shopping Cart
                    </div>
                </Link>
            </div>
            <div className={cx("search")}>
                <input type="text" placeholder="Search Beat..." value={search} onChange={handleSearch} />
            </div>
            <div className={cx("list-beat")}>
                {list.map((item) => {
                    return <ListBeatBox name={item.name} type={item.type} price={item.price} member={item.member} />
                })}
            </div>

            

        </div>

    );
}

export default ListBeat;