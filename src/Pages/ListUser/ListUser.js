import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import React, { useMemo } from "react";
import { useState } from "react";
import styles from "./ListUser.module.scss";
import BasicPagination from "../../components/Pagination";
import PaginationControlled from "../../components/Pagination";

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

    return (

        <div className={cx("wrapper-viewBeat")}>
            <h1 className={cx("login-wrapper")}>List User</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Date Create</th>
                        <th>Role</th>
                        <th>Status</th>


                    </tr>
                </thead>
                <tbody>
                    {DATA.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.datecreate}</td>
                            <td>{item.role}</td>
                            <td>{item.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <PaginationControlled></PaginationControlled>
        </div>
    );
}

export default ListUser;
