// Import library
import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import Popup from 'reactjs-popup';


// Import component
import Search from "../Search";

// Import css
import styles from "./Header.module.scss";
import Button from '@mui/material/Button';
import { useState } from "react";
import jwtDecode from "jwt-decode";
import useToken from "../../authorization/useToken";
import LogoutIcon from '@mui/icons-material/Logout';


const cx = classNames.bind(styles);


function MusicianHeader() {
  const navigate = useNavigate()
  const token = useToken();
  console.log(token)
  if (token) {
    const userRole = jwtDecode(token).role
    console.log(userRole)
  }
  const handleLogout = () => {
    if (token) {
      localStorage.removeItem("token")
      navigate("/")
    }
  }
  const [page, setPage] = useState("Page");
  return (
    <div className={cx("header-wrapper")}>
      <div className={cx("header-left")}>
        <Link to="/" className={cx("header-link")}>
          <span className={cx("logo")}>YourChords</span>
        </Link>
        <div className={cx("search")}>
          <Search />
        </div>
      </div>
      <img className={cx("img-header")} src={require("../../assets/images/Other/Logo.png")} />
      <div className={cx("header-right")}>
        <div className={cx("navigation")}>
          <div className={cx("nav-item")}>Home</div>
          <div className={cx("nav-item")}>User</div>
          <div>
            <Popup trigger={<button className={cx("button-page")}>Pages</button>} position="bottom center">
              <div className={cx("text-all")}>
                <Link to="/"><div className={cx("link-text")}>View Beat</div></Link>
                <Link to="/"><div className={cx("link-text")}>View Chords</div></Link>
                <Link><div className={cx("link-text")}> View Songs</div></Link> 
              </div>
            </Popup>
          </div>
          <div className={cx("nav-item")}>Contact</div>
        </div>

        {!token ? (
          <Link to="/login">
            <Button variant="contained" className={cx("action")}>
              <div className={cx("login")}>Login</div>
            </Button>
          </Link>) :
          (
            <div className={cx("username")}>
              {jwtDecode(token).sub}
              <Button onClick={handleLogout}>
                <LogoutIcon />
              </Button>

            </div>
          )
        }
        <div className={cx("pop-up")}>
          <Popup trigger={<button className={cx("button-popup")}>Musician</button>} position="bottom left center">
            <div className={cx("text-all")}>
              <Link to="/"><div className={cx("link-text")}>My Account</div></Link>
              <Link to="/"><div className={cx("link-text")}>View Beat</div></Link>
              <Link><div className={cx("link-text")}> Upload Beat</div></Link>
              <Link><div className={cx("link-text")}> Log out</div></Link>
            </div>
          </Popup>
        </div>
      </div>
    </div>
  );
}

export default MusicianHeader;
