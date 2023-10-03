import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./UploadFile.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

function UploadFile() {
return (
    <div className={cx("wrapper-uploadfile")}>
        <h2 className={cx("form-heading")}>
            React drop files input
        </h2>
    </div>
  );
}

export default UploadFile;
