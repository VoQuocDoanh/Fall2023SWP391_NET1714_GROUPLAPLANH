import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'


function ViewBeat() {
  const [beats, setBeats] = useState([])
  const [deleteMessage, setDeleteMessage] = useState()
  
  React.useEffect(() => {
    loadBeats()
  }, [])

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

  const deleteBeat = (id) => {
    fetch(`http://localhost:8080/beat/${id}`,{
      method: "DELETE",
    })
    .then((res) => {
      if(res.status === 404){
        setDeleteMessage('Something wrong (Can not delete this beat!)')
      }
      else{
        setDeleteMessage()
        window.location.href = "ViewBeat"
      }
    })

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
              <TableCell align="center">Beat Sound</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {beats.map((beat,index) => (

              <TableRow>
                <TableCell key={index} component="th" scope="row">                  
                {index + 1 }
                </TableCell>
                <TableCell align="center">{beat.beatName}</TableCell>
                <TableCell align="center">{beat.price}</TableCell>
                <TableCell align="center">{beat.beatSound}</TableCell>
                <TableCell align="center">
                  <Button variant="outlined" href='UpdateBeat/${beat.id}' >Update</Button>
                  <Button variant="outlined" color='error' onClick={() => deleteBeat(beat.id)}>Delete</Button>
                
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