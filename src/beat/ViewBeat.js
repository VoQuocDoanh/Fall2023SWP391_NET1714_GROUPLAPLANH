import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

function ViewBeat() {
    const[beats,setBeats] = useState([])
    React.useEffect(()=>{
        fetch("http://localhost:8080/beat/getAll")
        .then(res=>res.json())
        .then((res) =>{
            setBeats(res)
        })
        .catch((error) => {
          console.error(error)
        })
    })
  return (
    <Container>
    <h1>List of Beats</h1>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Beat Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">OrderID</TableCell>
            <TableCell align="right">Beat Sound</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {beats.map(beat => (
            <TableRow
              key={beat.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {beat.id}
              </TableCell>
              <TableCell align="right">{beat.beatName}</TableCell>
              <TableCell align="right">{beat.price}</TableCell>
              <TableCell align="right">{beat.orderID}</TableCell>
              <TableCell align="right">{beat.beatSound}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <a href='CreateBeat'>Create Beat</a> <br/>
    <a href='/'>Logout</a>
    </Container>
  )
}

export default ViewBeat