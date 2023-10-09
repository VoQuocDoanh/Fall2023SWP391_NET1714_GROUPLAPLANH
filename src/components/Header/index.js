// Import library
import classNames from "classnames/bind";
import { Link } from "react-router-dom";


// Import component
import Search from "../Search";

// Import css
import styles from "./Header.module.scss";
import Button from '@mui/material/Button';
import { useState } from "react";


const cx = classNames.bind(styles);


function Header() {
  const [page, setPage] = useState("Page");
  return (
    <div className={cx("header-wrapper")}>
      <div className={cx("header-left")}>
        <Link to="/" className={cx("header-link")}>
          <span className={cx("logo")}>YourChords</span>
        </Link>{" "}
        <div className={cx("search")}>
          <Search />
        </div>
      </div>
      <img className={cx("img-header")} src={require("../../assets/images/Other/Logo.png")}/>
      <div className={cx("header-right")}>
        <div className={cx("navigation")}>
          <div className={cx("nav-item")}>Home</div>
          <div className={cx("nav-item")}>User</div>
          <div>
            <select
              className={cx("nav-item")}
              onChange={(e) => setPage(e.target.value)}
              defaultValue={page}
            >
              <option value="Page"> Page</option>

                <option value="ViewBeat">View Beat</option>
              
              <option value="ViewChords">View Chords</option>
              <option value="ViewSongs">View Songs</option>
            </select>
          </div>
          <div className={cx("nav-item")}>Contact</div>
        </div>
        <Link to="/login">
          {/* <button className={cx("action")}>
            <div className={cx("login")}>Login</div>
          </button> */}
          <Button variant="contained" className={cx("action")}>
            <div className={cx("login")}>Login</div>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
