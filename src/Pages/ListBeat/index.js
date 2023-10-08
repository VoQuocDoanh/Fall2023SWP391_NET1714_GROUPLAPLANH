
import classNames from "classnames/bind";
import styles from "./ListBeat.module.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useEffect, useMemo, useState } from "react";

const cx = classNames.bind(styles);
function ListBeat() {

    // const [searchBeat, setSearchBeat] = useState("");
    // const [listBeat, setListBeat] = useState(DATA);

    // const handleSearchBeat = (event) => {
    //     setSearchBeat(event.target.value);      
    // }

    // useEffect(() => {
    //     const list = DATA.filter((item) => item.beatname.toLowerCase().includes(searchBeat.toLowerCase()));
    //     setListBeat(list);
    // }, [searchBeat])

    return (
        <div className={cx("list-header")}>
            <div className={cx("text-header")}>
                <div className={cx("shopping-cart")}>
                    <h1 className={cx("text-welcome")}>
                        Welcome To Our Beat
                    </h1>
                    <div className={cx("icon-shoppingcart")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                            <path d="M31.875 33.75C29.7937 33.75 28.125 35.4187 28.125 37.5C28.125 38.4946 28.5201 39.4484 29.2234 40.1516C29.9266 40.8549 30.8804 41.25 31.875 41.25C32.8696 41.25 33.8234 40.8549 34.5266 40.1516C35.2299 39.4484 35.625 38.4946 35.625 37.5C35.625 36.5054 35.2299 35.5516 34.5266 34.8484C33.8234 34.1451 32.8696 33.75 31.875 33.75ZM1.875 3.75V7.5H5.625L12.375 21.7313L9.825 26.325C9.54375 26.85 9.375 27.4688 9.375 28.125C9.375 29.1196 9.77009 30.0734 10.4733 30.7766C11.1766 31.4799 12.1304 31.875 13.125 31.875H35.625V28.125H13.9125C13.7882 28.125 13.669 28.0756 13.581 27.9877C13.4931 27.8998 13.4438 27.7806 13.4438 27.6562C13.4438 27.5625 13.4625 27.4875 13.5 27.4313L15.1875 24.375H29.1563C30.5625 24.375 31.8 23.5875 32.4375 22.4438L39.15 10.3125C39.2812 10.0125 39.375 9.69375 39.375 9.375C39.375 8.87772 39.1775 8.40081 38.8258 8.04918C38.4742 7.69754 37.9973 7.5 37.5 7.5H9.76875L8.00625 3.75M13.125 33.75C11.0437 33.75 9.375 35.4187 9.375 37.5C9.375 38.4946 9.77009 39.4484 10.4733 40.1516C11.1766 40.8549 12.1304 41.25 13.125 41.25C14.1196 41.25 15.0734 40.8549 15.7766 40.1516C16.4799 39.4484 16.875 38.4946 16.875 37.5C16.875 36.5054 16.4799 35.5516 15.7766 34.8484C15.0734 34.1451 14.1196 33.75 13.125 33.75Z" fill="black" />
                        </svg>
                        <div className={cx("content-8")}>
                            <Link to="/viewcart">Shopping Cart</Link>
                        </div>
                    </div>
                </div>
                <div className={cx("search-beat")}>
                    {/* <input type="text" value={searchBeat} onChange={e => setSearchBeat(e.target.value)} className={cx("input-search")} placeholder="Search beat" /> */}
                </div>
            </div>
            <div className={cx("Column-first")}>
                {/* <div className={cx("content-5")}>
                    ----------Top cinematic items----------
                </div> */}
                <div className={cx("chords-part")}>
                    <div className={cx("chords-details")}>
                        <img className={cx("chords-details-img")} src={require("../../assets/images/Chords/Rectangle 23.png")}>
                        </img>
                        <div className={cx("content-3")}>
                            BeatName
                        </div>
                        <div className={cx("content-3")}>
                            QuocDoanh
                        </div>
                        <div className={cx("content-4")}>
                            The guitar sound is characterized by its versatile and melodic tones
                        </div>
                        <div className={cx("content-cart")}>
                            <div className={cx("content-6")}>
                                Price: 565$
                            </div>
                            <div className={cx("content-7")}>
                                145 sales
                            </div>
                            <Link to="/viewcart" className={cx("icon-cart")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 25 25" fill="none">
                                    <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#4ECB71" />
                                </svg>
                            </Link>
                        </div>
                        <div className={cx("icon-trending-4")}>
                            <div className={cx("icon-trending2")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                    <path d="M8.75 29.1666H26.25M17.5 5.83325V23.3333M17.5 23.3333L22.6042 18.2291M17.5 23.3333L12.3958 18.2291" stroke="#4ECB71" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span class={cx("span")}></span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                    <path d="M33.95 15.75H28V9.8C28 8.75 27.3 8.75 26.25 8.75C25.2 8.75 24.5 8.75 24.5 9.8V15.75H18.55C17.5 15.75 17.5 16.45 17.5 17.5C17.5 18.55 17.5 19.25 18.55 19.25H24.5V25.2C24.5 26.25 25.2 26.25 26.25 26.25C27.3 26.25 28 26.25 28 25.2V19.25H33.95C35 19.25 35 18.55 35 17.5C35 16.45 35 15.75 33.95 15.75ZM12.95 15.75H1.05C0 15.75 0 16.45 0 17.5C0 18.55 0 19.25 1.05 19.25H12.95C14 19.25 14 18.55 14 17.5C14 16.45 14 15.75 12.95 15.75ZM12.95 24.5H1.05C0 24.5 0 25.2 0 26.25C0 27.3 0 28 1.05 28H12.95C14 28 14 27.3 14 26.25C14 25.2 14 24.5 12.95 24.5ZM12.95 7H1.05C0 7 0 7.7 0 8.75C0 9.8 0 10.5 1.05 10.5H12.95C14 10.5 14 9.8 14 8.75C14 7.7 14 7 12.95 7Z" fill="#4ECB71" />
                                </svg>
                                <span class={cx("span")}></span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                    <path d="M17.4998 31.1354L15.3853 29.2104C7.87484 22.4 2.9165 17.8938 2.9165 12.3958C2.9165 7.88958 6.44567 4.375 10.9373 4.375C13.4748 4.375 15.9103 5.55625 17.4998 7.40833C19.0894 5.55625 21.5248 4.375 24.0623 4.375C28.554 4.375 32.0832 7.88958 32.0832 12.3958C32.0832 17.8938 27.1248 22.4 19.6144 29.2104L17.4998 31.1354Z" fill="#4ECB71" />
                                </svg>
                            </div>
                        </div>

                    </div>

                    <div className={cx("chords-details")}>
                        <img className={cx("chords-details-img")} src={require("../../assets/images/Chords/Rectangle 19.png")}>
                        </img>
                        <div className={cx("content-3")}>
                            BeatName
                        </div>
                        <div className={cx("content-3")}>
                            QuocDoanh
                        </div>
                        <div className={cx("content-4")}>
                            The drum sound is a rhythmic and percussive resonance
                        </div>
                        <div className={cx("content-cart")}>
                            <div className={cx("content-6")}>
                                Price: 565$
                            </div>
                            <div className={cx("content-7")}>
                                76 sales
                            </div>
                            <Link to="/viewcart" className={cx("icon-cart")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 25 25" fill="none">
                                    <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#4ECB71" />
                                </svg>
                            </Link>
                        </div>
                        <div className={cx("icon-trending-4")}>
                            <div className={cx("icon-trending2")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                    <path d="M8.75 29.1666H26.25M17.5 5.83325V23.3333M17.5 23.3333L22.6042 18.2291M17.5 23.3333L12.3958 18.2291" stroke="#4ECB71" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span class={cx("span")}></span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                    <path d="M33.95 15.75H28V9.8C28 8.75 27.3 8.75 26.25 8.75C25.2 8.75 24.5 8.75 24.5 9.8V15.75H18.55C17.5 15.75 17.5 16.45 17.5 17.5C17.5 18.55 17.5 19.25 18.55 19.25H24.5V25.2C24.5 26.25 25.2 26.25 26.25 26.25C27.3 26.25 28 26.25 28 25.2V19.25H33.95C35 19.25 35 18.55 35 17.5C35 16.45 35 15.75 33.95 15.75ZM12.95 15.75H1.05C0 15.75 0 16.45 0 17.5C0 18.55 0 19.25 1.05 19.25H12.95C14 19.25 14 18.55 14 17.5C14 16.45 14 15.75 12.95 15.75ZM12.95 24.5H1.05C0 24.5 0 25.2 0 26.25C0 27.3 0 28 1.05 28H12.95C14 28 14 27.3 14 26.25C14 25.2 14 24.5 12.95 24.5ZM12.95 7H1.05C0 7 0 7.7 0 8.75C0 9.8 0 10.5 1.05 10.5H12.95C14 10.5 14 9.8 14 8.75C14 7.7 14 7 12.95 7Z" fill="#4ECB71" />
                                </svg>
                                <span class={cx("span")}></span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                    <path d="M17.4998 31.1354L15.3853 29.2104C7.87484 22.4 2.9165 17.8938 2.9165 12.3958C2.9165 7.88958 6.44567 4.375 10.9373 4.375C13.4748 4.375 15.9103 5.55625 17.4998 7.40833C19.0894 5.55625 21.5248 4.375 24.0623 4.375C28.554 4.375 32.0832 7.88958 32.0832 12.3958C32.0832 17.8938 27.1248 22.4 19.6144 29.2104L17.4998 31.1354Z" fill="#4ECB71" />
                                </svg>
                            </div>
                        </div>

                    </div>

                    <div className={cx("chords-details")}>
                        <img className={cx("chords-details-img")} src={require("../../assets/images/Chords/Rectangle 18.png")}>
                        </img>
                        <div className={cx("content-3")}>
                            BeatName
                        </div>
                        <div className={cx("content-3")}>
                            QuocDoanh
                        </div>
                        <div className={cx("content-4")}>
                            The drum sound is a rhythmic and percussive resonance
                        </div>
                        <div className={cx("content-cart")}>
                            <div className={cx("content-6")}>
                                Price: 565$
                            </div>
                            <div className={cx("content-7")}>
                                76 sales
                            </div>
                            <Link to="/viewcart" className={cx("icon-cart")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 25 25" fill="none">
                                    <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#4ECB71" />
                                </svg>
                            </Link>
                        </div>
                        <div className={cx("icon-trending-4")}>
                            <div className={cx("icon-trending2")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                    <path d="M8.75 29.1666H26.25M17.5 5.83325V23.3333M17.5 23.3333L22.6042 18.2291M17.5 23.3333L12.3958 18.2291" stroke="#4ECB71" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span class={cx("span")}></span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                    <path d="M33.95 15.75H28V9.8C28 8.75 27.3 8.75 26.25 8.75C25.2 8.75 24.5 8.75 24.5 9.8V15.75H18.55C17.5 15.75 17.5 16.45 17.5 17.5C17.5 18.55 17.5 19.25 18.55 19.25H24.5V25.2C24.5 26.25 25.2 26.25 26.25 26.25C27.3 26.25 28 26.25 28 25.2V19.25H33.95C35 19.25 35 18.55 35 17.5C35 16.45 35 15.75 33.95 15.75ZM12.95 15.75H1.05C0 15.75 0 16.45 0 17.5C0 18.55 0 19.25 1.05 19.25H12.95C14 19.25 14 18.55 14 17.5C14 16.45 14 15.75 12.95 15.75ZM12.95 24.5H1.05C0 24.5 0 25.2 0 26.25C0 27.3 0 28 1.05 28H12.95C14 28 14 27.3 14 26.25C14 25.2 14 24.5 12.95 24.5ZM12.95 7H1.05C0 7 0 7.7 0 8.75C0 9.8 0 10.5 1.05 10.5H12.95C14 10.5 14 9.8 14 8.75C14 7.7 14 7 12.95 7Z" fill="#4ECB71" />
                                </svg>
                                <span class={cx("span")}></span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                    <path d="M17.4998 31.1354L15.3853 29.2104C7.87484 22.4 2.9165 17.8938 2.9165 12.3958C2.9165 7.88958 6.44567 4.375 10.9373 4.375C13.4748 4.375 15.9103 5.55625 17.4998 7.40833C19.0894 5.55625 21.5248 4.375 24.0623 4.375C28.554 4.375 32.0832 7.88958 32.0832 12.3958C32.0832 17.8938 27.1248 22.4 19.6144 29.2104L17.4998 31.1354Z" fill="#4ECB71" />
                                </svg>
                            </div>
                        </div>

                    </div>

                    <div className={cx("chords-details")}>
                        <img className={cx("chords-details-img")} src={require("../../assets/images/ChordsOfSongs/hq720.jpg")}>
                        </img>
                        <div className={cx("content-3")}>
                            BeatName
                        </div>
                        <div className={cx("content-3")}>
                            QuocDoanh
                        </div>
                        <div className={cx("content-4")}>
                            The guitar sound is characterized by its versatile and melodic tones
                        </div>
                        <div className={cx("content-cart")}>
                            <div className={cx("content-6")}>
                                Price: 565$
                            </div>
                            <div className={cx("content-7")}>
                                12 sales
                            </div>
                            <Link to="/viewcart" className={cx("icon-cart")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 25 25" fill="none">
                                    <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#4ECB71" />
                                </svg>
                            </Link>
                        </div>
                        <div className={cx("icon-trending-4")}>
                            <div className={cx("icon-trending2")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                    <path d="M8.75 29.1666H26.25M17.5 5.83325V23.3333M17.5 23.3333L22.6042 18.2291M17.5 23.3333L12.3958 18.2291" stroke="#4ECB71" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span class={cx("span")}></span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                    <path d="M33.95 15.75H28V9.8C28 8.75 27.3 8.75 26.25 8.75C25.2 8.75 24.5 8.75 24.5 9.8V15.75H18.55C17.5 15.75 17.5 16.45 17.5 17.5C17.5 18.55 17.5 19.25 18.55 19.25H24.5V25.2C24.5 26.25 25.2 26.25 26.25 26.25C27.3 26.25 28 26.25 28 25.2V19.25H33.95C35 19.25 35 18.55 35 17.5C35 16.45 35 15.75 33.95 15.75ZM12.95 15.75H1.05C0 15.75 0 16.45 0 17.5C0 18.55 0 19.25 1.05 19.25H12.95C14 19.25 14 18.55 14 17.5C14 16.45 14 15.75 12.95 15.75ZM12.95 24.5H1.05C0 24.5 0 25.2 0 26.25C0 27.3 0 28 1.05 28H12.95C14 28 14 27.3 14 26.25C14 25.2 14 24.5 12.95 24.5ZM12.95 7H1.05C0 7 0 7.7 0 8.75C0 9.8 0 10.5 1.05 10.5H12.95C14 10.5 14 9.8 14 8.75C14 7.7 14 7 12.95 7Z" fill="#4ECB71" />
                                </svg>
                                <span class={cx("span")}></span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                    <path d="M17.4998 31.1354L15.3853 29.2104C7.87484 22.4 2.9165 17.8938 2.9165 12.3958C2.9165 7.88958 6.44567 4.375 10.9373 4.375C13.4748 4.375 15.9103 5.55625 17.4998 7.40833C19.0894 5.55625 21.5248 4.375 24.0623 4.375C28.554 4.375 32.0832 7.88958 32.0832 12.3958C32.0832 17.8938 27.1248 22.4 19.6144 29.2104L17.4998 31.1354Z" fill="#4ECB71" />
                                </svg>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className={cx("Column-second")}>
                {/* <div className={cx("content-5")}>
                    ----------Weekly bestsellers-----------
                </div> */}
                <div className={cx("listbeat-header")}>
                    <div className={cx("chords-part")}>
                        <div className={cx("chords-details")}>
                            <img className={cx("chords-details-img")} src={require("../../assets/images/ChordsOfSongs/top-8-thuong-hieu-ukulele-tot-nhat-nam-2019-cho-nguoi-moi-bat-dau.jpg")}>
                            </img>
                            <div className={cx("content-3")}>
                                BeatName
                            </div>
                            <div className={cx("content-3")}>
                                QuocDoanh
                            </div>
                            <div className={cx("content-4")}>
                                The charm of the piano sound is hard to resist
                            </div>
                            <div className={cx("content-cart")}>
                                <div className={cx("content-6")}>
                                    Price: 565$
                                </div>
                                <div className={cx("content-7")}>
                                    89 sales
                                </div>
                                <Link to="/viewcart" className={cx("icon-cart")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 25 25" fill="none">
                                        <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#4ECB71" />
                                    </svg>
                                </Link>
                            </div>
                            <div className={cx("icon-trending-4")}>
                                <div className={cx("icon-trending2")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                        <path d="M8.75 29.1666H26.25M17.5 5.83325V23.3333M17.5 23.3333L22.6042 18.2291M17.5 23.3333L12.3958 18.2291" stroke="#4ECB71" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span class={cx("span")}></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                        <path d="M33.95 15.75H28V9.8C28 8.75 27.3 8.75 26.25 8.75C25.2 8.75 24.5 8.75 24.5 9.8V15.75H18.55C17.5 15.75 17.5 16.45 17.5 17.5C17.5 18.55 17.5 19.25 18.55 19.25H24.5V25.2C24.5 26.25 25.2 26.25 26.25 26.25C27.3 26.25 28 26.25 28 25.2V19.25H33.95C35 19.25 35 18.55 35 17.5C35 16.45 35 15.75 33.95 15.75ZM12.95 15.75H1.05C0 15.75 0 16.45 0 17.5C0 18.55 0 19.25 1.05 19.25H12.95C14 19.25 14 18.55 14 17.5C14 16.45 14 15.75 12.95 15.75ZM12.95 24.5H1.05C0 24.5 0 25.2 0 26.25C0 27.3 0 28 1.05 28H12.95C14 28 14 27.3 14 26.25C14 25.2 14 24.5 12.95 24.5ZM12.95 7H1.05C0 7 0 7.7 0 8.75C0 9.8 0 10.5 1.05 10.5H12.95C14 10.5 14 9.8 14 8.75C14 7.7 14 7 12.95 7Z" fill="#4ECB71" />
                                    </svg>
                                    <span class={cx("span")}></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                        <path d="M17.4998 31.1354L15.3853 29.2104C7.87484 22.4 2.9165 17.8938 2.9165 12.3958C2.9165 7.88958 6.44567 4.375 10.9373 4.375C13.4748 4.375 15.9103 5.55625 17.4998 7.40833C19.0894 5.55625 21.5248 4.375 24.0623 4.375C28.554 4.375 32.0832 7.88958 32.0832 12.3958C32.0832 17.8938 27.1248 22.4 19.6144 29.2104L17.4998 31.1354Z" fill="#4ECB71" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className={cx("chords-details")}>
                            <img className={cx("chords-details-img")} src={require("../../assets/images/ChordsOfSongs/nganh-piano.webp")}>
                            </img>
                            <div className={cx("content-3")}>
                                BeatName
                            </div>
                            <div className={cx("content-3")}>
                                QuocDoanh
                            </div>
                            <div className={cx("content-4")}>
                                The drum sound is a rhythmic and percussive resonance
                            </div>
                            <div className={cx("content-cart")}>
                                <div className={cx("content-6")}>
                                    Price: 565$
                                </div>
                                <div className={cx("content-7")}>
                                    76 sales
                                </div>
                                <Link to="/viewcart" className={cx("icon-cart")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 25 25" fill="none">
                                        <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#4ECB71" />
                                    </svg>
                                </Link>
                            </div>
                            <div className={cx("icon-trending-4")}>
                                <div className={cx("icon-trending2")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                        <path d="M8.75 29.1666H26.25M17.5 5.83325V23.3333M17.5 23.3333L22.6042 18.2291M17.5 23.3333L12.3958 18.2291" stroke="#4ECB71" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span class={cx("span")}></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                        <path d="M33.95 15.75H28V9.8C28 8.75 27.3 8.75 26.25 8.75C25.2 8.75 24.5 8.75 24.5 9.8V15.75H18.55C17.5 15.75 17.5 16.45 17.5 17.5C17.5 18.55 17.5 19.25 18.55 19.25H24.5V25.2C24.5 26.25 25.2 26.25 26.25 26.25C27.3 26.25 28 26.25 28 25.2V19.25H33.95C35 19.25 35 18.55 35 17.5C35 16.45 35 15.75 33.95 15.75ZM12.95 15.75H1.05C0 15.75 0 16.45 0 17.5C0 18.55 0 19.25 1.05 19.25H12.95C14 19.25 14 18.55 14 17.5C14 16.45 14 15.75 12.95 15.75ZM12.95 24.5H1.05C0 24.5 0 25.2 0 26.25C0 27.3 0 28 1.05 28H12.95C14 28 14 27.3 14 26.25C14 25.2 14 24.5 12.95 24.5ZM12.95 7H1.05C0 7 0 7.7 0 8.75C0 9.8 0 10.5 1.05 10.5H12.95C14 10.5 14 9.8 14 8.75C14 7.7 14 7 12.95 7Z" fill="#4ECB71" />
                                    </svg>
                                    <span class={cx("span")}></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                        <path d="M17.4998 31.1354L15.3853 29.2104C7.87484 22.4 2.9165 17.8938 2.9165 12.3958C2.9165 7.88958 6.44567 4.375 10.9373 4.375C13.4748 4.375 15.9103 5.55625 17.4998 7.40833C19.0894 5.55625 21.5248 4.375 24.0623 4.375C28.554 4.375 32.0832 7.88958 32.0832 12.3958C32.0832 17.8938 27.1248 22.4 19.6144 29.2104L17.4998 31.1354Z" fill="#4ECB71" />
                                    </svg>
                                </div>
                            </div>

                        </div>

                        <div className={cx("chords-details")}>
                            <img className={cx("chords-details-img")} src={require("../../assets/images/ChordsOfSongs/Rectangle 36.png")}>
                            </img>
                            <div className={cx("content-3")}>
                                BeatName
                            </div>
                            <div className={cx("content-3")}>
                                QuocDoanh
                            </div>
                            <div className={cx("content-4")}>
                                The drum sound is a rhythmic and percussive resonance
                            </div>
                            <div className={cx("content-cart")}>
                                <div className={cx("content-6")}>
                                    Price: 565$
                                </div>
                                <div className={cx("content-7")}>
                                    43 sales
                                </div>
                                <Link to="/viewcart" className={cx("icon-cart")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 25 25" fill="none">
                                        <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#4ECB71" />
                                    </svg>
                                </Link>
                            </div>
                            <div className={cx("icon-trending-4")}>
                                <div className={cx("icon-trending2")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                        <path d="M8.75 29.1666H26.25M17.5 5.83325V23.3333M17.5 23.3333L22.6042 18.2291M17.5 23.3333L12.3958 18.2291" stroke="#4ECB71" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span class={cx("span")}></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                        <path d="M33.95 15.75H28V9.8C28 8.75 27.3 8.75 26.25 8.75C25.2 8.75 24.5 8.75 24.5 9.8V15.75H18.55C17.5 15.75 17.5 16.45 17.5 17.5C17.5 18.55 17.5 19.25 18.55 19.25H24.5V25.2C24.5 26.25 25.2 26.25 26.25 26.25C27.3 26.25 28 26.25 28 25.2V19.25H33.95C35 19.25 35 18.55 35 17.5C35 16.45 35 15.75 33.95 15.75ZM12.95 15.75H1.05C0 15.75 0 16.45 0 17.5C0 18.55 0 19.25 1.05 19.25H12.95C14 19.25 14 18.55 14 17.5C14 16.45 14 15.75 12.95 15.75ZM12.95 24.5H1.05C0 24.5 0 25.2 0 26.25C0 27.3 0 28 1.05 28H12.95C14 28 14 27.3 14 26.25C14 25.2 14 24.5 12.95 24.5ZM12.95 7H1.05C0 7 0 7.7 0 8.75C0 9.8 0 10.5 1.05 10.5H12.95C14 10.5 14 9.8 14 8.75C14 7.7 14 7 12.95 7Z" fill="#4ECB71" />
                                    </svg>
                                    <span class={cx("span")}></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                        <path d="M17.4998 31.1354L15.3853 29.2104C7.87484 22.4 2.9165 17.8938 2.9165 12.3958C2.9165 7.88958 6.44567 4.375 10.9373 4.375C13.4748 4.375 15.9103 5.55625 17.4998 7.40833C19.0894 5.55625 21.5248 4.375 24.0623 4.375C28.554 4.375 32.0832 7.88958 32.0832 12.3958C32.0832 17.8938 27.1248 22.4 19.6144 29.2104L17.4998 31.1354Z" fill="#4ECB71" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className={cx("chords-details")}>
                            <img className={cx("chords-details-img")} src={require("../../assets/images/Trending/ly-do-cac-chang-trai-nen-biet-choi-dan-guitar-1.jpeg")}>
                            </img>
                            <div className={cx("content-3")}>
                                BeatName
                            </div>
                            <div className={cx("content-3")}>
                                QuocDoanh
                            </div>
                            <div className={cx("content-4")}>
                                The guitar sound is characterized by its versatile and melodic tones
                            </div>
                            <div className={cx("content-cart")}>
                                <div className={cx("content-6")}>
                                    Price: 565$
                                </div>
                                <div className={cx("content-7")}>
                                    23 sales
                                </div>
                                <Link to="/viewcart" className={cx("icon-cart")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 25 25" fill="none">
                                        <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#4ECB71" />
                                    </svg>
                                </Link>
                            </div>
                            <div className={cx("icon-trending-4")}>
                                <div className={cx("icon-trending2")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                        <path d="M8.75 29.1666H26.25M17.5 5.83325V23.3333M17.5 23.3333L22.6042 18.2291M17.5 23.3333L12.3958 18.2291" stroke="#4ECB71" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span class={cx("span")}></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                        <path d="M33.95 15.75H28V9.8C28 8.75 27.3 8.75 26.25 8.75C25.2 8.75 24.5 8.75 24.5 9.8V15.75H18.55C17.5 15.75 17.5 16.45 17.5 17.5C17.5 18.55 17.5 19.25 18.55 19.25H24.5V25.2C24.5 26.25 25.2 26.25 26.25 26.25C27.3 26.25 28 26.25 28 25.2V19.25H33.95C35 19.25 35 18.55 35 17.5C35 16.45 35 15.75 33.95 15.75ZM12.95 15.75H1.05C0 15.75 0 16.45 0 17.5C0 18.55 0 19.25 1.05 19.25H12.95C14 19.25 14 18.55 14 17.5C14 16.45 14 15.75 12.95 15.75ZM12.95 24.5H1.05C0 24.5 0 25.2 0 26.25C0 27.3 0 28 1.05 28H12.95C14 28 14 27.3 14 26.25C14 25.2 14 24.5 12.95 24.5ZM12.95 7H1.05C0 7 0 7.7 0 8.75C0 9.8 0 10.5 1.05 10.5H12.95C14 10.5 14 9.8 14 8.75C14 7.7 14 7 12.95 7Z" fill="#4ECB71" />
                                    </svg>
                                    <span class={cx("span")}></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                        <path d="M17.4998 31.1354L15.3853 29.2104C7.87484 22.4 2.9165 17.8938 2.9165 12.3958C2.9165 7.88958 6.44567 4.375 10.9373 4.375C13.4748 4.375 15.9103 5.55625 17.4998 7.40833C19.0894 5.55625 21.5248 4.375 24.0623 4.375C28.554 4.375 32.0832 7.88958 32.0832 12.3958C32.0832 17.8938 27.1248 22.4 19.6144 29.2104L17.4998 31.1354Z" fill="#4ECB71" />
                                    </svg>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
            <div className={cx("Column-third")}>
                {/* <div className={cx("content-5")}>
                   ----------Rising Star----------
                </div> */}
                <div className={cx("listbeat-header")}>
                    <div className={cx("chords-part")}>
                        <div className={cx("chords-details")}>
                            <img className={cx("chords-details-img")} src={require("../../assets/images/Trending/beautiful-girl-sitting-down-playing-the-piano.webp")}>
                            </img>
                            <div className={cx("content-3")}>
                                BeatName
                            </div>
                            <div className={cx("content-3")}>
                                QuocDoanh
                            </div>
                            <div className={cx("content-4")}>
                                The charm of the piano sound is hard to resist
                            </div>
                            <div className={cx("content-cart")}>
                                <div className={cx("content-6")}>
                                    Price: 565$
                                </div>
                                <div className={cx("content-7")}>
                                    66 sales
                                </div>
                                <Link to="/viewcart" className={cx("icon-cart")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 25 25" fill="none">
                                        <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#4ECB71" />
                                    </svg>
                                </Link>
                            </div>
                            <div className={cx("icon-trending-4")}>
                                <div className={cx("icon-trending2")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                        <path d="M8.75 29.1666H26.25M17.5 5.83325V23.3333M17.5 23.3333L22.6042 18.2291M17.5 23.3333L12.3958 18.2291" stroke="#4ECB71" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span class={cx("span")}></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                        <path d="M33.95 15.75H28V9.8C28 8.75 27.3 8.75 26.25 8.75C25.2 8.75 24.5 8.75 24.5 9.8V15.75H18.55C17.5 15.75 17.5 16.45 17.5 17.5C17.5 18.55 17.5 19.25 18.55 19.25H24.5V25.2C24.5 26.25 25.2 26.25 26.25 26.25C27.3 26.25 28 26.25 28 25.2V19.25H33.95C35 19.25 35 18.55 35 17.5C35 16.45 35 15.75 33.95 15.75ZM12.95 15.75H1.05C0 15.75 0 16.45 0 17.5C0 18.55 0 19.25 1.05 19.25H12.95C14 19.25 14 18.55 14 17.5C14 16.45 14 15.75 12.95 15.75ZM12.95 24.5H1.05C0 24.5 0 25.2 0 26.25C0 27.3 0 28 1.05 28H12.95C14 28 14 27.3 14 26.25C14 25.2 14 24.5 12.95 24.5ZM12.95 7H1.05C0 7 0 7.7 0 8.75C0 9.8 0 10.5 1.05 10.5H12.95C14 10.5 14 9.8 14 8.75C14 7.7 14 7 12.95 7Z" fill="#4ECB71" />
                                    </svg>
                                    <span class={cx("span")}></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                        <path d="M17.4998 31.1354L15.3853 29.2104C7.87484 22.4 2.9165 17.8938 2.9165 12.3958C2.9165 7.88958 6.44567 4.375 10.9373 4.375C13.4748 4.375 15.9103 5.55625 17.4998 7.40833C19.0894 5.55625 21.5248 4.375 24.0623 4.375C28.554 4.375 32.0832 7.88958 32.0832 12.3958C32.0832 17.8938 27.1248 22.4 19.6144 29.2104L17.4998 31.1354Z" fill="#4ECB71" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className={cx("chords-details")}>
                            <img className={cx("chords-details-img")} src={require("../../assets/images/Trending/hinh-guitar-am-cung.jpg")}>
                            </img>
                            <div className={cx("content-3")}>
                                BeatName
                            </div>
                            <div className={cx("content-3")}>
                                QuocDoanh
                            </div>
                            <div className={cx("content-4")}>
                                The drum sound is a rhythmic and percussive resonance
                            </div>
                            <div className={cx("content-cart")}>
                                <div className={cx("content-6")}>
                                    Price: 565$
                                </div>
                                <div className={cx("content-7")}>
                                    76 sales
                                </div>
                                <Link to="/viewcart" className={cx("icon-cart")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 25 25" fill="none">
                                        <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#4ECB71" />
                                    </svg>
                                </Link>
                            </div>
                            <div className={cx("icon-trending-4")}>
                                <div className={cx("icon-trending2")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                        <path d="M8.75 29.1666H26.25M17.5 5.83325V23.3333M17.5 23.3333L22.6042 18.2291M17.5 23.3333L12.3958 18.2291" stroke="#4ECB71" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span class={cx("span")}></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                        <path d="M33.95 15.75H28V9.8C28 8.75 27.3 8.75 26.25 8.75C25.2 8.75 24.5 8.75 24.5 9.8V15.75H18.55C17.5 15.75 17.5 16.45 17.5 17.5C17.5 18.55 17.5 19.25 18.55 19.25H24.5V25.2C24.5 26.25 25.2 26.25 26.25 26.25C27.3 26.25 28 26.25 28 25.2V19.25H33.95C35 19.25 35 18.55 35 17.5C35 16.45 35 15.75 33.95 15.75ZM12.95 15.75H1.05C0 15.75 0 16.45 0 17.5C0 18.55 0 19.25 1.05 19.25H12.95C14 19.25 14 18.55 14 17.5C14 16.45 14 15.75 12.95 15.75ZM12.95 24.5H1.05C0 24.5 0 25.2 0 26.25C0 27.3 0 28 1.05 28H12.95C14 28 14 27.3 14 26.25C14 25.2 14 24.5 12.95 24.5ZM12.95 7H1.05C0 7 0 7.7 0 8.75C0 9.8 0 10.5 1.05 10.5H12.95C14 10.5 14 9.8 14 8.75C14 7.7 14 7 12.95 7Z" fill="#4ECB71" />
                                    </svg>
                                    <span class={cx("span")}></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                        <path d="M17.4998 31.1354L15.3853 29.2104C7.87484 22.4 2.9165 17.8938 2.9165 12.3958C2.9165 7.88958 6.44567 4.375 10.9373 4.375C13.4748 4.375 15.9103 5.55625 17.4998 7.40833C19.0894 5.55625 21.5248 4.375 24.0623 4.375C28.554 4.375 32.0832 7.88958 32.0832 12.3958C32.0832 17.8938 27.1248 22.4 19.6144 29.2104L17.4998 31.1354Z" fill="#4ECB71" />
                                    </svg>
                                </div>
                            </div>

                        </div>

                        <div className={cx("chords-details")}>
                            <img className={cx("chords-details-img")} src={require("../../assets/images/Trending/Rectangle 33.png")}>
                            </img>
                            <div className={cx("content-3")}>
                                BeatName
                            </div>
                            <div className={cx("content-3")}>
                                QuocDoanh
                            </div>
                            <div className={cx("content-4")}>
                                The drum sound is a rhythmic and percussive resonance
                            </div>
                            <div className={cx("content-cart")}>
                                <div className={cx("content-6")}>
                                    Price: 565$
                                </div>
                                <div className={cx("content-7")}>
                                    132 sales
                                </div>
                                <Link to="/viewcart" className={cx("icon-cart")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 25 25" fill="none">
                                        <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#4ECB71" />
                                    </svg>
                                </Link>
                            </div>
                            <div className={cx("icon-trending-4")}>
                                <div className={cx("icon-trending2")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                        <path d="M8.75 29.1666H26.25M17.5 5.83325V23.3333M17.5 23.3333L22.6042 18.2291M17.5 23.3333L12.3958 18.2291" stroke="#4ECB71" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span class={cx("span")}></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                        <path d="M33.95 15.75H28V9.8C28 8.75 27.3 8.75 26.25 8.75C25.2 8.75 24.5 8.75 24.5 9.8V15.75H18.55C17.5 15.75 17.5 16.45 17.5 17.5C17.5 18.55 17.5 19.25 18.55 19.25H24.5V25.2C24.5 26.25 25.2 26.25 26.25 26.25C27.3 26.25 28 26.25 28 25.2V19.25H33.95C35 19.25 35 18.55 35 17.5C35 16.45 35 15.75 33.95 15.75ZM12.95 15.75H1.05C0 15.75 0 16.45 0 17.5C0 18.55 0 19.25 1.05 19.25H12.95C14 19.25 14 18.55 14 17.5C14 16.45 14 15.75 12.95 15.75ZM12.95 24.5H1.05C0 24.5 0 25.2 0 26.25C0 27.3 0 28 1.05 28H12.95C14 28 14 27.3 14 26.25C14 25.2 14 24.5 12.95 24.5ZM12.95 7H1.05C0 7 0 7.7 0 8.75C0 9.8 0 10.5 1.05 10.5H12.95C14 10.5 14 9.8 14 8.75C14 7.7 14 7 12.95 7Z" fill="#4ECB71" />
                                    </svg>
                                    <span class={cx("span")}></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                        <path d="M17.4998 31.1354L15.3853 29.2104C7.87484 22.4 2.9165 17.8938 2.9165 12.3958C2.9165 7.88958 6.44567 4.375 10.9373 4.375C13.4748 4.375 15.9103 5.55625 17.4998 7.40833C19.0894 5.55625 21.5248 4.375 24.0623 4.375C28.554 4.375 32.0832 7.88958 32.0832 12.3958C32.0832 17.8938 27.1248 22.4 19.6144 29.2104L17.4998 31.1354Z" fill="#4ECB71" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className={cx("chords-details")}>
                            <img className={cx("chords-details-img")} src={require("../../assets/images/Chords/Rectangle 23.png")}>
                            </img>
                            <div className={cx("content-3")}>
                                BeatName
                            </div>
                            <div className={cx("content-3")}>
                                QuocDoanh
                            </div>
                            <div className={cx("content-4")}>
                                The guitar sound is characterized by its versatile and melodic tones
                            </div>
                            <div className={cx("content-cart")}>
                                <div className={cx("content-6")}>
                                    Price: 565$
                                </div>
                                <div className={cx("content-7")}>
                                    145 sales
                                </div>
                                <Link to="/viewcart" className={cx("icon-cart")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 25 25" fill="none">
                                        <path d="M17 18C15.89 18 15 18.89 15 20C15 20.5304 15.2107 21.0391 15.5858 21.4142C15.9609 21.7893 16.4696 22 17 22C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20C19 19.4696 18.7893 18.9609 18.4142 18.5858C18.0391 18.2107 17.5304 18 17 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 15.5304 5.21071 16.0391 5.58579 16.4142C5.96086 16.7893 6.46957 17 7 17H19V15H7.42C7.3537 15 7.29011 14.9737 7.24322 14.9268C7.19634 14.8799 7.17 14.8163 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5.5C20.95 5.34 21 5.17 21 5C21 4.73478 20.8946 4.48043 20.7071 4.29289C20.5196 4.10536 20.2652 4 20 4H5.21L4.27 2M7 18C5.89 18 5 18.89 5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22C7.53043 22 8.03914 21.7893 8.41421 21.4142C8.78929 21.0391 9 20.5304 9 20C9 19.4696 8.78929 18.9609 8.41421 18.5858C8.03914 18.2107 7.53043 18 7 18Z" fill="#4ECB71" />
                                    </svg>
                                </Link>
                            </div>
                            <div className={cx("icon-trending-4")}>
                                <div className={cx("icon-trending2")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                        <path d="M8.75 29.1666H26.25M17.5 5.83325V23.3333M17.5 23.3333L22.6042 18.2291M17.5 23.3333L12.3958 18.2291" stroke="#4ECB71" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span class={cx("span")}></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                        <path d="M33.95 15.75H28V9.8C28 8.75 27.3 8.75 26.25 8.75C25.2 8.75 24.5 8.75 24.5 9.8V15.75H18.55C17.5 15.75 17.5 16.45 17.5 17.5C17.5 18.55 17.5 19.25 18.55 19.25H24.5V25.2C24.5 26.25 25.2 26.25 26.25 26.25C27.3 26.25 28 26.25 28 25.2V19.25H33.95C35 19.25 35 18.55 35 17.5C35 16.45 35 15.75 33.95 15.75ZM12.95 15.75H1.05C0 15.75 0 16.45 0 17.5C0 18.55 0 19.25 1.05 19.25H12.95C14 19.25 14 18.55 14 17.5C14 16.45 14 15.75 12.95 15.75ZM12.95 24.5H1.05C0 24.5 0 25.2 0 26.25C0 27.3 0 28 1.05 28H12.95C14 28 14 27.3 14 26.25C14 25.2 14 24.5 12.95 24.5ZM12.95 7H1.05C0 7 0 7.7 0 8.75C0 9.8 0 10.5 1.05 10.5H12.95C14 10.5 14 9.8 14 8.75C14 7.7 14 7 12.95 7Z" fill="#4ECB71" />
                                    </svg>
                                    <span class={cx("span")}></span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 35 35" fill="none">
                                        <path d="M17.4998 31.1354L15.3853 29.2104C7.87484 22.4 2.9165 17.8938 2.9165 12.3958C2.9165 7.88958 6.44567 4.375 10.9373 4.375C13.4748 4.375 15.9103 5.55625 17.4998 7.40833C19.0894 5.55625 21.5248 4.375 24.0623 4.375C28.554 4.375 32.0832 7.88958 32.0832 12.3958C32.0832 17.8938 27.1248 22.4 19.6144 29.2104L17.4998 31.1354Z" fill="#4ECB71" />
                                    </svg>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>

            </div>

            

        </div>

    );
}

export default ListBeat;