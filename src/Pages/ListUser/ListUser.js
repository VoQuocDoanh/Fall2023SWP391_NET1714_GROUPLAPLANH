import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import React, { useMemo } from "react";
import { useState } from "react";
import styles from "./ListUser.module.scss";
import BasicPagination from "../../components/Pagination";
import PaginationControlled from "../../components/Pagination";
import ReactPaginate from 'react-paginate';


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
            {/* <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={69}
                previousLabel="< previous"

                pageClassName="page=item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
            /> */}
        </div>
    );
}

export default ListUser;
