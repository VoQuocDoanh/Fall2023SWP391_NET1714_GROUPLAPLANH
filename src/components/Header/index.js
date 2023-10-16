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


function Header() {
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

        {!token ? (
          <Link to="/login">
            <Button variant="contained" className={cx("action")}>
              <div className={cx("login")}>Login</div>
            </Button>
          </Link>) :
          (

            // <FormControl fullWidth>
            //   <InputLabel id="demo-simple-select-label">{jwtDecode(token).sub}</InputLabel>
            //   <Select
            //     labelId="demo-simple-select-label"
            //     id="demo-simple-select"
            //     value={selectedOption}
            //     label="Age"
            //     onChange={handleSelectChange}
            //   >
            //     <MenuItem value={10}>Ten</MenuItem>
            //     <MenuItem value={20}>Twenty</MenuItem>
            //     <MenuItem value={30}>Thirty</MenuItem>
            //   </Select>
            // </FormControl>
            <div className={cx("username")}>
              {jwtDecode(token).sub}
              <Button onClick={handleLogout}>
                <LogoutIcon />
              </Button>

            </div>
          )
        }
        <div className={cx("pop-up")}>
          <Popup trigger={<button className={cx("button-popup")}>Doanhvq</button>} position="bottom left center">
            <div className={cx("text-all")}>
              <Link to="/myprofile"><div className={cx("link-text")}>My Account</div></Link>
              <Link to="/viewcart"><div className={cx("link-text")}>Purchase order</div></Link>
              <Link><div className={cx("link-text")}> Log out</div></Link>
            </div>
          </Popup>
        </div>
      </div>
    </div>
  );
}

export default Header;
