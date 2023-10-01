import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import React, { useMemo } from "react";
import { useState } from "react";
import styles from "./ViewBeat.module.scss";

const cx = classNames.bind(styles);


// Fake API

const DATA = [
    {
        id: 1,
        beatname: "Beat Name",
        beatsound: "Beat Sound",
        price: "Price",
        username: "Username",
    },
    {
        id: 2,
        beatname: "Beat Name",
        beatsound: "Beat Sound",
        price: "Price",
        username: "Username",
    },
    {
        id: 3,
        beatname: "Beat Name",
        beatsound: "Beat Sound",
        price: "Price",
        username: "Username",
    },
    {
        id: 4,
        beatname: "Beat Name",
        beatsound: "Beat Sound",
        price: "Price",
        username: "Username",
    },
    {
        id: 5,
        beatname: "Beat Name",
        beatsound: "Beat Sound",
        price: "Price",
        username: "Username",
    },
];

function ViewBeat() {
    const handleDelete = (id) => {
        console.log(id);
    };

    const handleUpdate = (id) => {
        console.log(id);
    };

    return (
        

        <div className={cx("wrapper-viewBeat")}>
            <h1 className={cx("login-wrapper")}>View Beat</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Beat Name</th>
                        <th>Beat Sound</th>
                        <th>Price</th>
                        <th>Username</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {DATA.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.beatname}</td>
                            <td>{item.beatsound}</td>
                            <td>{item.price}</td>
                            <td>{item.username}</td>
                            <td className={cx("button-options")}>
                                <button onClick={() => handleUpdate(item.id)}>UPDATE</button>
                                <button onClick={() => handleDelete(item.id)}>DELETE</button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewBeat;
