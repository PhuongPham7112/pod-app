import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Login from './Login.js';

function PodLanding()
    {
        return (
            <Grid>
                    <div style={{textAlign:"center", backgroundColor:"#ccbfff", color: "black"}}>
                        <h1 style={{padding:"0px"}}> Pod: </h1> 
                        <h2> Building Connection with Our Voices</h2>
                    </div>
                    <Grid container spacing={3}>
                        <Grid item xs>
                            An app for people to upload audio recordings to create discussions about topics they want to talk about in the moment. A platform for people to connect with each other on a deeper level by letting their voices show their authentic selves.
                        </Grid>
                        <Grid item xs>
                            <Login/>
                        </Grid>
                    </Grid>
            </Grid>
        )
    }

export default PodLanding;