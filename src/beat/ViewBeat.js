import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


function ViewBeat() {
  const {id} = useParams()
  const [beats, setBeats] = useState([])
  const [deleteMessage, setDeleteMessage] = useState()
  
  React.useEffect(() => {
    loadBeats()
  })

  const loadBeats = async() => {
    fetch("http://localhost:8080/beat/getAll")
    .then(res => res.json())
    .then((res) => {
      setBeats(res)
    })
    .catch((error) => {
      console.error(error)
    })
  }

  const deleteClick = async (id) => {
    fetch(`http://localhost:8080/beat/2`,{
      method: "DELETE",
    })
    .then((res) => {
      if(res.status === 404){
        setDeleteMessage('Something wrong (Can not delete this beat!)')
      }
      else{
        setDeleteMessage()
      }
    }, [id])

  }
  return (
    <Container>
      <h1>List of Beats</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">Beat Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">OrderID</TableCell>
              <TableCell align="center">Beat Sound</TableCell>
              <TableCell align="center">Action</TableCell>
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
                <TableCell align="center">{beat.beatName}</TableCell>
                <TableCell align="center">{beat.price}</TableCell>
                <TableCell align="center">{beat.orderID}</TableCell>
                <TableCell align="center">{beat.beatSound}</TableCell>
                <TableCell align="center">
                  <Button variant="outlined">Update</Button>
                  <Button variant="outlined" color='error' onClick={deleteClick}>Delete</Button>
                
                </TableCell>
              </TableRow>

            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <a href='CreateBeat'>Create Beat</a> <br />
      <a href='/'>Logout</a>
      <br/>
      {deleteMessage}
    </Container>
  )
}

export default ViewBeat