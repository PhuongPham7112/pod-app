import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

function OnClick()
{
    
}

function Login()
    {
        return (
            <div style={{backgroundColor:"#ccbfff", textAlign:"right", width: "45%"}}>
                <Container>
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                    <Button variant="outlined" color="primary" size = "large">
                        Sign Up
                    </Button>
                    <Button color="primary" size = "small">Log In</Button>
                </Container>
            </div>
    )}

export default Login;