import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';

export default function Student() {
    const[username,setUserName]=React.useState('')
    const[pass,setPass]=React.useState('')
    const[mail,setMail]=React.useState('')
    const[fullName,setFullName]=React.useState('')
    
    const handleClick=(e)=>{
      if(!username || !pass || !mail || !fullName){
        alert("Please fill in all fields!");
        return;
      }
        e.preventDefault()
        const user ={username,pass,mail,fullName}
        console.log(user)
        fetch("http://localhost:8080/user/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        }).then(()=>{
            console.log("New User has been added")
        })
    }



  return (
    <Container>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="User Name" variant="outlined" fullWidth value={username} onChange={(e)=>setUserName(e.target.value)}  />
      <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth value={pass} onChange={(e)=>setPass(e.target.value)}/>
      <TextField id="standard-basic" label="Mail" variant="outlined" fullWidth value={mail} onChange={(e)=>setMail(e.target.value)}/>
      <TextField id="standard-basic" label="Full Name" variant="outlined" fullWidth value={fullName} onChange={(e)=>setFullName(e.target.value)}/>
      <Button variant="contained" onClick={handleClick}>Submit</Button>
    </Box>


    </Container>

  );
}
