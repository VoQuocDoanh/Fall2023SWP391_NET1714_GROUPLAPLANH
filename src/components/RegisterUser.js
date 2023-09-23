import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container} from '@mui/material';
import Button from '@mui/material/Button';


export default function RegisterUser() {
    const [username, setUserName] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [mail, setMail] = React.useState('')
    const [roleID, setRoleID] = React.useState('Customer')
    const status = 1
    const [fullName, setFullName] = React.useState('')
    const [loginMessage, setLoginMessage] = React.useState('')

    

    const handleClick = (e) => {
        if (!username || !pass || !mail || !fullName || !roleID || !status) {
            alert("Please fill in all fields!");
            return;
        }
        e.preventDefault()
        const user = { username, pass, mail, fullName, roleID, status }
        console.log(user)
        fetch("http://localhost:8080/user/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user) //Chuyen tu file text sang JSON
        })

            //res.json() la 1 ham tra ve 1 file text cho cai then tiep theo dung
            //.then luon se tra ve 1 gia tri gi do cho .then ke tiep dung
            .then((res) => {
                if (res.ok) {
                    return res.json()  //Chuyen tu JSON sang text                                 
                } else {
                    setLoginMessage('Failed to Resgiter!')
                }
            })
            .then((res) => {
                if (res.message.includes('duplicated')) {
                    setLoginMessage('Please input again! (Duplicated username)')
                } else {
                    setLoginMessage()
                    window.location.href="Login"
                }
            })
            .catch((error) => {
                // Handle the error
                console.error(error);
            });
    }



    return (
        <Container>
            <h1>Register Form</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <TextField id="username" label="User Name" variant="outlined" fullWidth value={username} onChange={(e) => setUserName(e.target.value)} />
                <TextField id="pass" label="Password" variant="outlined" fullWidth value={pass} onChange={(e) => setPass(e.target.value)} />
                <TextField id="mail" label="Mail" variant="outlined" fullWidth value={mail} onChange={(e) => setMail(e.target.value)} />
                <TextField id="fullName" label="Full Name" variant="outlined" fullWidth value={fullName} onChange={(e) => setFullName(e.target.value)} /> <br></br>
                <select value={roleID} onChange={(e) => setRoleID(e.target.value)}>
                    <option value="Customer">Customer</option>
                    <option value="Musician">Musician</option>
                </select>
                <br></br>
                <Button variant="contained" onClick={handleClick}>Submit</Button>
            </Box>
            <div>{loginMessage}</div>


        </Container>

    );
}
