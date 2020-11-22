import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';

function Navbar()
    {
        return (
            <Grid style={{backgroundColor: "#5d49ab", color:"white", width:"100%",  position:"fixed",top:"0"}}>
                <ul style={{listStyleType: "none", fontSize:"18px", display:"flex", whiteSpace:"nowrap", justifyContent:"space-evenly", height: "10px", padding: "0px"}}>
                    <li> <a href="whatIsPod">PodCo</a></li>
                    <li> <a href="whyPod">Why Pod?</a> </li>
                    <li> <a href="ourMission">Our Mission</a> </li>
                </ul>
            </Grid>
        )
    }

export default Navbar;