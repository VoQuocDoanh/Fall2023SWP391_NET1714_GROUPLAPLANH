
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

function Register() {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [checkPassWorld, setCheckPassWorld] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [address, setAddress] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const handleSubmit = () => {
    console.log(username, password, isChecked);
  };

  return (
    <div className={cx("login-wrapper")}>
      <div className={cx("heading")}>
        <span className={cx("title")}>Have an account ?</span>
        <Link to="/login" className={cx("link")}>
          <span className={cx("title-link")}>Login here</span>
        </Link>
      </div>
      <h1 className={cx("form-heading")}>Register</h1>
      {/* Form */}
      <div className={cx("form")}>
        {/* Username or email */}
        <div className={cx("input")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path
              d="M33.75 35.625V33.2812C33.75 29.3981 30.1519 26.25 25.7137 26.25H19.2863C14.8481 26.25 11.25 29.3981 11.25 33.2812V35.625M28.125 15C28.125 16.4918 27.5324 17.9226 26.4775 18.9775C25.4226 20.0324 23.9918 20.625 22.5 20.625C21.0082 20.625 19.5774 20.0324 18.5225 18.9775C17.4676 17.9226 16.875 16.4918 16.875 15C16.875 13.5082 17.4676 12.0774 18.5225 11.0225C19.5774 9.96763 21.0082 9.375 22.5 9.375C23.9918 9.375 25.4226 9.96763 26.4775 11.0225C27.5324 12.0774 28.125 13.5082 28.125 15Z"
              stroke="white"
            // stroke-width="2"
            // stroke-linecap="round"
            // stroke-linejoin="round"
            />
          </svg>
          <input
            type="text"
            placeholder="Username or email"
            className={cx("input-text")}
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        {/*Email */}
        <div className={cx("input")}>
          <svg className={cx("icon-input")}
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path
              d="M33.75 35.625V33.2812C33.75 29.3981 30.1519 26.25 25.7137 26.25H19.2863C14.8481 26.25 11.25 29.3981 11.25 33.2812V35.625M28.125 15C28.125 16.4918 27.5324 17.9226 26.4775 18.9775C25.4226 20.0324 23.9918 20.625 22.5 20.625C21.0082 20.625 19.5774 20.0324 18.5225 18.9775C17.4676 17.9226 16.875 16.4918 16.875 15C16.875 13.5082 17.4676 12.0774 18.5225 11.0225C19.5774 9.96763 21.0082 9.375 22.5 9.375C23.9918 9.375 25.4226 9.96763 26.4775 11.0225C27.5324 12.0774 28.125 13.5082 28.125 15Z"
              stroke="white"
            />
          </svg>
          <input
            type="Email"
            placeholder="Email"
            className={cx("input-text")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* RoleID */}
        <div className={cx("input")}>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path
              d="M33.75 35.625V33.2812C33.75 29.3981 30.1519 26.25 25.7137 26.25H19.2863C14.8481 26.25 11.25 29.3981 11.25 33.2812V35.625M28.125 15C28.125 16.4918 27.5324 17.9226 26.4775 18.9775C25.4226 20.0324 23.9918 20.625 22.5 20.625C21.0082 20.625 19.5774 20.0324 18.5225 18.9775C17.4676 17.9226 16.875 16.4918 16.875 15C16.875 13.5082 17.4676 12.0774 18.5225 11.0225C19.5774 9.96763 21.0082 9.375 22.5 9.375C23.9918 9.375 25.4226 9.96763 26.4775 11.0225C27.5324 12.0774 28.125 13.5082 28.125 15Z"
              stroke="white"
            />
          </svg>
          {/*Status*/}
          <select
            className={cx("input-text")}
            onChange={e => setStatus(e.target.value)}
            defaultValue={status}
          >
            <option className={cx("role-item")} value="status">Role</option>
            <option value="0">Customer</option>
            <option value="1">Musician</option>
          </select>
        </div>
        {/* Address */}
        <div className={cx("input")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path
              d="M22.5 31.875C21.5054 31.875 20.5516 31.4799 19.8484 30.7766C19.1451 30.0734 18.75 29.1196 18.75 28.125C18.75 26.0438 20.4187 24.375 22.5 24.375C23.4946 24.375 24.4484 24.7701 25.1516 25.4734C25.8549 26.1766 26.25 27.1304 26.25 28.125C26.25 29.1196 25.8549 30.0734 25.1516 30.7766C24.4484 31.4799 23.4946 31.875 22.5 31.875ZM33.75 37.5V18.75H11.25V37.5H33.75ZM33.75 15C34.7446 15 35.6984 15.3951 36.4016 16.0984C37.1049 16.8016 37.5 17.7554 37.5 18.75V37.5C37.5 38.4946 37.1049 39.4484 36.4016 40.1516C35.6984 40.8549 34.7446 41.25 33.75 41.25H11.25C10.2554 41.25 9.30161 40.8549 8.59835 40.1516C7.89509 39.4484 7.5 38.4946 7.5 37.5V18.75C7.5 16.6687 9.16875 15 11.25 15H13.125V11.25C13.125 8.7636 14.1127 6.37903 15.8709 4.62087C17.629 2.86272 20.0136 1.875 22.5 1.875C23.7311 1.875 24.9502 2.11749 26.0877 2.58863C27.2251 3.05977 28.2586 3.75032 29.1291 4.62087C29.9997 5.49142 30.6902 6.52492 31.1614 7.66234C31.6325 8.79977 31.875 10.0189 31.875 11.25V15H33.75ZM22.5 5.625C21.0082 5.625 19.5774 6.21763 18.5225 7.27252C17.4676 8.32742 16.875 9.75816 16.875 11.25V15H28.125V11.25C28.125 9.75816 27.5324 8.32742 26.4775 7.27252C25.4226 6.21763 23.9918 5.625 22.5 5.625Z"
              fill="white"
            />
          </svg>
          <input
            type="address"
            placeholder="Adress"
            className={cx("input-text")}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        {/* Phone Number */}
        <div className={cx("input")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path d="M32.0832 17.5001C32.0824 13.6326 30.5457 9.9237 27.811 7.18896C25.0762 4.45422 21.3673 2.91752 17.4998 2.91675V5.83341C19.8071 5.83394 22.0624 6.5183 23.9808 7.80003C25.8992 9.08176 27.3948 10.9034 28.2784 13.0347C28.8648 14.4504 29.1666 15.9677 29.1665 17.5001H32.0832ZM2.9165 14.5834V7.29175C2.9165 6.90497 3.07015 6.53404 3.34364 6.26055C3.61713 5.98706 3.98806 5.83341 4.37484 5.83341H11.6665C12.0533 5.83341 12.4242 5.98706 12.6977 6.26055C12.9712 6.53404 13.1248 6.90497 13.1248 7.29175V13.1251C13.1248 13.5119 12.9712 13.8828 12.6977 14.1563C12.4242 14.4298 12.0533 14.5834 11.6665 14.5834H8.74984C8.74984 17.6776 9.979 20.6451 12.1669 22.833C14.3548 25.0209 17.3223 26.2501 20.4165 26.2501V23.3334C20.4165 22.9466 20.5701 22.5757 20.8436 22.3022C21.1171 22.0287 21.4881 21.8751 21.8748 21.8751H27.7082C28.0949 21.8751 28.4659 22.0287 28.7394 22.3022C29.0129 22.5757 29.1665 22.9466 29.1665 23.3334V30.6251C29.1665 31.0119 29.0129 31.3828 28.7394 31.6563C28.4659 31.9298 28.0949 32.0834 27.7082 32.0834H20.4165C10.7521 32.0834 2.9165 24.2478 2.9165 14.5834Z" fill="white" />
            <path d="M25.5835 14.1517C26.0238 15.2131 26.2502 16.3509 26.25 17.5H23.625C23.6252 16.6956 23.4669 15.899 23.1592 15.1558C22.8514 14.4126 22.4003 13.7373 21.8315 13.1685C21.2627 12.5997 20.5874 12.1486 19.8442 11.8408C19.101 11.5331 18.3044 11.3748 17.5 11.375V8.75C19.2305 8.75009 20.9222 9.26333 22.361 10.2248C23.7999 11.1863 24.9213 12.5529 25.5835 14.1517Z" fill="white" />
          </svg>
          <input
            type="phonenumber"
            placeholder="Phone Number"
            className={cx("input-text")}
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        </div>
        {/* Password */}
        <div className={cx("input")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path
              d="M22.5 31.875C21.5054 31.875 20.5516 31.4799 19.8484 30.7766C19.1451 30.0734 18.75 29.1196 18.75 28.125C18.75 26.0438 20.4187 24.375 22.5 24.375C23.4946 24.375 24.4484 24.7701 25.1516 25.4734C25.8549 26.1766 26.25 27.1304 26.25 28.125C26.25 29.1196 25.8549 30.0734 25.1516 30.7766C24.4484 31.4799 23.4946 31.875 22.5 31.875ZM33.75 37.5V18.75H11.25V37.5H33.75ZM33.75 15C34.7446 15 35.6984 15.3951 36.4016 16.0984C37.1049 16.8016 37.5 17.7554 37.5 18.75V37.5C37.5 38.4946 37.1049 39.4484 36.4016 40.1516C35.6984 40.8549 34.7446 41.25 33.75 41.25H11.25C10.2554 41.25 9.30161 40.8549 8.59835 40.1516C7.89509 39.4484 7.5 38.4946 7.5 37.5V18.75C7.5 16.6687 9.16875 15 11.25 15H13.125V11.25C13.125 8.7636 14.1127 6.37903 15.8709 4.62087C17.629 2.86272 20.0136 1.875 22.5 1.875C23.7311 1.875 24.9502 2.11749 26.0877 2.58863C27.2251 3.05977 28.2586 3.75032 29.1291 4.62087C29.9997 5.49142 30.6902 6.52492 31.1614 7.66234C31.6325 8.79977 31.875 10.0189 31.875 11.25V15H33.75ZM22.5 5.625C21.0082 5.625 19.5774 6.21763 18.5225 7.27252C17.4676 8.32742 16.875 9.75816 16.875 11.25V15H28.125V11.25C28.125 9.75816 27.5324 8.32742 26.4775 7.27252C25.4226 6.21763 23.9918 5.625 22.5 5.625Z"
              fill="white"
            />
          </svg>
          <input
            type="password"
            placeholder="Password"
            className={cx("input-text")}
            value={password}
            onChange={(e) => setPassWord(e.target.value)}
          />
        </div>
        {/* Password*/}
        <div className={cx("input")}>
          <svg className={cx("icon-input")}
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path
              d="M22.5 31.875C21.5054 31.875 20.5516 31.4799 19.8484 30.7766C19.1451 30.0734 18.75 29.1196 18.75 28.125C18.75 26.0438 20.4187 24.375 22.5 24.375C23.4946 24.375 24.4484 24.7701 25.1516 25.4734C25.8549 26.1766 26.25 27.1304 26.25 28.125C26.25 29.1196 25.8549 30.0734 25.1516 30.7766C24.4484 31.4799 23.4946 31.875 22.5 31.875ZM33.75 37.5V18.75H11.25V37.5H33.75ZM33.75 15C34.7446 15 35.6984 15.3951 36.4016 16.0984C37.1049 16.8016 37.5 17.7554 37.5 18.75V37.5C37.5 38.4946 37.1049 39.4484 36.4016 40.1516C35.6984 40.8549 34.7446 41.25 33.75 41.25H11.25C10.2554 41.25 9.30161 40.8549 8.59835 40.1516C7.89509 39.4484 7.5 38.4946 7.5 37.5V18.75C7.5 16.6687 9.16875 15 11.25 15H13.125V11.25C13.125 8.7636 14.1127 6.37903 15.8709 4.62087C17.629 2.86272 20.0136 1.875 22.5 1.875C23.7311 1.875 24.9502 2.11749 26.0877 2.58863C27.2251 3.05977 28.2586 3.75032 29.1291 4.62087C29.9997 5.49142 30.6902 6.52492 31.1614 7.66234C31.6325 8.79977 31.875 10.0189 31.875 11.25V15H33.75ZM22.5 5.625C21.0082 5.625 19.5774 6.21763 18.5225 7.27252C17.4676 8.32742 16.875 9.75816 16.875 11.25V15H28.125V11.25C28.125 9.75816 27.5324 8.32742 26.4775 7.27252C25.4226 6.21763 23.9918 5.625 22.5 5.625Z"
              fill="white"
            />
          </svg>
          <input
            type="password"
            placeholder="Confirm password"
            className={cx("input-text")}
            value={checkPassWorld}
            onChange={(e) => setCheckPassWorld(e.target.value)}
          />
        </div>

        <div className={cx("input", "submit")} onClick={handleSubmit}>
          <input
            type="submit"
            value="Register"
            className={cx("input-text", "input-submit")}
          />
        </div>
      </div>
      {/* Footer */}
      <div className={cx("footer")}>
        <div className={cx("footer-left")}>
          <input
            type="checkbox"
            id="remember"
            name="rememeber"
            value="check"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className={cx("input-check")}
          />
          <label htmlFor="remember" className={cx("text")}>
            Remember me
          </label>
        </div>
        <div className={cx("footer-right", "text")}>Forgot password ?</div>
      </div>
    </div>
  );
}

export default Register;
