import { Box, Button, Container, TextField } from '@mui/material';
import * as React from 'react';

function Login() {
  return (
export default function Login() {
    const [username,setUserName] = React.useState('')
    const [password,setPassword] = React.useState('')
    const [loginMessage,setLoginMessage] = React.useState('')
    const handleClick=(e)=>{
        if(!username || !password){
          alert("Please fill in all fields!");
          return;
        }
          e.preventDefault()
          const user ={username,password}
          console.log(user)
          fetch("http://localhost:8080/user/login",{
              method:"POST",
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify(user)
          }).then((res)=>{
              if(res.ok){
                return res.json()
              }
              else{
                setLoginMessage("Failed to Login!")
              }
          }).then((res)=>{
                if(res.message.includes('Not Match')){
                    setLoginMessage('Wrong username or password!')
                }else{
                    setLoginMessage('Login Successfully')      
                    window.location.href = "ViewBeat";            
                }
          })
      }
    return (
        <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="boxicons/css/boxicons.min.css" />
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/css/style.css" />
        <title>Ludiflex | Login &amp; Registration</title>
        <div className="wrapper">
          <nav className="nav">
            <div className="nav-logo">
              <p>My Chords</p>
            </div>
            <div className="nav-menu" id="navMenu">
              <ul>
                <li><a href="http://127.0.0.1:5501/index.html" className="link active">Home</a></li>
                <li><a href="http://127.0.0.1:5501/about.html" className="link">User</a></li>
                <li><a href="#" className="link">Page</a></li>
                <li><a href="http://127.0.0.1:5500/contact.html" className="link">Contact</a></li>
              </ul>
            </div>
            <div className="nav-button">
              <button className="btn white-btn" id="loginBtn" onclick="login()">Sign In</button>
              <button className="btn" id="registerBtn" onclick="register()">Sign up</button>
            </div>
            <div className="nav-menu-btn">
              <i className="bx bx-menu" onclick="myMenuFunction()" />
            </div>
          </nav>
          {/*--------------------------- Form box ---------------------------------*/}    
          <div className="form-box">
            {/*----------------- login form ------------------------*/}
            <div className="login-container" id="login">
              <div className="top">
                <span>Don't have an account? <a href="#" onclick="register()">Sign Up</a></span>
                <header>Login</header>
              </div>
              <div className="input-box">
                <input type="text" className="input-field" placeholder="Username or Email" />
                <i className="bx bx-user" />
              </div>
              <div className="input-box">
                <input type="password" className="input-field" placeholder="Password" />
                <i className="bx bx-lock-alt" />
              </div>
              <div className="input-box">
                <input type="submit" className="submit" defaultValue="Sign In" />
              </div>
              <div className="two-col">
                <div className="one">
                  <input type="checkbox" id="login-check" />
                  <label htmlFor="login-check"> Remember Me</label>
                </div>
                <div className="two">
                  <label><a href="#">Forgot password ?</a></label>
                </div>
              </div>
            </div>
            {/*----------------- registration form ------------------------*/}
            <div className="register-container" id="register">
              <div className="top">
                <span>Have an account? <a href="#" onclick="login()">Login</a></span>
                <header>Sign Up</header>
              </div>
              <div className="two-forms">
                <div className="input-box">
                  <input type="text" className="input-field" placeholder="Firstname" />
                  <i className="bx bx-user" />
                </div>
              </div>
              <div className="input-box">
                <input type="text" className="input-field" placeholder="Email" />
                <i className="bx bx-envelope" />
              </div>
              <div className="input-box">
                <input type="password" className="input-field" placeholder="Password" />
                <i className="bx bx-lock-alt" />
              </div>
              <div className="input-box">
                <input type="submit" className="submit" defaultValue="Register" />
              </div>
              <div className="two-col">
                <div className="one">
                  <input type="checkbox" id="register-check" />
                  <label htmlFor="register-check"> Remember Me</label>
                </div>
                <div className="two">
                  <label><a href="#">Terms &amp; conditions</a></label>
                </div>
              </div>
            </div>
          </div>
        </div>   
      </div>
    )
}
  )
}

export default Login