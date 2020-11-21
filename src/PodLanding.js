import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Login from './Login.js';
import Features from './Features.js';

function PodLanding()
    {
        return (
            <Grid>
                    <div className="sectionHeader">
                        <h1> Building Connection with Our Voices</h1>
                    </div>
                    <Grid container spacing={3} style={{padding:"25px"}}>
                        <Grid item xs style={{fontSize:"20px"}}>
                            An app for people to upload audio recordings to create discussions about topics they want to talk about in the moment. A platform for people to connect with each other on a deeper level by letting their voices show their authentic selves.
                        </Grid>
                        <Grid item xs>
                            <Login/>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Features />
                    </Grid>
            </Grid>
        )
    }

export default PodLanding;