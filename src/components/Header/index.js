// Import library
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

// Import component
import Search from "../Search";

// Import css
import styles from "./Header.module.scss";
import Button from '@mui/material/Button';

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("header-wrapper")}>
      <div className={cx("header-left")}>
        <Link to="/" className={cx("header-link")}>
          <span className={cx("logo")}>My Chords</span>
        </Link>{" "}
        <div className={cx("search")}>
          <Search />
        </div>
      </div>
      <div className={cx("header-right")}>
        <div className={cx("navigation")}>
          <div className={cx("nav-item")}>Home</div>
          <div className={cx("nav-item")}>User</div>
          <div className={cx("nav-item")}>  Page</div>
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
