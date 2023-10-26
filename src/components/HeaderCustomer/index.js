// Import library
import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import Popup from 'reactjs-popup';


// Import component
import Search from "../Search";

// Import css
import styles from "./HeaderCustomer.module.scss";
import Button from '@mui/material/Button';
import { useContext, useState, useRef, useMemo } from "react";
import jwtDecode from "jwt-decode";
import useToken from "../../authorization/useToken";
import LogoutIcon from '@mui/icons-material/Logout';
import { ShopContext } from "../../context/shop-context";


const cx = classNames.bind(styles);


function HeaderCustomer() {

  const navigate = useNavigate()
  const { checkOut } = useContext(ShopContext)
  const token = useToken()
  let userRole = ''
  let name = ''
  const { setViewBeatFirstTime } = useContext(ShopContext);
  if (token) {
    userRole = jwtDecode(token).role
    name = jwtDecode(token).username
  }
  const handleLogout = () => {
    if (token) {
      localStorage.removeItem("token")
      setViewBeatFirstTime(0)
      checkOut()
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
            <Popup trigger={<button className={cx("button-page")}>Pages</button>} position="bottom centers" closeOnDocumentClick on={['hover', 'focus']}>
              <div className={cx("text-all")}>
                <Link to="/listbeat"><div className={cx("link-text")}>View Beat</div></Link>
                <Link to="/chordsdetails"><div className={cx("link-text")}>View Chords</div></Link>
                <Link to="/songs"><div className={cx("link-text")}> View Songs</div></Link>
              </div>
            </Popup>
          </div>
          <div className={cx("nav-item")}>Contact</div>
          <div className={cx("nav-item")}>
            <Button>
              {/* Phan quyen */}
              {token ?
                <Link className={cx("viewCart")} to="/viewcart">
                  <img className={cx("img-shopping-cart")} src={require("../../assets/images/Other/png-transparent-white-shopping-cart-illustration-shopping-cart-computer-icons-white-cart-simple-miscellaneous-angle-white.png")} />

                </Link>
                :
                <Link className={cx("viewCart")} to="/login">
                  <img className={cx("img-shopping-cart")} src={require("../../assets/images/Other/png-transparent-white-shopping-cart-illustration-shopping-cart-computer-icons-white-cart-simple-miscellaneous-angle-white.png")} />
                </Link>
              }
              <div className={cx("cart-number")}>123</div>


            </Button>
          </div>
        </div>

        {/* Phan quyen header */}                     
            <div className={cx("username")}>
              <div className={cx("pop-up")}>
                <Popup trigger={<button className={cx("button-popup")}>Hi, {name}</button>} position="bottom left  center" closeOnDocumentClick on={['hover', 'focus']}>
                  <div className={cx("text-all")}>
                    <Link to="/myprofile"><div className={cx("link-text")}>My Account</div></Link>
                    <Link to="/listBeatPurchased"><div className={cx("link-text")}>My Purchased</div></Link>
                    <Link to="/viewcart"><div className={cx("link-text")}>My Song's Playlist</div></Link>
                    <Link to="/"><div className={cx("link-text")} onClick={handleLogout}> Log out</div></Link>
                  </div>
                </Popup>
              </div>
            </div> 
      </div>
    </div>
  );
}

export default HeaderCustomer;
