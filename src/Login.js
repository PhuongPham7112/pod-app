import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import './App.css';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAeA6mh-ovzpwCjwbQkIlnLgU9UPygXIFo",
    authDomain: "podlandingpage.firebaseapp.com",
    databaseURL: "https://podlandingpage.firebaseio.com",
    projectId: "podlandingpage",
    storageBucket: "podlandingpage.appspot.com",
    messagingSenderId: "124172634438",
    appId: "1:124172634438:web:e9a425f4d193127804fd47",
    measurementId: "G-MS2PJSJQ82"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  function Login()
    {
        return (
            <div style={{display:"flex", flexDirection:"column"}}>
                    <TextField id="email" label="Email" variant="outlined" style={{margin: "2px"}}/>
                    <TextField type="password" id="password" label="Password" variant="outlined" style={{margin:"2px"}}/>
                    <Button onClick={()=>OnSignIn()}variant="outlined" color="primary" size = "large" style={{margin:"2px"}}>
                        Sign Up
                    </Button>
                    <Button color="primary" size = "small" style={{margin:"2px"}}>Log In</Button>
            </div>
    )}

function OnSignIn()
{
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log(email);
    console.log(password);

    firebase.auth().createUserWithEmailAndPassword(email, password).then(e=>console.log(e)).catch(function(error) {
    });
}

function OnLogIn()
{
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    console.log("LOGIN:" + email);
    console.log("PASSWORD:"+password);

    firebase.auth().signInWithEmailAndPassword(email, password).then(e=>console.log(e)).catch(function(error) {
    });
}

export default Login;