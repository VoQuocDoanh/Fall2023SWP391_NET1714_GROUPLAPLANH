// Import library
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

// Import component
import Search from "../Search";

// Import css
import styles from "./Header.module.scss";
import Button from '@mui/material/Button';
import useToken from "../../authorization/useToken";
import jwtDecode from "jwt-decode";

const cx = classNames.bind(styles);
const check = true;
function Header() {
  const token = useToken();
  if(token){
    const userRole = jwtDecode(token).role
    console.log(userRole)
  }
return (
    <div className={cx("header-wrapper")}>
      <div className={cx("header-left")}>
        <Link to="/" className={cx("header-link")}>
        <img src={require("../../assets/images/Other/379657200_1031688777974255_8329385224699419606_n_preview_rev_1.png")}></img>
          <span className={cx("logo")}>YOURCHORDS</span>
        </Link>{" "}
        <div className={cx("search")}>
          <Search />
        </div>
      </div>
      <div className={cx("header-right")}>
        <div className={cx("navigation")}>
          <div className={cx("nav-item")}>Home</div>
          <div className={cx("nav-item")}>User</div>
          <div className={cx("nav-item")}>Page</div>
          <div className={cx("nav-item")}>Contact</div>
        </div>
        {!token ? (
        <Link to="/login">
          {/* <button className={cx("action")}>
            <div className={cx("login")}>Login</div>
          </button> */}
          <Button variant="contained" className={cx("action")}>
              <div className={cx("login")}>Login</div>
            </Button>
        </Link>) : 
        (<div>{jwtDecode(token).sub}</div>) 
        }
      </div>
    </div>
  );
}

export default Header;
