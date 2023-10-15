import classNames from "classnames/bind";
import styles from "./Songs.module.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useEffect, useMemo, useRef, useState } from "react";
const cx = classNames.bind(styles);

function Songs() {
    return (
        <div className={cx("list-songs")}>
            <div className={cx("title")}>
                LIST SONGS
            </div>
            <div className={cx("line")}></div>
                <div className={cx("middle-moinoi")}>
                    <div className={cx("panel-content-text-center-padding-both")}>
                        <div className={cx("title-song-style")}>
                            <h3 >Songs Style</h3>
                        </div>
                        <div className={cx('sum')}>
                            <div className={cx("rhythm-list")} id="rhythms">
                                <a className={cx("rhythm-item")} data-rhythm="ballad" >
                                    Điệu Ballad (20061 bài)
                                </a>
                                <a className={cx("rhythm-item")} data-rhythm="blue" >
                                    Điệu Blues (3086 bài)
                                </a>
                                <a className={cx("rhythm-item")} data-rhythm="disco" >
                                    Điệu Disco (1693 bài)
                                </a>
                                <a className={cx("rhythm-item")} data-rhythm="slow">
                                    Điệu Slow (1522 bài)
                                </a>
                                <a className={cx("rhythm-item")} data-rhythm="bollero" >
                                    Điệu Bollero (1265 bài)
                                </a>
                                <a className={cx("rhythm-item")} data-rhythm="slowrock" >
                                    Điệu Slow Rock (1241 bài)
                                </a>
                                <a className={cx("rhythm-item")} data-rhythm="valse" >
                                    Điệu Valse (747 bài)
                                </a>
                                <a className={cx("rhythm-item")} data-rhythm="fox" >
                                    Điệu Fox (700 bài)
                                </a>
                                <a className={cx("rhythm-item")} data-rhythm="boston">
                                    Điệu Boston (440 bài)
                                </a>
                                <a className={cx("rhythm-item")} data-rhythm="rock">
                                    Điệu Rock (431 bài)
                                </a>
                                <a className={cx("rhythm-item")} data-rhythm="chachacha">
                                    Điệu Chachacha (366 bài)
                                </a>
                                <a className={cx("rhythm-item")} data-rhythm="bossanova" >
                                    Bossa Nova (360 bài)
                                </a>
                                <a className={cx("rhythm-item")} data-rhythm="pop" >
                                    Điệu Pop (359 bài)
                                </a>
                                <a className={cx("rhythm-item")} data-rhythm="rhumba" >
                                    Điệu Rhumba (213 bài)
                                </a>
                                <a className={cx("rhythm-item")} data-rhythm="tango">
                                    Điệu Tango (162 bài)
                                </a>
                            </div>
                        </div>
                        
                        <div class={cx("song-list")} id="songs-request">
                            <h4 className={cx("newrequest-title")}>New Request</h4>
                            <div class="song-item-small">
                                <a class={cx("song-title")}>Điện máy xanh</a>
                                <div class={cx("song-info")}>
                                    <span title="09/30/2023 03:03:37pm">
                                        30 tháng 09, 2023 lúc 03:03pm                            </span>
                                    <span class="song-comment" title="Lượt vote">
                                        7 <i class="fa fa-heart"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="song-item-small">
                                <a class={cx("song-title")}>Điện máy xanh</a>
                                <div class={cx("song-info")}>
                                    <span title="12/03/2016 01:40:22pm">
                                        3 tháng 12, 2016 lúc 01:40pm                            </span>
                                    <span class="song-comment" title="Lượt vote">
                                        64 <i class="fa fa-heart"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="song-item-small">
                                <a class={cx("song-title")}>Điện máy xanh</a>
                                <div class={cx("song-info")}>
                                    <span title="12/04/2016 10:16:39pm">
                                        4 tháng 12, 2016 lúc 10:16pm                            </span>
                                    <span class="song-comment" title="Lượt vote">
                                        28 <i class="fa fa-heart"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="song-item-small">
                                <a class={cx("song-title")}>Điện máy xanh</a>
                                <div class={cx("song-info")}>
                                    <span title="12/06/2016 09:00:04pm">
                                        6 tháng 12, 2016 lúc 09:00pm                            </span>
                                    <span class="song-comment" title="Lượt vote">
                                        13 <i class="fa fa-heart"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="song-item-small">
                                <a class={cx("song-title")}>Điện máy xanh</a>
                                <div class={cx("song-info")}>
                                    <span title="12/07/2016 08:34:03pm">
                                        7 tháng 12, 2016 lúc 08:34pm                            </span>
                                    <span class="song-comment" title="Lượt vote">
                                        70 <i class="fa fa-heart"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div></div>
                    <div className={cx("list-songs-middle")}>
                        <h3 className={cx("title-song-style2")}>  Most Popular Today</h3>
                        <div className={cx("hot-today-item flex-center-between")}>
                            <div class="flex-center-start">
                                <span className={cx("hot-today-views")}>
                                    <i className={cx("fa fa-star")}></i>
                                    <span className={cx("hot-today-view-count")}></span>
                                </span>

                                <div>
                                    <a className={cx("hot-today-item-song")}>
                                        1. 3107 | Id 072019                                </a>
                                    <span className={("hot-today-item-singers")}>
                                        <a className={cx("author-item")}>
                                            W/n                                    </a>
                                        ,                                     <a class="author-item">
                                            Titie                                    </a>
                                        ,                                     <a h class="author-item">
                                            Nâu                                    </a>
                                    </span>
                                </div>
                            </div>
                            <div className={cx("text-gray nowrap text-small pr-10")}>
                                <i className={cx("fa fa-comments")}></i>
                            </div>
                        </div>
                        <div className={cx("hot-today-item flex-center-between")}>
                            <div class="flex-center-start">
                                <span className={cx("hot-today-views")}>
                                    <i className={cx("fa fa-star")}></i>
                                    <span className={cx("hot-today-view-count")}>4198</span>
                                </span>

                                <div>
                                    <a className={cx("hot-today-item-song")}>
                                        2. 3107 | Id 072019                                </a>
                                    <span className={("hot-today-item-singers")}>
                                        <a className={cx("author-item")}>
                                            W/n                                    </a>
                                        ,                                     <a class="author-item">
                                            Titie                                    </a>
                                        ,                                     <a class="author-item">
                                            Nâu                                    </a>
                                    </span>
                                </div>
                            </div>
                            <div className={cx("text-gray nowrap text-small pr-10")}>
                                <i className={cx("fa fa-comments")}></i>
                            </div>
                        </div>
                        <div className={cx("hot-today-item flex-center-between")}>
                            <div class="flex-center-start">
                                <span className={cx("hot-today-views")}>
                                    <i className={cx("fa fa-star")}></i>
                                    <span className={cx("hot-today-view-count")}>4198</span>
                                </span>

                                <div>
                                    <a className={cx("hot-today-item-song")}>
                                        3. 3107 | Id 072019                                </a>
                                    <span className={("hot-today-item-singers")}>
                                        <a className={cx("author-item")}>
                                            W/n                                    </a>
                                        ,                                     <a class="author-item">
                                            Titie                                    </a>
                                        ,                                     <a class="author-item">
                                            Nâu                                    </a>
                                    </span>
                                </div>
                            </div>
                            <div className={cx("text-gray nowrap text-small pr-10")}>
                                <i className={cx("fa fa-comments")}></i>
                            </div>
                        </div>
                        <div className={cx("hot-today-item flex-center-between")}>
                            <div class="flex-center-start">
                                <span className={cx("hot-today-views")}>
                                    <i className={cx("fa fa-star")}></i>
                                    <span className={cx("hot-today-view-count")}>4198</span>
                                </span>

                                <div>
                                    <a className={cx("hot-today-item-song")}>
                                        4. 3107 | Id 072019                                </a>
                                    <span className={("hot-today-item-singers")}>
                                        <a className={cx("author-item")}>
                                            W/n                                    </a>
                                        ,                                     <a class="author-item">
                                            Titie                                    </a>
                                        ,                                     <a class="author-item">
                                            Nâu                                    </a>
                                    </span>
                                </div>
                            </div>
                            <div className={cx("text-gray nowrap text-small pr-10")}>
                                <i className={cx("fa fa-comments")}></i>
                            </div>
                        </div>
                        <div className={cx("hot-today-item flex-center-between")}>
                            <div class="flex-center-start">
                                <span className={cx("hot-today-views")}>
                                    <i className={cx("fa fa-star")}></i>
                                    <span className={cx("hot-today-view-count")}>4198</span>
                                </span>

                                <div>
                                    <a className={cx("hot-today-item-song")}>
                                        5. 3107 | Id 072019                                </a>
                                    <span className={("hot-today-item-singers")}>
                                        <a className={cx("author-item")}>
                                            W/n                                    </a>
                                        ,                                     <a class="author-item">
                                            Titie                                    </a>
                                        ,                                     <a class="author-item">
                                            Nâu                                    </a>
                                    </span>
                                </div>
                            </div>
                            <div className={cx("text-gray nowrap text-small pr-10")}>
                                <i className={cx("fa fa-comments")}></i>
                            </div>
                        </div>
                        <div className={cx("hot-today-item flex-center-between")}>
                            <div class="flex-center-start">
                                <span className={cx("hot-today-views")}>
                                    <i className={cx("fa fa-star")}></i>
                                    <span className={cx("hot-today-view-count")}>4198</span>
                                </span>

                                <div>
                                    <a className={cx("hot-today-item-song")}>
                                        6. 3107 | Id 072019                                </a>
                                    <span className={("hot-today-item-singers")}>
                                        <a className={cx("author-item")}>
                                            W/n                                    </a>
                                        ,                                     <a class="author-item">
                                            Titie                                    </a>
                                        ,                                     <a class="author-item">
                                            Nâu                                    </a>
                                    </span>
                                </div>
                            </div>
                            <div className={cx("text-gray nowrap text-small pr-10")}>
                                <i className={cx("fa fa-comments")}></i>
                            </div>
                        </div>
                        <div className={cx("hot-today-item flex-center-between")}>
                            <div class="flex-center-start">
                                <span className={cx("hot-today-views")}>
                                    <i className={cx("fa fa-star")}></i>
                                    <span className={cx("hot-today-view-count")}>4198</span>
                                </span>

                                <div>
                                    <a className={cx("hot-today-item-song")}>
                                        7. 3107 | Id 072019                                </a>
                                    <span className={("hot-today-item-singers")}>
                                        <a className={cx("author-item")}>
                                            W/n                                    </a>
                                        ,                                     <a class="author-item">
                                            Titie                                    </a>
                                        ,                                     <a class="author-item">
                                            Nâu                                    </a>
                                    </span>
                                </div>
                            </div>
                            <div className={cx("text-gray nowrap text-small pr-10")}>
                                <i className={cx("fa fa-comments")}></i>
                            </div>
                        </div>
                        <div className={cx("hot-today-item flex-center-between")}>
                            <div class="flex-center-start">
                                <span className={cx("hot-today-views")}>
                                    <i className={cx("fa fa-star")}></i>
                                    <span className={cx("hot-today-view-count")}>4198</span>
                                </span>

                                <div>
                                    <a className={cx("hot-today-item-song")}>
                                        8. 3107 | Id 072019                                </a>
                                    <span className={("hot-today-item-singers")}>
                                        <a className={cx("author-item")}>
                                            W/n                                    </a>
                                        ,                                     <a class="author-item">
                                            Titie                                    </a>
                                        ,                                     <a class="author-item">
                                            Nâu                                    </a>
                                    </span>
                                </div>
                            </div>
                            <div className={cx("text-gray nowrap text-small pr-10")}>
                                <i className={cx("fa fa-comments")}></i>
                            </div>
                        </div>
                        <div className={cx("hot-today-item flex-center-between")}>
                            <div class="flex-center-start">
                                <span className={cx("hot-today-views")}>
                                    <i className={cx("fa fa-star")}></i>
                                    <span className={cx("hot-today-view-count")}>4198</span>
                                </span>

                                <div>
                                    <a className={cx("hot-today-item-song")}>
                                        8. 3107 | Id 072019                                </a>
                                    <span className={("hot-today-item-singers")}>
                                        <a className={cx("author-item")}>
                                            W/n                                    </a>
                                        ,                                     <a class="author-item">
                                            Titie                                    </a>
                                        ,                                     <a class="author-item">
                                            Nâu                                    </a>
                                    </span>
                                </div>
                            </div>
                            <div className={cx("text-gray nowrap text-small pr-10")}>
                                <i className={cx("fa fa-comments")}></i>
                            </div>
                        </div>
                        <div className={cx("hot-today-item flex-center-between")}>
                            <div class="flex-center-start">
                                <span className={cx("hot-today-views")}>
                                    <i className={cx("fa fa-star")}></i>
                                    <span className={cx("hot-today-view-count")}>4198</span>
                                </span>

                                <div>
                                    <a className={cx("hot-today-item-song")}>
                                        8. 3107 | Id 072019                                </a>
                                    <span className={("hot-today-item-singers")}>
                                        <a className={cx("author-item")}>
                                            W/n                                    </a>
                                        ,                                     <a class="author-item">
                                            Titie                                    </a>
                                        ,                                     <a class="author-item">
                                            Nâu                                    </a>
                                    </span>
                                </div>
                            </div>
                            <div className={cx("text-gray nowrap text-small pr-10")}>
                                <i className={cx("fa fa-comments")}></i>
                            </div>
                        </div>
                        <div className={cx("hot-today-item flex-center-between")}>
                            <div class="flex-center-start">
                                <span className={cx("hot-today-views")}>
                                    <i className={cx("fa fa-star")}></i>
                                    <span className={cx("hot-today-view-count")}>4198</span>
                                </span>

                                <div>
                                    <a className={cx("hot-today-item-song")}>
                                        8. 3107 | Id 072019                                </a>
                                    <span className={("hot-today-item-singers")}>
                                        <a className={cx("author-item")}>
                                            W/n                                    </a>
                                        ,                                     <a class="author-item">
                                            Titie                                    </a>
                                        ,                                     <a class="author-item">
                                            Nâu                                    </a>
                                    </span>
                                </div>
                            </div>
                            <div className={cx("text-gray nowrap text-small pr-10")}>
                                <i className={cx("fa fa-comments")}></i>
                            </div>
                        </div>
                        <div className={cx("hot-today-item flex-center-between")}>
                            <div class="flex-center-start">
                                <span className={cx("hot-today-views")}>
                                    <i className={cx("fa fa-star")}></i>
                                    <span className={cx("hot-today-view-count")}>4198</span>
                                </span>

                                <div>
                                    <a className={cx("hot-today-item-song")}>
                                        8. 3107 | Id 072019                                </a>
                                    <span className={("hot-today-item-singers")}>
                                        <a className={cx("author-item")}>
                                            W/n                                    </a>
                                        ,                                     <a class="author-item">
                                            Titie                                    </a>
                                        ,                                     <a class="author-item">
                                            Nâu                                    </a>
                                    </span>
                                </div>
                            </div>
                            <div className={cx("text-gray nowrap text-small pr-10")}>
                                <i className={cx("fa fa-comments")}></i>
                            </div>
                        </div>
                        <div className={cx("hot-today-item flex-center-between")}>
                            <div class="flex-center-start">
                                <span className={cx("hot-today-views")}>
                                    <i className={cx("fa fa-star")}></i>
                                    <span className={cx("hot-today-view-count")}>4198</span>
                                </span>

                                <div>
                                    <a className={cx("hot-today-item-song")}>
                                        8. 3107 | Id 072019                                </a>
                                    <span className={("hot-today-item-singers")}>
                                        <a className={cx("author-item")}>
                                            W/n                                    </a>
                                        ,                                     <a class="author-item">
                                            Titie                                    </a>
                                        ,                                     <a class="author-item">
                                            Nâu                                    </a>
                                    </span>
                                </div>
                            </div>
                            <div className={cx("text-gray nowrap text-small pr-10")}>
                                <i className={cx("fa fa-comments")}></i>
                            </div>
                        </div>
                        <div className={cx("hot-today-item flex-center-between")}>
                            <div class="flex-center-start">
                                <span className={cx("hot-today-views")}>
                                    <i className={cx("fa fa-star")}></i>
                                    <span className={cx("hot-today-view-count")}>4198</span>
                                </span>

                                <div>
                                    <a className={cx("hot-today-item-song")}>
                                        8. 3107 | Id 072019                                </a>
                                    <span className={("hot-today-item-singers")}>
                                        <a className={cx("author-item")}>
                                            W/n                                    </a>
                                        ,                                     <a class="author-item">
                                            Titie                                    </a>
                                        ,                                     <a class="author-item">
                                            Nâu                                    </a>
                                    </span>
                                </div>
                            </div>
                            <div className={cx("text-gray nowrap text-small pr-10")}>
                                <i className={cx("fa fa-comments")}></i>
                            </div>
                        </div>
                        <div className={cx("hot-today-item flex-center-between")}>
                            <div class="flex-center-start">
                                <span className={cx("hot-today-views")}>
                                    <i className={cx("fa fa-star")}></i>
                                    <span className={cx("hot-today-view-count")}>4198</span>
                                </span>

                                <div>
                                    <a className={cx("hot-today-item-song")}>
                                        8. 3107 | Id 072019                                </a>
                                    <span className={("hot-today-item-singers")}>
                                        <a className={cx("author-item")}>
                                            W/n                                    </a>
                                        ,                                     <a class="author-item">
                                            Titie                                    </a>
                                        ,                                     <a class="author-item">
                                            Nâu                                    </a>
                                    </span>
                                </div>
                            </div>
                            <div className={cx("text-gray nowrap text-small pr-10")}>
                                <i className={cx("fa fa-comments")}></i>
                            </div>
                        </div>
                        <div className={cx("hot-today-item flex-center-between")}>
                            <div class="flex-center-start">
                                <span className={cx("hot-today-views")}>
                                    <i className={cx("fa fa-star")}></i>
                                    <span className={cx("hot-today-view-count")}>4198</span>
                                </span>

                                <div>
                                    <a className={cx("hot-today-item-song")}>
                                        8. 3107 | Id 072019                                </a>
                                    <span className={("hot-today-item-singers")}>
                                        <a className={cx("author-item")}>
                                            W/n                                    </a>
                                        ,                                     <a class="author-item">
                                            Titie                                    </a>
                                        ,                                     <a class="author-item">
                                            Nâu                                    </a>
                                    </span>
                                </div>
                            </div>
                            <div className={cx("text-gray nowrap text-small pr-10")}>
                                <i className={cx("fa fa-comments")}></i>
                            </div>
                        </div>
                        <div className={cx("hot-today-item flex-center-between")}>
                            <div class="flex-center-start">
                                <span className={cx("hot-today-views")}>
                                    <i className={cx("fa fa-star")}></i>
                                    <span className={cx("hot-today-view-count")}>4198</span>
                                </span>

                                <div>
                                    <a className={cx("hot-today-item-song")}>
                                        9. 3107 | Id 072019                                </a>
                                    <span className={("hot-today-item-singers")}>
                                        <a href="https://hopamchuan.com/artist/33604/w-n" className={cx("author-item")}>
                                            W/n                                    </a>
                                        ,                                     <a href="https://hopamchuan.com/artist/182729/titie" class="author-item">
                                            Titie                                    </a>
                                        ,                                     <a href="https://hopamchuan.com/artist/85176/nau" class="author-item">
                                            Nâu                                    </a>
                                    </span>
                                </div>
                            </div>
                            <div className={cx("text-gray nowrap text-small pr-10")}>
                                <i className={cx("fa fa-comments")}></i>
                            </div>
                        </div>
                    </div>
                    <div className={cx("moinoi")}>
                        <div className={cx("new-release")}>New Realse</div>
                        <div className={cx("hot-today-item-flex-center-between")}>
                            <div className={cx("flex-center-start")}>
                                <span class={cx("hot-today-views")}>
                                    <i class={cx("fa fa-caret-up")}></i>
                                    <span class={cx("hot-today-view-count")}>1641</span>
                                </span>

                                <div>
                                    <a class={cx("ot-today-item-song")} href="https://hopamchuan.com/song/66072/cat-doi-noi-sau">
                                        1. Cắt Đôi Nỗi Sầu                                </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx("hot-today-item-flex-center-between")}>
                            <div className={cx("flex-center-start")}>
                                <span class={cx("hot-today-views")}>
                                    <i class={cx("fa fa-caret-up")}></i>
                                    <span class={cx("hot-today-view-count")}>1641</span>
                                </span>

                                <div>
                                    <a class={cx("ot-today-item-song")} href="https://hopamchuan.com/song/66072/cat-doi-noi-sau">
                                        1. Cắt Đôi Nỗi Sầu                                </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx("hot-today-item-flex-center-between")}>
                            <div className={cx("flex-center-start")}>
                                <span class={cx("hot-today-views")}>
                                    <i class={cx("fa fa-caret-up")}></i>
                                    <span class={cx("hot-today-view-count")}>1641</span>
                                </span>

                                <div>
                                    <a class={cx("ot-today-item-song")} href="https://hopamchuan.com/song/66072/cat-doi-noi-sau">
                                        1. Cắt Đôi Nỗi Sầu                                </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx("hot-today-item-flex-center-between")}>
                            <div className={cx("flex-center-start")}>
                                <span class={cx("hot-today-views")}>
                                    <i class={cx("fa fa-caret-up")}></i>
                                    <span class={cx("hot-today-view-count")}>1641</span>
                                </span>

                                <div>
                                    <a class={cx("ot-today-item-song")} href="https://hopamchuan.com/song/66072/cat-doi-noi-sau">
                                        1. Cắt Đôi Nỗi Sầu                                </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx("hot-today-item-flex-center-between")}>
                            <div className={cx("flex-center-start")}>
                                <span class={cx("hot-today-views")}>
                                    <i class={cx("fa fa-caret-up")}></i>
                                    <span class={cx("hot-today-view-count")}>1641</span>
                                </span>

                                <div>
                                    <a class={cx("ot-today-item-song")} href="https://hopamchuan.com/song/66072/cat-doi-noi-sau">
                                        1. Cắt Đôi Nỗi Sầu                                </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx("hot-today-item-flex-center-between")}>
                            <div className={cx("flex-center-start")}>
                                <span class={cx("hot-today-views")}>
                                    <i class={cx("fa fa-caret-up")}></i>
                                    <span class={cx("hot-today-view-count")}>1641</span>
                                </span>

                                <div>
                                    <a class={cx("ot-today-item-song")} href="https://hopamchuan.com/song/66072/cat-doi-noi-sau">
                                        1. Cắt Đôi Nỗi Sầu                                </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx("hot-today-item-flex-center-between")}>
                            <div className={cx("flex-center-start")}>
                                <span class={cx("hot-today-views")}>
                                    <i class={cx("fa fa-caret-up")}></i>
                                    <span class={cx("hot-today-view-count")}>1641</span>
                                </span>

                                <div>
                                    <a class={cx("ot-today-item-song")} href="https://hopamchuan.com/song/66072/cat-doi-noi-sau">
                                        1. Cắt Đôi Nỗi Sầu                                </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx("hot-today-item-flex-center-between")}>
                            <div className={cx("flex-center-start")}>
                                <span class={cx("hot-today-views")}>
                                    <i class={cx("fa fa-caret-up")}></i>
                                    <span class={cx("hot-today-view-count")}>1641</span>
                                </span>

                                <div>
                                    <a class={cx("ot-today-item-song")} href="https://hopamchuan.com/song/66072/cat-doi-noi-sau">
                                        1. Cắt Đôi Nỗi Sầu                                </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx("hot-today-item-flex-center-between")}>
                            <div className={cx("flex-center-start")}>
                                <span class={cx("hot-today-views")}>
                                    <i class={cx("fa fa-caret-up")}></i>
                                    <span class={cx("hot-today-view-count")}>1641</span>
                                </span>

                                <div>
                                    <a class={cx("ot-today-item-song")} href="https://hopamchuan.com/song/66072/cat-doi-noi-sau">
                                        1. Cắt Đôi Nỗi Sầu                                </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx("hot-today-item-flex-center-between")}>
                            <div className={cx("flex-center-start")}>
                                <span class={cx("hot-today-views")}>
                                    <i class={cx("fa fa-caret-up")}></i>
                                    <span class={cx("hot-today-view-count")}>1641</span>
                                </span>

                                <div>
                                    <a class={cx("ot-today-item-song")} href="https://hopamchuan.com/song/66072/cat-doi-noi-sau">
                                        1. Cắt Đôi Nỗi Sầu                                </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx("hot-today-item-flex-center-between")}>
                            <div className={cx("flex-center-start")}>
                                <span class={cx("hot-today-views")}>
                                    <i class={cx("fa fa-caret-up")}></i>
                                    <span class={cx("hot-today-view-count")}>1641</span>
                                </span>

                                <div>
                                    <a class={cx("ot-today-item-song")} href="https://hopamchuan.com/song/66072/cat-doi-noi-sau">
                                        1. Cắt Đôi Nỗi Sầu                                </a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

        </div>
    );
}

export default Songs;
