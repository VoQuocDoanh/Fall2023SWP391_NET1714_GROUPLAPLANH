import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import React from "react";
import ReactDOM from "react-dom/client";
import styles from "./SideBar.module.scss";
import classNames from "classnames/bind";
import { Sidebar } from "react-pro-sidebar";
const cx = classNames.bind(styles);
const SideBar = () => {
    return (
        <div style={{  height: "100%"}}>
            <div style={{ height: "100%"}}>
                <Sidebar className={cx("sidebar")}>
                    <Menu className={cx("menu-item")}>
                        <MenuItem className="menu1">
                            <h2>List Beat</h2>
                        </MenuItem>
                        <MenuItem> Dashboard </MenuItem>
                        <SubMenu label="Genre">
                            <MenuItem > Ballad</MenuItem>
                            <MenuItem> Rock </MenuItem>
                            <MenuItem> Rap </MenuItem>
                        </SubMenu>
                        <SubMenu label="Musician">
                            <MenuItem>Doanh</MenuItem>
                            <MenuItem>Doanh</MenuItem>
                        </SubMenu>
                    </Menu>
                </Sidebar>
            </div>
        </div>
    );
};
export default SideBar;