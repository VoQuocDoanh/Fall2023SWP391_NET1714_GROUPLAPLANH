import { Box, Button, Container, TextField } from '@mui/material'
import React, { useState } from 'react'

function CreateBeat() {
    const[beatName,setBeatName] = useState('')
    const[price,setPrice] = useState('')
    const[beatSound,setBeatSound] = useState('')
    const[username,setUserName] = useState('')
    const[insertBeatMessage,setInsertBeatMessage] = useState('')
    const status = 1
    const orderID = ""

    const handleClick = (e) => {
        if (!beatName || !price || !beatSound || !status || !username) {
            alert("Please fill in all fields!");
            return;
        }
        e.preventDefault()
        const beat = {beatName, price, orderID, beatSound, username}
        fetch("http://localhost:8080/beat/insertBeat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(beat) 
        })
            .then((res) => {
                if (res.status !== 501) {
                    window.location.href = "viewBeat"                              
                } else {
                    setInsertBeatMessage('User Name is not exist!')
                    
                }
            })
            .catch((error) => {
                // Handle the error
                console.error(error);
            });
    }

  return (
    <Container>
            <h1>Insert Beat</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <TextField id="beatname" label="Beat Name" variant="outlined" fullWidth value={beatName} onChange={(e) => setBeatName(e.target.value)} />
                <TextField id="price" label="price" variant="outlined" fullWidth value={price} onChange={(e) => setPrice(e.target.value)} />
                <TextField id="beatsound" label="Beat Sound" variant="outlined" fullWidth value={beatSound} onChange={(e) => setBeatSound(e.target.value)} /> 
                <TextField id="username" label="User Name" variant="outlined" fullWidth value={username} onChange={(e) => setUserName(e.target.value)} /><br></br>
                <br></br>
                <Button variant="contained" onClick={handleClick}>Submit</Button>
            </Box>
            <div>{insertBeatMessage}</div>


        </Container>
  )
}

export default CreateBeat