import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Login from './Login.js';

function PodLanding()
    {
        return (
            <div>
                <Grid style={{textAlign: "left", backgroundColor: "#bfd9ff", color: "black"}}>
                    <h2> Pod </h2> 
                    <body>
                        Pod is an app for people to upload audio recordings to create discussions about topics they want to talk about in the moment. It is a platform for people to connect with each other on a deeper level by letting their voices show their authentic selves.
                    </body>
                </Grid>
            </div>
        )
    }

export default PodLanding;