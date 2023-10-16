import { Button } from "@mui/material";
import styles from "./UploadSong.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { React, useState } from "react";
import MarkdownPreview from '../../MarkdownPreview';


const cx = classNames.bind(styles);

function UploadSong() {
    const [valueSearch, setValueSearch] = useState("");
    const [GenreSearch, setGenreSearch] = useState("");
    const [InfoSearch, setInfoSearch] = useState("");
    const [ToneSearch, setToneSearch] = useState("");
    const [LinkSearch, setLinkSearch] = useState("");
    const [nameSongSearch, setnameSongSearch] = useState("");
    const [postContent, setPostContent] = useState();

    return (
        <div className={cx('page-content')}> {/* trang tổng */}
            <div className={cx('container-16')}>
                <h1>Đăng bài hát mới</h1>
                <div className={cx('grid-9')}> {/* trang tổng gổm 2 div trái phải*/}
                    <div className={cx('page-content-left')}> {/* trang tổng bên trái*/}
                        <h2><b>Tên bài hát:</b></h2>
                        <input
                            type="text"
                            placeholder="Ví dụ: Cắt đôi nỗi sầu"
                            value={nameSongSearch}
                            className={cx('input-song-name')}
                            onChange={(event) => setnameSongSearch(event.target.value)}
                        />
                        <h2><b>Lời bài hát và hợp âm:</b></h2>
                        <div className={cx('toolbox')}>
                            <div className={cx('pull-left')}>
                                <div className={cx('button-submit')}>
                                    <Button className={cx('button')}>
                                        <div className={cx('button-icon')}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M6.25005 4.66699L4.16672 5.83366L5.33338 3.75033L4.16672 1.66699L6.25005 2.83366L8.33338 1.66699L7.16672 3.75033L8.33338 5.83366L6.25005 4.66699ZM16.25 12.8337L18.3334 11.667L17.1667 13.7503L18.3334 15.8337L16.25 14.667L14.1667 15.8337L15.3334 13.7503L14.1667 11.667L16.25 12.8337ZM18.3334 1.66699L17.1667 3.75033L18.3334 5.83366L16.25 4.66699L14.1667 5.83366L15.3334 3.75033L14.1667 1.66699L16.25 2.83366L18.3334 1.66699ZM11.1167 10.6503L13.15 8.61699L11.3834 6.85033L9.35005 8.88366L11.1167 10.6503ZM11.975 6.07533L13.925 8.02533C14.25 8.33366 14.25 8.87533 13.925 9.20033L4.20005 18.9253C3.87505 19.2503 3.33338 19.2503 3.02505 18.9253L1.07505 16.9753C0.750049 16.667 0.750049 16.1253 1.07505 15.8003L10.8 6.07533C11.125 5.75033 11.6667 5.75033 11.975 6.07533Z" fill="#699BF7" />
                                            </svg>
                                        </div>
                                        <span>Định dạng</span>
                                    </Button>
                                </div>
                                <div className={cx('button-submit')}>
                                    <Button className={cx('button')}>
                                        <div className={cx('button-icon')}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <g clip-path="url(#clip0_1245_129)">
                                                    <path d="M0.209196 16.692L4.64286 12.8125L3.17313 11.6004C2.49813 11.0098 2.97616 10 3.93071 10H8.93071C9.52246 10 10 10.4197 10 10.9375V15.3125C10 16.1477 8.84808 16.566 8.17313 15.9754L6.78571 14.6875L2.35205 18.567C2.07313 18.811 1.62085 18.811 1.34192 18.567L0.209196 17.5758C-0.0697322 17.3318 -0.0697322 16.936 0.209196 16.692ZM19.7908 3.30805L15.3571 7.1875L16.8269 8.39957C17.5019 8.9902 17.0238 10 16.0693 10H11.0693C10.4775 10 10 9.58027 10 9.0625V4.6875C10 3.85227 11.1519 3.43398 11.8269 4.02457L13.2143 5.3125L17.6479 1.43305C17.9269 1.18898 18.3792 1.18898 18.6581 1.43305L19.7908 2.42418C20.0697 2.66824 20.0697 3.06398 19.7908 3.30805Z" fill="#699BF7" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1245_129">
                                                        <rect width="20" height="20" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <span>Nhập dòng</span>
                                    </Button>
                                </div>
                                <div className={cx('button-submit')}>
                                    <Button className={cx('button')}>
                                        <div className={cx('button-icon')}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M10 4.16699V15.8337M10 4.16699L15 9.16699M10 4.16699L5 9.16699" stroke="#699BF7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </Button>
                                </div>
                                <div className={cx('button-submit')}>
                                    <Button className={cx('button')}>
                                        <div className={cx('button-icon')}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M10 4.16699V15.8337M10 15.8337L15 10.8337M10 15.8337L5 10.8337" stroke="#699BF7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </Button>
                                </div>
                                <div className={cx('button-submit')}>
                                    <Button className={cx('button')}>
                                        <div className={cx('button-icon')}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M17.5782 6.28155L14.3438 3.04718C13.9922 2.69557 13.5153 2.49805 13.018 2.49805C12.5208 2.49805 12.0439 2.69557 11.6922 3.04718L2.42193 12.3175C2.07033 12.6691 1.8728 13.146 1.8728 13.6433C1.8728 14.1405 2.07033 14.6174 2.42193 14.9691L4.77037 17.3175C4.82864 17.3757 4.89785 17.4218 4.974 17.4532C5.05015 17.4846 5.13176 17.5006 5.21412 17.5003H16.8751C17.0408 17.5003 17.1998 17.4345 17.317 17.3172C17.4342 17.2 17.5001 17.0411 17.5001 16.8753C17.5001 16.7095 17.4342 16.5506 17.317 16.4334C17.1998 16.3161 17.0408 16.2503 16.8751 16.2503H10.2579L17.5782 8.93312C17.9298 8.58149 18.1273 8.10459 18.1273 7.60733C18.1273 7.11007 17.9298 6.63318 17.5782 6.28155ZM16.693 8.04718L12.5001 12.2417L8.38365 8.1253L12.5782 3.93312C12.6362 3.875 12.7052 3.82891 12.781 3.79745C12.8569 3.766 12.9382 3.74981 13.0204 3.74981C13.1025 3.74981 13.1838 3.766 13.2597 3.79745C13.3356 3.82891 13.4045 3.875 13.4626 3.93312L16.6954 7.16593C16.8125 7.28313 16.8783 7.44204 16.8783 7.60772C16.8783 7.77341 16.8125 7.93232 16.6954 8.04952L16.693 8.04718Z" fill="#699BF7" />
                                            </svg>
                                        </div>
                                    </Button>
                                </div>
                                <label className={cx('tipsy-item')}>Tự động thêm ngoặc [ ]
                                    <input type="checkbox" />
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div className={cx('pull-right')}>
                                <Button className={cx('button')}>
                                    <div className={cx('button-icon')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M10 4.875C1.625 4.875 0 11.25 0 11.25C0 11.25 2.75 16.375 9.875 16.375C17 16.375 20 11.375 20 11.375C20 11.375 18.375 4.875 10 4.875ZM6.625 6.75C7.25 6.375 8.25 6.375 8.25 6.375C8.25 6.375 7.625 7.5 7.625 8.375C7.625 9.25 7.875 9.75 7.875 9.75L6.5 10C6.5 10 6.125 9.375 6.125 8.5C6.125 7.5 6.625 6.75 6.625 6.75ZM9.875 15.125C4.75 15.125 2.125 12.25 1.375 11.125C1.75 10.25 2.75 8.375 5.25 7.125C5.125 7.625 5 8.125 5 8.75C5 11.5 7.25 13.75 10 13.75C12.75 13.75 15 11.5 15 8.75C15 8.125 14.875 7.625 14.75 7.125C17.25 8.25 18.25 10.25 18.625 11.125C17.75 12.25 15.125 15.125 9.875 15.125Z" fill="#699BF7" />
                                        </svg>
                                    </div>
                                    <span>Xem trước</span>
                                </Button>
                            </div>
                        </div>
                        <div className={cx('song-lyric')}>
                            <textarea value={postContent} id="ABC" name="ABC" rows="20" cols="174" onChange={e => setPostContent(e.target.value)}></textarea>
                        </div>
                        <div className={cx('toolbox-bottom')}>
                            <span>Hợp âm:</span>
                        </div>
                        <h2><b>Hợp âm sử dụng:</b></h2>
                        <div className={cx('blue-header')}>
                            <h4>Xem trước</h4>
                        </div>
                        <div className={cx('review-panel')}>
                            <hr />
                            <MarkdownPreview markdown={postContent} />
                        </div>
                        <div className={cx('grid-5-alpha')}>
                            <div className={cx('song-authors')}>
                                <h2><b>Tác giả:</b></h2>
                                <input
                                    type="text"
                                    placeholder="Ví dụ: Trịnh Công Sơn"
                                    value={valueSearch}
                                    className={cx('input-song-name')}
                                    onChange={(event) => setValueSearch(event.target.value)}
                                />
                            </div>
                            <div className={cx('song-genres')}>
                                <h2><b>Thể loại:</b></h2>
                                <input
                                    type="text"
                                    placeholder="Ví dụ: Nhạc trẻ"
                                    value={GenreSearch}
                                    className={cx('input-song-name')}
                                    onChange={(event) => setGenreSearch(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className={cx('blue-header')}>
                            <h4>Thông tin ca sĩ</h4>
                        </div>
                        <div className={cx('grid-3-alpha')}>
                            <div className={cx('singer-info')}>
                                <h2><b>Ca sĩ:</b></h2>
                                <input
                                    type="text"
                                    placeholder="Ví dụ: Hoài Lâm"
                                    value={InfoSearch}
                                    className={cx('input-song-name')}
                                    onChange={(event) => setInfoSearch(event.target.value)}
                                />
                            </div>
                            <div className={cx('tone-info')}>
                                <h2><b>Tông:</b></h2>
                                <input
                                    type="text"
                                    placeholder="Ví dụ: Am"
                                    value={ToneSearch}
                                    className={cx('input-song-name')}
                                    onChange={(event) => setToneSearch(event.target.value)}
                                />
                            </div>
                            <div className={cx('link-music')}>
                                <h2><b>Link:</b></h2>
                                <input
                                    type="text"
                                    placeholder="Ví dụ: http://mp3.zing.vn/..."
                                    value={LinkSearch}
                                    className={cx('input-song-name')}
                                    onChange={(event) => setLinkSearch(event.target.value)}
                                />
                            </div>
                        </div>
                        <div className={cx('add-singer')}>
                            <div className={cx('icon-plus')}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                                    <path d="M29.553 13.9024H21.0956V5.44705C21.0955 5.27885 21.0286 5.11755 20.9097 4.99858C20.7908 4.87961 20.6296 4.81269 20.4614 4.8125H14.5376C14.3694 4.81259 14.2081 4.87949 14.0891 4.99848C13.9702 5.11747 13.9034 5.27882 13.9034 5.44705L13.9031 13.903L5.44742 13.9027C5.11107 13.9027 4.81322 14.2005 4.81287 14.5372V20.461C4.81277 20.5443 4.82913 20.6269 4.86099 20.7039C4.89285 20.7809 4.93959 20.8509 4.99854 20.9098C5.05748 20.9687 5.12748 21.0154 5.2045 21.0472C5.28153 21.079 5.36408 21.0953 5.44742 21.0952H13.9034V29.5529C13.9035 29.7212 13.9704 29.8826 14.0894 30.0015C14.2084 30.1205 14.3697 30.1874 14.538 30.1875H20.461C20.5443 30.1875 20.6269 30.1711 20.7038 30.1392C20.7808 30.1073 20.8508 30.0606 20.9097 30.0016C20.9686 29.9427 21.0154 29.8728 21.0473 29.7958C21.0792 29.7188 21.0956 29.6363 21.0956 29.5529V21.0955L29.5526 21.0952C29.636 21.0953 29.7186 21.079 29.7956 21.0472C29.8727 21.0153 29.9427 20.9686 30.0016 20.9097C30.0606 20.8507 30.1073 20.7807 30.1391 20.7036C30.171 20.6266 30.1873 20.544 30.1872 20.4606L30.1875 14.5369C30.1875 14.3686 30.1207 14.2072 30.0017 14.0882C29.8827 13.9692 29.7213 13.9024 29.553 13.9024Z" fill="#699BF7" />
                                </svg>
                            </div>
                            <div className={cx('text-add-singer')}>
                                <h2>Thêm ca sĩ</h2>
                            </div>
                        </div>
                    </div>

                    <div className={cx('page-content-right')}> {/* trang tổng bên phải*/}
                        <div className={cx('white-box')}>
                            <div className={cx('white-box-final')}>
                                <div className={cx('white-box-text')}>
                                    <h3><b>Để bài đăng của bạn được duyệt nhanh hơn</b></h3>
                                    <h4>Bạn có thể tham khảo nhưng đề xuất bên dưới</h4>
                                </div>
                                <div className={cx('check-failed-pass')}>
                                    <div className={cx('icon-times-left')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M14.1667 5.83301L5.83337 14.1663M5.83337 5.83301L14.1667 14.1663" stroke="#FF0000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className={cx('text-failed')}>
                                        <div>
                                            <span>Lời và hợp âm đầy đủ</span>
                                        </div>
                                        <div>
                                            <span>0/0 dòng hợp âm</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('check-failed-pass')}>
                                    <div className={cx('icon-times-left')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M4.16663 9.99967L8.33329 14.1663L16.6666 5.83301" stroke="#4ECB71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className={cx('text-failed')}>
                                        <div>
                                            <span>Độ dài của dòng vừa phải</span>
                                        </div>
                                        <div>
                                            <span>Không vượt quá 80 ký tự</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('check-failed-pass')}>
                                    <div className={cx('icon-times-left')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M14.1667 5.83301L5.83337 14.1663M5.83337 5.83301L14.1667 14.1663" stroke="#FF0000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className={cx('text-failed')}>
                                        <div>
                                            <span>Có link nhạc</span>
                                        </div>
                                        <div>
                                            <span>Admin chỉ có thể duyệt bài nếu có link nhạc</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('check-failed-pass')}>
                                    <div className={cx('icon-times-left')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M14.1667 5.83301L5.83337 14.1663M5.83337 5.83301L14.1667 14.1663" stroke="#FF0000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className={cx('text-failed')}>
                                        <div>
                                            <span>Thông tin ca sĩ / tác giả đầy đủ</span>
                                        </div>
                                        <div>
                                            <span>Đã nhập 0 ca sĩ/tác giả</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('check-failed-pass')}>
                                    <div className={cx('icon-times-left')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M14.1667 5.83301L5.83337 14.1663M5.83337 5.83301L14.1667 14.1663" stroke="#FF0000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className={cx('text-failed')}>
                                        <div>
                                            <span>Tông của ca sĩ</span>
                                        </div>
                                        <div>
                                            <span>0/1 ca sĩ có tông</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('check-failed-pass')}>
                                    <div className={cx('icon-times-left')}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M14.1667 5.83301L5.83337 14.1663M5.83337 5.83301L14.1667 14.1663" stroke="#FF0000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className={cx('text-failed')}>
                                        <div>
                                            <span>Thể loại</span>
                                        </div>
                                        <div>
                                            <span>Giúp phân loại bài hát</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('white-box-text')}>
                                    <h4>Sau khi đăng bài bạn vẫn có thể bổ sung/chỉnh sửa lại thông tin bài hát. Bạn lưu ý theo dõi bài đăng của mình nếu Admin có phản hồi về bài đăng của bạn.</h4>
                                    <h4>Xin cảm ơn bạn đã đóng góp!</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadSong;
