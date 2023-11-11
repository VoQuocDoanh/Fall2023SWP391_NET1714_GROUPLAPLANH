import React, { useEffect, useState } from 'react'
import classNames from "classnames/bind"
import styles from "./ListBeatSoldOut.module.scss"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axiosInstance from '../../authorization/axiosInstance'
import useToken from '../../authorization/useToken'
import jwtDecode from 'jwt-decode'
import Pagination from '../../components/Pagination'
import CardBeatItem from "../../components/CardBeatItem";
import { useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)

function ListBeatSoldOut() {
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(1)
  const [beatSoldOut, setBeatSoldOut] = useState([])
  const [income, setIncome] = useState(0)
  const token = useToken()
  const navigate = useNavigate()
  let userId = ""
  if (token) {
    userId = jwtDecode(token).sub
  }

  useEffect(() => {
    loadBeatSoldOut()
  }, [page])

  useEffect(() => {
    loadIncome()
  }, [])

  const loadBeatSoldOut = async () => {
    if (!token) {
      navigate("/login")
      return
    }
    await axiosInstance.get(`http://localhost:8080/api/v1/beat/musician/bought/${userId}/${page}`)
      .then((res) => {
        setBeatSoldOut(res.data.dtoList)
        setPages(res.data.max)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const loadIncome = async () => {
    await axiosInstance.get(`http://localhost:8080/api/v1/beat/musician/beatSoldOut/income/${userId}`)
      .then((res) => {
        setIncome(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div style={{ marginTop: 100, marginBottom: 600, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "column" }}>
      <div style={{ margin: "0px" }} className={cx("text-header")} >
        <h1 style={{ margin: "0px" }} className={cx("text-welcome")}>
          My Beats Sold Out
        </h1>
      </div>
      
      <h1>Income: ${income}</h1>
      
      <section className={cx("shop-card")}>
        {/* Header */}




        {beatSoldOut.length !== 0 ?
          <div>

            <div className={cx("card-names")}>

              <table className={cx("table-frame")}>
                <tr>
                  <th className={cx("th-frame")}>PRODUCT</th>
                  <th className={cx("th-frame")}>DATE</th>
                  <th className={cx("th-frame")}>CUSTOMER</th>
                  <th className={cx("th-frame")}>PRICE</th>
                </tr>
              </table>
            </div>
            <div className={cx("list-card")}>


              {beatSoldOut.map((item) => {
                return (
                  <CardBeatItem
                    id={item.id}
                    name={item.beatName}
                    author={item.orderInformation.userId.fullName}
                    date={item.orderInformation.createAt}
                    price={item.price}
                    beatId={item.id}
                    
                  />
                );


              })}
            </div>
          </div> : <div>Your Beats are not sold out</div>}
      </section>
    </div>
  );
}

export default ListBeatSoldOut