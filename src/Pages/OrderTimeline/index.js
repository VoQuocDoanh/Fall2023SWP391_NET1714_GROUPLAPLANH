import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import classNames from "classnames/bind";
import styles from "./OrderTimeline.module.scss";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ListOrderBox from '@/components/ListOrderBox';
import Pagination from '@/components/Pagination';
import NotFound from '../NotFound';
import useToken from '@/authorization/useToken';
import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';
import axiosInstance from '@/authorization/axiosInstance';
import ListSplitter from '@/components/ListSplitter';
const cx = classNames.bind(styles);


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function OrderTimeline() {
    const [listOrderBeatAll, setListOrderBeatAll] = useState([])
    const [listOrderBeatProcess, setListOrderBeatProcess] = useState([])
    const [listOrderBeatPayment, setListOrderBeatPayment] = useState([])
    const [listOrderBeatMakeABeat, setListOrderBeatMakeABeat] = useState([])
    const [listOrderBeatApproved, setListOrderBeatApproved] = useState([])
    const [listOrderBeatCompleted, setListOrderBeatCompleted] = useState([])
    const [listOrderBeatCanceled, setListOrderBeatCanceled] = useState([])
    let userId = ""
    let role = ""
    const token = useToken()
    if (token) {
        userId = jwtDecode(token).sub
        role = jwtDecode(token).role
    }
    const [pageAll, setPageAll] = useState(1)
    const [pagesAll, setPagesAll] = useState(1)
    const [pageProcess, setPageProcess] = useState(1)
    const [pagesProcess, setPagesProcess] = useState(1)
    const [pagePayment, setPagePayment] = useState(1)
    const [pagesPayment, setPagesPayment] = useState(1)
    const [pageMakeABeat, setPageMakeABeat] = useState(1)
    const [pagesMakeABeat, setPagesMakeABeat] = useState(1)
    const [pageApproved, setPageApproved] = useState(1)
    const [pagesApproved, setPagesApproved] = useState(1)
    const [pageCompleted, setPageCompleted] = useState(1)
    const [pagesCompleted, setPagesCompleted] = useState(1)
    const [pageCanceled, setPageCanceled] = useState(1)
    const [pagesCanceled, setPagesCanceled] = useState(1)
    const listTest = [
        {
            id: 1,
            description: 1,
            status: 0
        },
        {
            id: 2,
            description: 1,
            status: 1
        },
        {
            id: 3,
            description: 1,
            status: 1
        },
    ]
    const listOrderBeat0 = [

    ]
    const listOrderBeat1 = [
        {
            id: 1,
            description: 1,
            status: 0
        },
        {
            id: 2,
            description: 1,
            status: 1
        },
        {
            id: 3,
            description: 1,
            status: 1
        },
    ]
    const listOrderBeat2 = [
        {
            id: 1,
            description: 2
        },
        {
            id: 2,
            description: 2
        },
        {
            id: 3,
            description: 2
        },
    ]
    const listOrderBeat3 = [
        {
            id: 1,
            description: 3
        },
        {
            id: 2,
            description: 3
        },
        {
            id: 3,
            description: 3
        },
    ]
    const listOrderBeat01 = [
        {
            id: 1,
            description: "order1"
        },
        {
            id: 2,
            description: "order1"
        },
        {
            id: 3,
            description: "order1"
        },
    ]
    const listOrderBeat02 = [
        {
            id: 1,
            description: "order2"
        },
        {
            id: 2,
            description: "order2"
        },
        {
            id: 3,
            description: "order2"
        },
    ]
    const listOrderBeat03 = [
        {
            id: 1,
            description: "order3"
        },
        {
            id: 2,
            description: "order3"
        },
        {
            id: 3,
            description: "order3"
        },
    ]

    useEffect(() => {
        const loadListCusOrderBeat = async () => {
            await axiosInstance.get(`http://localhost:8080/api/v1/request/beat/customer/${userId}`)
                .then((res) => {
                    if (res.data === 0) {
                        setListOrderBeatAll(res.data)
                    }
                    else {
                        const newGroup = ListSplitter({ data: res.data, groupSize: 8 })
                        for (let i = 0; i < newGroup.length; i++) {
                            if (pageAll === i + 1) {
                                setListOrderBeatAll(newGroup[i])
                            }
                        }
                        setPagesAll(newGroup.length)
                    }
                    let listProcess = []
                    let listPayment = []
                    let listMakeABeat = []
                    let listApproved = []
                    let listCompleted = []
                    let listCanceled = []
                    //Process
                    for (let i = 0; i < res.data.length; i++) {
                        if (res.data[i].status === 0) {
                            listProcess.push(res.data[i])
                        }
                    }
                    if (listProcess === 0) {
                        setListOrderBeatProcess(listProcess)
                    }
                    else {
                        const newGroup = ListSplitter({ data: listProcess, groupSize: 8 })
                        for (let i = 0; i < newGroup.length; i++) {
                            if (pageProcess === i + 1) {
                                setListOrderBeatProcess(newGroup[i])
                            }
                        }
                        setPagesProcess(newGroup.length)
                    }
                    //Payment
                    for (let i = 0; i < res.data.length; i++) {
                        if (res.data[i].status === 1) {
                            listPayment.push(res.data[i])
                        }
                    }
                    if (listPayment === 0) {
                        setListOrderBeatPayment(listPayment)
                    }
                    else {
                        const newGroup = ListSplitter({ data: listPayment, groupSize: 8 })
                        for (let i = 0; i < newGroup.length; i++) {
                            if (pagePayment === i + 1) {
                                setListOrderBeatPayment(newGroup[i])
                            }
                        }
                        setPagesPayment(newGroup.length)
                    }
                    //MakeABeat
                    for (let i = 0; i < res.data.length; i++) {
                        if (res.data[i].status === 2) {
                            listMakeABeat.push(res.data[i])
                        }
                    }
                    if (listMakeABeat === 0) {
                        setListOrderBeatMakeABeat(listMakeABeat)
                    }
                    else {
                        const newGroup = ListSplitter({ data: listMakeABeat, groupSize: 8 })
                        for (let i = 0; i < newGroup.length; i++) {
                            if (pageMakeABeat === i + 1) {
                                setListOrderBeatMakeABeat(newGroup[i])
                            }
                        }
                        setPagesMakeABeat(newGroup.length)
                    }
                    //Approved
                    for (let i = 0; i < res.data.length; i++) {
                        if (res.data[i].status === 3) {
                            listApproved.push(res.data[i])
                        }
                    }
                    if (listApproved === 0) {
                        setListOrderBeatApproved(listApproved)
                    }
                    else {
                        const newGroup = ListSplitter({ data: listApproved, groupSize: 8 })
                        for (let i = 0; i < newGroup.length; i++) {
                            if (pageApproved === i + 1) {
                                setListOrderBeatApproved(newGroup[i])
                            }
                        }
                        setPagesApproved(newGroup.length)
                    }
                    //Completed
                    for (let i = 0; i < res.data.length; i++) {
                        if (res.data[i].status === -1) {
                            listCompleted.push(res.data[i])
                        }
                    }
                    if (listCompleted === 0) {
                        setListOrderBeatCompleted(listCompleted)
                    }
                    else {
                        const newGroup = ListSplitter({ data: listCompleted, groupSize: 8 })
                        for (let i = 0; i < newGroup.length; i++) {
                            if (pageCompleted === i + 1) {
                                setListOrderBeatCompleted(newGroup[i])
                            }
                        }
                        setPagesCompleted(newGroup.length)
                    }
                    //Canceled
                    for (let i = 0; i < res.data.length; i++) {
                        if (res.data[i].status === -2 || res.data[i].status === -3) {
                            listCanceled.push(res.data[i])
                        }
                    }
                    if (listCanceled === 0) {
                        setListOrderBeatCanceled(listCanceled)
                    }
                    else {
                        const newGroup = ListSplitter({ data: listCanceled, groupSize: 8 })
                        for (let i = 0; i < newGroup.length; i++) {
                            if (pageCanceled === i + 1) {
                                setListOrderBeatCanceled(newGroup[i])
                            }
                        }
                        setPagesCanceled(newGroup.length)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })

        }
        const loadListMSOrderBeat = async () => {
            await axiosInstance.get(`http://localhost:8080/api/v1/request/beat/musician/${userId}`)
                .then((res) => {
                    if (res.data === 0) {
                        setListOrderBeatAll(res.data)
                    }
                    else {
                        const newGroup = ListSplitter({ data: res.data, groupSize: 8 })
                        for (let i = 0; i < newGroup.length; i++) {
                            if (pageAll === i + 1) {
                                setListOrderBeatAll(newGroup[i])
                            }
                        }
                        setPagesAll(newGroup.length)
                    }
                    let listProcess = []
                    let listPayment = []
                    let listMakeABeat = []
                    let listApproved = []
                    let listCompleted = []
                    let listCanceled = []
                    //Process
                    for (let i = 0; i < res.data.length; i++) {
                        if (res.data[i].status === 0) {
                            listProcess.push(res.data[i])
                        }
                    }
                    if (listProcess === 0) {
                        setListOrderBeatProcess(listProcess)
                    }
                    else {
                        const newGroup = ListSplitter({ data: listProcess, groupSize: 8 })
                        for (let i = 0; i < newGroup.length; i++) {
                            if (pageProcess === i + 1) {
                                setListOrderBeatProcess(newGroup[i])
                            }
                        }
                        setPagesProcess(newGroup.length)
                    }
                    //Payment
                    for (let i = 0; i < res.data.length; i++) {
                        if (res.data[i].status === 1) {
                            listPayment.push(res.data[i])
                        }
                    }
                    if (listPayment === 0) {
                        setListOrderBeatPayment(listPayment)
                    }
                    else {
                        const newGroup = ListSplitter({ data: listPayment, groupSize: 8 })
                        for (let i = 0; i < newGroup.length; i++) {
                            if (pagePayment === i + 1) {
                                setListOrderBeatPayment(newGroup[i])
                            }
                        }
                        setPagesPayment(newGroup.length)
                    }
                    //MakeABeat
                    for (let i = 0; i < res.data.length; i++) {
                        if (res.data[i].status === 2) {
                            listMakeABeat.push(res.data[i])
                        }
                    }
                    if (listMakeABeat === 0) {
                        setListOrderBeatMakeABeat(listMakeABeat)
                    }
                    else {
                        const newGroup = ListSplitter({ data: listMakeABeat, groupSize: 8 })
                        for (let i = 0; i < newGroup.length; i++) {
                            if (pageMakeABeat === i + 1) {
                                setListOrderBeatMakeABeat(newGroup[i])
                            }
                        }
                        setPagesMakeABeat(newGroup.length)
                    }
                    //Approved
                    for (let i = 0; i < res.data.length; i++) {
                        if (res.data[i].status === 3) {
                            listApproved.push(res.data[i])
                        }
                    }
                    if (listApproved === 0) {
                        setListOrderBeatApproved(listApproved)
                    }
                    else {
                        const newGroup = ListSplitter({ data: listApproved, groupSize: 8 })
                        for (let i = 0; i < newGroup.length; i++) {
                            if (pageApproved === i + 1) {
                                setListOrderBeatApproved(newGroup[i])
                            }
                        }
                        setPagesApproved(newGroup.length)
                    }
                    //Completed
                    for (let i = 0; i < res.data.length; i++) {
                        if (res.data[i].status === -1) {
                            listCompleted.push(res.data[i])
                        }
                    }
                    if (listCompleted === 0) {
                        setListOrderBeatCompleted(listCompleted)
                    }
                    else {
                        const newGroup = ListSplitter({ data: listCompleted, groupSize: 8 })
                        for (let i = 0; i < newGroup.length; i++) {
                            if (pageCompleted === i + 1) {
                                setListOrderBeatCompleted(newGroup[i])
                            }
                        }
                        setPagesCompleted(newGroup.length)
                    }
                    //Canceled
                    for (let i = 0; i < res.data.length; i++) {
                        if (res.data[i].status === -2 || res.data[i].status === -3) {
                            listCanceled.push(res.data[i])
                        }
                    }
                    if (listCanceled === 0) {
                        setListOrderBeatCanceled(listCanceled)
                    }
                    else {
                        const newGroup = ListSplitter({ data: listCanceled, groupSize: 8 })
                        for (let i = 0; i < newGroup.length; i++) {
                            if (pageCanceled === i + 1) {
                                setListOrderBeatCanceled(newGroup[i])
                            }
                        }
                        setPagesCanceled(newGroup.length)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })

        }
        console.log(role)
        if (role == "CUS") {
            loadListCusOrderBeat()
        }
        else {
            loadListMSOrderBeat()
        }

    }, [pageProcess, pagePayment, pageMakeABeat, pageApproved, pageCompleted, pageCanceled])
    console.log(listOrderBeatProcess)
    const [value, setValue] = React.useState(0);

    // const [listOrderBeat0, setLisOrderBeat0] = useState([])
    // const [listOrderBeat1, setLisOrderBeat1] = useState([])
    // const [listOrderBeat2, setLisOrderBeat2] = useState([])
    // const [listOrderBeat3, setLisOrderBeat3] = useState([])
    // const [listOrderBeat01, setLisOrderBeat01] = useState([])
    // const [listOrderBeat01, setLisOrderBeat02] = useState([])
    // const [listOrderBeat01, setLisOrderBeat03] = useState([])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    if (token && (jwtDecode(token).role === "CUS" || jwtDecode(token).role === "MS")) {
        return (
            <div>
                <div style={{ marginBottom: 100 }} className={cx("text-header")}>
                    <h1 className={cx("text-welcome")}>
                        Order Beat Timeline
                    </h1>

                </div>
                <div>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab style={{ fontSize: 15, marginRight: 80, marginLeft:70 }} label="All" {...a11yProps(0)} />
                                <Tab style={{ fontSize: 15, marginRight: 80 }} label="Processing" {...a11yProps(1)} />
                                <Tab style={{ fontSize: 15, marginRight: 80 }} label="Waiting for payment" {...a11yProps(2)} />
                                <Tab style={{ fontSize: 15, marginRight: 80 }} label="Waiting to make the beat" {...a11yProps(3)} />
                                <Tab style={{ fontSize: 15, marginRight: 80 }} label="Waiting for customer's approval" {...a11yProps(4)} />
                                <Tab style={{ fontSize: 15, marginRight: 80 }} label="Completed" {...a11yProps(5)} />
                                <Tab style={{ fontSize: 15, marginRight: 80 }} label="Canceled" {...a11yProps(6)} />
                            </Tabs>
                        </Box>
                        {/* All */}
                        <CustomTabPanel value={value} index={0}>
                            {listOrderBeatAll.length !== 0 ?
                                <div style={{ height: 1350 }}>
                                    <div className={cx("listbeat")}>
                                        {listOrderBeatAll.map((item) => {
                                            return (
                                                <ListOrderBox id={item.id} status={item.status} beatName={item.beatName} cusName={item.userRequest.fullName} msName={item.musician.fullName} date={item.creatAt} />
                                            )
                                        })}
                                    </div>
                                    {pagesAll !== 1 ?
                                        <div className={cx("pagination")}>
                                            <Pagination pages={pagesAll} page={pageAll} setPage={setPageAll} />
                                        </div>
                                        : <div></div>}
                                </div>
                                : <div>
                                    <img style={{ width: 300, height: 300, marginLeft: 790 }} src={require("../../assets/images/Other/DVD.png")} />
                                    <h1 className={cx("sold-out")} style={{ zindex: '1', marginLeft: 700, height: 500 }}>There are no beats</h1>
                                </div>
                            }

                        </CustomTabPanel>
                        {/* Process */}
                        <CustomTabPanel value={value} index={1}>
                            {listOrderBeatProcess.length !== 0 ?
                                <div style={{ height: 1350 }}>
                                    <div className={cx("listbeat")}>
                                        {listOrderBeatProcess.map((item) => {
                                            return (
                                                <ListOrderBox id={item.id} status={item.status} beatName={item.beatName} cusName={item.userRequest.fullName} msName={item.musician.fullName} date={item.creatAt} />
                                            )
                                        })}
                                    </div>
                                    {pagesProcess !== 1 ?
                                        <div className={cx("pagination")}>
                                            <Pagination pages={pagesProcess} page={pageProcess} setPage={setPageProcess} />
                                        </div>
                                        : <div></div>}
                                </div>
                                : <div>
                                    <img style={{ width: 300, height: 300, marginLeft: 790 }} src={require("../../assets/images/Other/DVD.png")} />
                                    <h1 className={cx("sold-out")} style={{ zindex: '1', marginLeft: 700, height: 500 }}>There are no beats</h1>
                                </div>
                            }

                        </CustomTabPanel>
                        {/* Payment */}
                        <CustomTabPanel value={value} index={2}>
                            {listOrderBeatPayment.length !== 0 ?
                                <div style={{ height: 1350 }}>
                                    <div className={cx("listbeat")}>
                                        {listOrderBeatPayment.map((item) => {
                                            return (
                                                <ListOrderBox id={item.id} beatName={item.beatName} cusName={item.userRequest.fullName} msName={item.musician.fullName} date={item.creatAt} />
                                            )
                                        })}
                                    </div>
                                    {pagesPayment !== 1 ?
                                        <div className={cx("pagination")}>
                                            <Pagination pages={pagesPayment} page={pagePayment} setPage={setPagePayment} />
                                        </div>
                                        : <div></div>}
                                </div>
                                : <div>
                                    <img style={{ width: 300, height: 300, marginLeft: 790 }} src={require("../../assets/images/Other/DVD.png")} />
                                    <h1 className={cx("sold-out")} style={{ zindex: '1', marginLeft: 700, height: 500 }}>There are no beats</h1>
                                </div>
                            }

                        </CustomTabPanel>
                        {/* MakeABeat */}
                        <CustomTabPanel value={value} index={3}>
                            {listOrderBeatMakeABeat.length !== 0 ?
                                <div style={{ height: 1350 }}>
                                    <div className={cx("listbeat")}>
                                        {listOrderBeatMakeABeat.map((item) => {
                                            return (
                                                <ListOrderBox id={item.id} beatName={item.beatName} cusName={item.userRequest.fullName} msName={item.musician.fullName} date={item.creatAt} />
                                            )
                                        })}
                                    </div>
                                    {pagesMakeABeat !== 1 ?
                                        <div className={cx("pagination")}>
                                            <Pagination pages={pagesMakeABeat} page={pageMakeABeat} setPage={setPageMakeABeat} />
                                        </div>
                                        : <div></div>}
                                </div>
                                : <div>
                                    <img style={{ width: 300, height: 300, marginLeft: 790 }} src={require("../../assets/images/Other/DVD.png")} />
                                    <h1 className={cx("sold-out")} style={{ zindex: '1', marginLeft: 700, height: 500 }}>There are no beats</h1>
                                </div>
                            }

                        </CustomTabPanel>
                        {/* Approved */}
                        <CustomTabPanel value={value} index={4}>
                            {listOrderBeatApproved.length !== 0 ?
                                <div style={{ height: 1350 }}>
                                    <div className={cx("listbeat")}>
                                        {listOrderBeatApproved.map((item) => {
                                            return (
                                                <ListOrderBox id={item.id} beatName={item.beatName} cusName={item.userRequest.fullName} msName={item.musician.fullName} date={item.creatAt} />
                                            )
                                        })}
                                    </div>
                                    {pagesApproved !== 1 ?
                                        <div className={cx("pagination")}>
                                            <Pagination pages={pagesApproved} page={pageApproved} setPage={setPageApproved} />
                                        </div>
                                        : <div></div>}
                                </div>
                                : <div>
                                    <img style={{ width: 300, height: 300, marginLeft: 790 }} src={require("../../assets/images/Other/DVD.png")} />
                                    <h1 className={cx("sold-out")} style={{ zindex: '1', marginLeft: 700, height: 500 }}>There are no beats</h1>
                                </div>
                            }

                        </CustomTabPanel>
                        {/* Completed */}
                        <CustomTabPanel value={value} index={5}>
                            {listOrderBeatCompleted.length !== 0 ?
                                <div style={{ height: 1350 }}>
                                    <div className={cx("listbeat")}>
                                        {listOrderBeatCompleted.map((item) => {
                                            return (
                                                <ListOrderBox id={item.id} beatName={item.beatName} cusName={item.userRequest.fullName} msName={item.musician.fullName} date={item.creatAt} />
                                            )
                                        })}
                                    </div>
                                    {pagesCompleted !== 1 ?
                                        <div className={cx("pagination")}>
                                            <Pagination pages={pagesCompleted} page={pageCompleted} setPage={setPageCompleted} />
                                        </div>
                                        : <div></div>}
                                </div>
                                : <div>
                                    <img style={{ width: 300, height: 300, marginLeft: 790 }} src={require("../../assets/images/Other/DVD.png")} />
                                    <h1 className={cx("sold-out")} style={{ zindex: '1', marginLeft: 700, height: 500 }}>There are no beats</h1>
                                </div>
                            }

                        </CustomTabPanel>
                        {/* Canceled */}
                        <CustomTabPanel value={value} index={6}>
                            {listOrderBeatCanceled.length !== 0 ?
                                <div style={{ height: 1350 }}>
                                    <div className={cx("listbeat")}>
                                        {listOrderBeatCanceled.map((item) => {
                                            return (
                                                <ListOrderBox id={item.id} beatName={item.beatName} cusName={item.userRequest.fullName} msName={item.musician.fullName} date={item.creatAt} />
                                            )
                                        })}
                                    </div>
                                    {pagesCanceled !== 1 ?
                                        <div className={cx("pagination")}>
                                            <Pagination pages={pagesCanceled} page={pageCanceled} setPage={setPageCanceled} />
                                        </div>
                                        : <div></div>}
                                </div>
                                : <div>
                                    <img style={{ width: 300, height: 300, marginLeft: 790 }} src={require("../../assets/images/Other/DVD.png")} />
                                    <h1 className={cx("sold-out")} style={{ zindex: '1', marginLeft: 700, height: 500 }}>There are no beats</h1>
                                </div>
                            }

                        </CustomTabPanel>
                    </Box>
                </div>
            </div>
        );
    }
    else {
        return (
            <NotFound />
        )
    }
}