import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import React, { useEffect, useMemo, useState } from "react";
import styles from "./ViewBeat.module.scss";
import { async } from "q";
import axios from "axios";
import { Button } from "@mui/material";

const cx = classNames.bind(styles);


// Fake API



// const DATA = [
//     {
//         id: 1,
//         beatname: "Beat 1",
//         beatsound: "Beat Sound",
//         price: "Price",
//         genre: "Genre",
//         descriptions: "Nice",
//         status: "online",
//     },
//     {
//         id: 2,
//         beatname: "Beat 2",
//         beatsound: "Beat Sound",
//         price: "Price",
//         genre: "Genre",
//         descriptions: "Nice",
//         status: "online",
//     },
//     {
//         id: 3,
//         beatname: "Beat 3",
//         beatsound: "Beat Sound",
//         price: "Price",
//         genre: "Genre",
//         descriptions: "Nice",
//         status: "online",
//     },
//     {
//         id: 4,
//         beatname: "Beat 4",
//         beatsound: "Beat Sound",
//         price: "Price",
//         genre: "Genre",
//         descriptions: "Nice",
//         status: "online",
//     },
//     {
//         id: 5,
//         beatname: "Beat 5",
//         beatsound: "Beat Sound",
//         price: "Price",
//         genre: "Genre",
//         descriptions: "Nice",
//         status: "online",
//     },
// ];

function ViewBeat() {
    const navigate = useNavigate();
    const [beats, setBeats] = useState([]);
    const [searchBeat, setSearchBeat] = useState("");
    // const [listBeat, setListBeat] = useState(DATA);
    useEffect(() => {
        loadBeats();
    }, []);

    const loadBeats = async () => {
        const result = await axios.get("http://localhost:8080/api/v1/beat");
        setBeats(result.data);
    }
    const handleSearchBeat = (event) => {
        setSearchBeat(event.target.value);
    }

    const handleDelete = async (id) => {
        console.log(id);
        try {
            await axios.delete(`http://localhost:8080/api/v1/beat/${id}`)
            loadBeats();

        } catch (error) {
            console.log(error)
        }
    };

    // useEffect(() => {
    //     const list = DATA.filter((item) => item.beatname.toLowerCase().includes(searchBeat.toLowerCase()));
    //     setListBeat(list);
    // }, [searchBeat])

    return (

        <div className={cx("wrapper-viewBeat")}>
            <h1 className={cx("login-wrapper")}>View Beat</h1>
            <div className={cx("action")}>
                <input type="text" name='search-beat' className={cx("search-beat")} placeholder="Search beat..." value={searchBeat} onChange={handleSearchBeat} />
                <Link to="/uploadbeat">
                    <Button variant="contained" className={cx("action")}>
                        <div className={cx("login")}>Create</div>
                    </Button>
                </Link>
            </div>
            <table className={cx("list-beat")}>
                <thead>
                    <tr>
                        <th>#</th>
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
                    {beats.map((beat, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{beat.beatName}</td>
                            <td>{beat.beatSound}</td>
                            <td>{beat.price}</td>
                            <td>{beat.genre}</td>
                            <td>{beat.description}</td>
                            <td>{beat.status}</td>

                            <td className={cx("button-options")}>
                                <Link to={`/updatebeat/${beat.id}`}>
                                    <button> UPDATE</button></Link>
                                <button onClick={() => handleDelete(beat.id)}>DELETE</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
}

export default ViewBeat;
