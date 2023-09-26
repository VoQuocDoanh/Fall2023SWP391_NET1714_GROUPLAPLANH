import { Box, Button, Container, TextField } from '@mui/material';
import * as React from 'react';

function Login() {
  const [username, setUserName] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loginMessage, setLoginMessage] = React.useState('')
  const handleClick = (e) => {
    if (!username || !password) {
      alert("Please fill in all fields!");
      return;
    }
    e.preventDefault()
    const user = { username, password }
    console.log(user)
    fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }).then((res) => {
      if (res.ok) {
        return res.json()
      }
      else {
        setLoginMessage("Failed to Login!")
      }
    }).then((res) => {
      if (res.message.includes('Not Match')) {
        setLoginMessage('Wrong username or password!')
      } else {
        setLoginMessage('Login Successfully')
        window.location.href = "ViewBeat";
      }
    })
  }
  return (
    <Container>
            <h3>Login Form</h3>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="User Name" variant="outlined" fullWidth value={username} onChange={(e) => setUserName(e.target.value)} />
                <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
                <Button variant="contained" onClick={handleClick}>Login</Button>
            </Box>
            <div>{loginMessage}</div>
            <a href='Register'>Register User</a>


        </Container>
  )
}

export default Login