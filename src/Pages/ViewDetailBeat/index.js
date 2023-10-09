import React from 'react'
import classNames from "classnames/bind";
import styles from "./ViewDetailBeat.module.scss";
import { useState } from "react";
import { Button } from "@mui/material";


const cx = classNames.bind(styles);

function ViewDetailBeat() {

    return (

        <div className={cx('view-detail')}>
            <div className={cx("text-header")}>
                <h1>
                    Beats Name
                </h1>
                <div className={cx('header-submit')}>
                    <Button variant="contained">
                        <div>Share Beat</div>
                    </Button>
                </div>
            </div>

            <div className={cx('detail')}>
                <div className={cx('mid-detail-left')}>
                    <div>
                        <div>
                            <img className={cx('image')} src="https://buybeats.com/storage/app/public/profile-photos/WxgWKySRvtkU7C3km2eMmTvAvl8uIdeOAAwhgIyM.jpg" />
                        </div>
                        <div className={cx('button-submit')}>
                            <Button variant="contained">
                                <div>Follow</div>
                            </Button>
                            <Button variant="contained">
                                <div>Message</div>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className={cx('mid-detail-right')}>
                    <h4>Producer: C.G. of Manipulative Musicc</h4>
                    <div className={cx('icon-like')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 109 108" fill="none">
                            <path d="M87.2001 50.112C87.2001 45.576 83.4941 43.2 78.4801 43.2H63.8741C64.9641 39.312 65.4001 35.64 65.4001 32.4C65.4001 19.872 61.9121 17.28 58.8601 17.28C56.8981 17.28 55.3721 17.496 53.4101 18.576C52.7561 19.008 52.5381 19.44 52.3201 20.088L50.1401 31.752C47.7421 37.8 41.8561 43.2 37.0601 46.872V77.76C38.8041 77.76 40.5481 78.624 42.7281 79.704C45.1261 80.784 47.5241 82.08 50.1401 82.08H70.8501C75.2101 82.08 78.4801 78.624 78.4801 75.6C78.4801 74.952 78.4801 74.52 78.2621 74.088C80.8781 73.008 82.8401 70.848 82.8401 68.04C82.8401 66.744 82.6221 65.664 82.1861 64.584C83.9301 63.504 85.4561 61.56 85.4561 59.4C85.4561 58.104 84.8021 56.808 84.1481 55.728C85.8921 54.432 87.2001 52.272 87.2001 50.112ZM82.6221 50.112C82.6221 52.92 79.7881 53.136 79.3521 54.432C78.9161 55.944 81.0961 56.376 81.0961 58.968C81.0961 61.56 77.8261 61.56 77.3901 63.072C76.9541 64.8 78.4801 65.232 78.4801 67.824V68.256C78.0441 70.416 74.7741 70.632 74.1201 71.496C73.4661 72.576 74.1201 73.008 74.1201 75.384C74.1201 76.68 72.5941 77.544 70.8501 77.544H50.1401C48.3961 77.544 46.6521 76.68 44.4721 75.6C42.7281 74.736 40.9841 73.872 39.2401 73.44V50.76C44.6901 46.656 51.6661 40.608 54.2821 33.048V32.616L56.2441 21.816C57.1161 21.6 57.7701 21.6 58.8601 21.6C59.2961 21.6 61.0401 24.192 61.0401 32.4C61.0401 35.64 60.3861 39.096 59.2961 43.2H58.8601C57.5521 43.2 56.6801 44.064 56.6801 45.36C56.6801 46.656 57.5521 47.52 58.8601 47.52H78.4801C80.6601 47.52 82.6221 48.6 82.6221 50.112Z" fill="black" />
                            <path d="M34.8799 82.08H21.7999C19.4019 82.08 17.4399 80.136 17.4399 77.76V47.52C17.4399 45.144 19.4019 43.2 21.7999 43.2H34.8799C37.2779 43.2 39.2399 45.144 39.2399 47.52V77.76C39.2399 80.136 37.2779 82.08 34.8799 82.08ZM21.7999 47.52V77.76H34.8799V47.52H21.7999Z" fill="black" />
                        </svg>
                        <span>10</span>
                    </div>
                    <div className={cx('list-of-beats')}>
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
                    </div>
                    <div className={cx('list')}>
                        <div className={cx('genre')}>
                            <span>&#x2022; Genre: Trap</span>
                            <span>&#x2022; Genre: Trap</span>
                            <span>&#x2022; Genre: Trap</span>
                            <span>&#x2022; Genre: Trap</span>
                            <span>&#x2022; Genre: Trap</span>
                        </div>

                        <div className={cx('mid-button')}>
                            <Button variant="contained" className={cx("submit-wrapper")}>
                                <div>Add to cart</div>
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
            <div className={cx('final-submit')}>
                <Button variant="contained">
                    <div>ABC</div>
                </Button>

            </div>
            <div className={cx('comment')}>
                <textarea id="ABC" name="ABC" rows="5" cols="150" placeholder='Comment...'></textarea>
            </div>
        </div>
    );
}
export default ViewDetailBeat;