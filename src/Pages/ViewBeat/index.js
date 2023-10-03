import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import React, { useEffect, useMemo, useState } from "react";
import styles from "./ViewBeat.module.scss";

const cx = classNames.bind(styles);


// Fake API



const DATA = [
    {
        id: 1,
        beatname: "Beat 1",
        beatsound: "Beat Sound",
        price: "Price",
        genre: "Genre",
        descriptions: "Nice",
        status: "online",
    },
    {
        id: 2,
        beatname: "Beat 2",
        beatsound: "Beat Sound",
        price: "Price",
        genre: "Genre",
        descriptions: "Nice",
        status: "online",
    },
    {
        id: 3,
        beatname: "Beat 3",
        beatsound: "Beat Sound",
        price: "Price",
        genre: "Genre",
        descriptions: "Nice",
        status: "online",
    },
    {
        id: 4,
        beatname: "Beat 4",
        beatsound: "Beat Sound",
        price: "Price",
        genre: "Genre",
        descriptions: "Nice",
        status: "online",
    },
    {
        id: 5,
        beatname: "Beat 5",
        beatsound: "Beat Sound",
        price: "Price",
        genre: "Genre",
        descriptions: "Nice",
        status: "online",
    },
];

function ViewBeat() {
    const handleDelete = (id) => {
        console.log(id);
    };

    const handleUpdate = (id) => {
        console.log(id);
    };
    const [searchBeat, setSearchBeat] = useState("");
    const [listBeat, setListBeat] = useState(DATA);

    const handleSearchBeat = (event) => {
        setSearchBeat(event.target.value);
        
    }

    useEffect(() => {
        const list = DATA.filter((item) => item.beatname.toLowerCase().includes(searchBeat.toLowerCase()));
        setListBeat(list);
    }, [searchBeat])

    return (

        <div className={cx("wrapper-viewBeat")}>
            <h1 className={cx("login-wrapper")}>View Beat</h1>
            <input type="text" name='search-beat' className={cx("search-beat")} placeholder="Search beat..." value={searchBeat} onChange={handleSearchBeat} />
            <table className={cx("list-beat")}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Beat Name</th>
                        <th>Beat Sound</th>
                        <th>Price</th>
                        <th>Genre</th>
                        <th>Descriptions</th>
                        <th>Status</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {listBeat.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.beatname}</td>
                            <td>{item.beatsound}</td>
                            <td>{item.price}</td>
                            <td>{item.genre}</td>
                            <td>{item.descriptions}</td>
                            <td>{item.status}</td>

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
