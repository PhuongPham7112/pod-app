import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Login from './Login.js';

function PodLanding()
    {
        return (
            <div>
                    <div style={{textAlign:"center", backgroundColor:"#ccbfff", color: "black"}}>
                        <h1 style={{padding:"0px"}}> Pod: </h1> 
                        <h2> Building Connection with Our Voices</h2>
                    </div>
                    <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                    <body style={{textAlign:"center", width:"40%"}}>
                        An app for people to upload audio recordings to create discussions about topics they want to talk about in the moment. A platform for people to connect with each other on a deeper level by letting their voices show their authentic selves.
                    </body>

                    <Login style={{width:"45%"}}/>
                    </div>
            </div>
        )
    }

export default PodLanding;