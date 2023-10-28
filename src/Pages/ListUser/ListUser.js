import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import React, { useMemo } from "react";
import { useState } from "react";
import styles from "./ListUser.module.scss";
import BasicPagination from "../../components/Pagination";
import PaginationControlled from "../../components/Pagination";
import ReactPaginate from 'react-paginate';
import { Pagination } from "@mui/material";


const cx = classNames.bind(styles);

// Fake API

const DATA = [
    {
        id: 1,
        name: "Doanh",
        beatsound: "Beat Sound",
        datecreate: "10/10/2010",
        role: "Admin",
        status: "Active",
    },
    {
        id: 2,
        name: "Doanh",
        beatsound: "Beat Sound",
        datecreate: "10/10/2010",
        role: "Admin",
        status: "Active",
    },
    {
        id: 3,
        name: "Doanh",
        beatsound: "Beat Sound",
        datecreate: "10/10/2010",
        role: "Admin",
        status: "Active",
    },
    {
        id: 4,
        name: "Doanh",
        beatsound: "Beat Sound",
        datecreate: "10/10/2010",
        role: "Admin",
        status: "Active",
    },
    {
        id: 5,
        name: "Doanh",
        beatsound: "Beat Sound",
        datecreate: "10/10/2010",
        role: "Admin",
        status: "Active",
    },


];

function ListUser() {
    const handleDelete = (id) => {
        console.log(id);
    };

    const handleUpdate = (id) => {
        console.log(id);
    };
    const handlePageClick = () => {

    }

    return (

        <div className={cx("container")}>
            <h1 className={cx("login-wrapper")}>List User</h1>
            <div className={cx("line")}>
                </div>
            <div className={cx("listuser-header")}>
                <thead>
                    <tr>
                        <th><span style={{ paddingRight: 130 }}>User</span></th>
                        <th><span>Created</span></th>
                        <th class="text-center"><span>Status</span></th>
                        <th><span style={{ marginLeft: 30 }}>Email</span></th>
                        <th><span style={{ marginLeft: 50 }}>Role</span></th>
                    </tr>
                </thead>
                <tbody className={cx("grid-row")}>
                    <div className={cx("row-1")}>
                        <td style={{ paddingTop: 15, paddingLeft: 10 }}>
                            <img className={cx("img-user")} src={"https://bootdey.com/img/Content/avatar/avatar1.png"} />
                            <a href="#" class="user-link">Mila Kunis</a>
                            {/* <span class="user-subhead">Admin</span> */}
                        </td>
                        <td>
                            2013/08/08
                        </td>
                        <td class="text-center">
                            <span style={{ background: "#06c", padding: 5, height: 5, color: 'white', fontSize: '1.8rem', marginLeft: 10, borderRadius: 18 }} class={cx("label label-default")}>Inactive</span>
                        </td>
                        <td>
                            <a style={{ marginLeft: 20, textDecorationLine: 'underline', color: '#337ab7' }} href="#">mila@kunis.com</a>
                        </td>
                        <td>
                            <a style={{ marginRight: 20, fontWeight: 500 }} href="#">Admin</a>
                        </td>
                    </div>
                    <div className={cx("row-1")}>
                        <td style={{ paddingTop: 15, paddingLeft: 10 }}>
                            <img className={cx("img-user")} src={"https://bootdey.com/img/Content/avatar/avatar4.png"} />
                            <a href="#" class="user-link">Mila Kunis</a>
                            {/* <span class="user-subhead">Admin</span> */}
                        </td>
                        <td>
                            2013/08/08
                        </td>
                        <td class="text-center">
                            <span style={{ background: "green", padding: 5, height: 5, color: 'white', fontSize: '1.8rem', marginLeft: 10, borderRadius: 18 }} class={cx("label label-default")}>Online</span>
                        </td>
                        <td>
                            <a style={{ marginLeft: 20, textDecorationLine: 'underline', color: '#337ab7' }} href="#">mila@kunis.com</a>
                        </td>
                        <td>
                            <a style={{ marginRight: 20, fontWeight: 500 }} href="#">Customer</a>
                        </td>
                    </div>
                    <div className={cx("row-1")}>
                        <td style={{ paddingTop: 15, paddingLeft: 10 }}>
                            <img className={cx("img-user")} src={"https://bootdey.com/img/Content/avatar/avatar1.png"} />
                            <a href="#" class="user-link">Mila Kunis</a>
                            {/* <span class="user-subhead">Admin</span> */}
                        </td>
                        <td>
                            2013/08/08
                        </td>
                        <td class="text-center">
                            <span style={{ background: "grey", padding: 5, height: 5, color: 'white', fontSize: '1.8rem', marginLeft: 10, borderRadius: 18 }} class={cx("label label-default")}>Offline</span>
                        </td>
                        <td>
                            <a style={{ marginLeft: 20, textDecorationLine: 'underline', color: '#337ab7' }} href="#">mila@kunis.com</a>
                        </td>
                        <td>
                            <a style={{ marginRight: 20, fontWeight: 500 }} href="#">Musician</a>
                        </td>
                    </div>
                    <div className={cx("row-1")}>
                        <td style={{ paddingTop: 15, paddingLeft: 10 }}>
                            <img className={cx("img-user")} src={"https://bootdey.com/img/Content/avatar/avatar4.png"} />
                            <a href="#" class="user-link">Mila Kunis</a>
                            {/* <span class="user-subhead">Admin</span> */}
                        </td>
                        <td>
                            2013/08/08
                        </td>
                        <td class="text-center">
                            <span style={{ background: "red", padding: 5, height: 5, color: 'white', fontSize: '1.8rem', marginLeft: 10, borderRadius: 18 }} class={cx("label label-default")}>Banned</span>
                        </td>
                        <td>
                            <a style={{ marginLeft: 20, textDecorationLine: 'underline', color: '#337ab7' }} href="#">mila@kunis.com</a>
                        </td>
                        <td>
                            <a style={{ marginRight: 20, fontWeight: 500 }} href="#">Customer</a>
                        </td>
                    </div>
                    <div className={cx("row-1")}>
                        <td style={{ paddingTop: 15, paddingLeft: 10 }}>
                            <img className={cx("img-user")} src={"https://bootdey.com/img/Content/avatar/avatar1.png"} />
                            <a href="#" class="user-link">Mila Kunis</a>
                            {/* <span class="user-subhead">Admin</span> */}
                        </td>
                        <td>
                            2013/08/08
                        </td>
                        <td class="text-center">
                            <span style={{ background: "green", padding: 5, height: 5, color: 'white ', fontSize: '1.8rem', marginLeft: 10, borderRadius: 18 }} class={cx("label label-default")}>Online</span>
                        </td>
                        <td>
                            <a style={{ marginLeft: 20, textDecorationLine: 'underline', color: '#337ab7' }} href="#">mila@kunis.com</a>
                        </td>
                        <td>
                            <a style={{ marginRight: 20, fontWeight: 500 }} href="#">Customer</a>
                        </td>
                    </div>
                </tbody>
                <PaginationControlled></PaginationControlled>
            </div>
        </div>
    );
}

export default ListUser;
