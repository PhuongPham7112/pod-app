import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

function OnSignIn()
{
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log(email);
    console.log(password);
}

function Login()
    {
        return (
            <div style={{backgroundColor:"#ccbfff",padding: "82px 0px", margin: "25px 0px"}}>
                <Container>
                    <TextField id="email" label="Email" variant="outlined" style={{margin: "2px"}}/>
                    <TextField id="password" label="Password" variant="outlined" style={{margin:"2px"}}/>
                    <Button onClick={()=>OnSignIn()}variant="outlined" color="primary" size = "large" style={{margin:"2px"}}>
                        Sign Up
                    </Button>
                    <Button color="primary" size = "small" style={{margin:"2px"}}>Log In</Button>
                </Container>
            </div>
    )}

export default Login;