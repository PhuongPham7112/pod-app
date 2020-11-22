import React from 'react';
import ReactDOM from 'react-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './App.css';

const OurMission = () =>
{
    return(
        <div>
            <h1 className="sectionHeader"> Our Mission </h1>
            <body style={{display:"flex", alignItems:"center",justifyContent:"center", textAlign:"center", padding:"20px 0"}}>
                Our goal is to create a community where users may feel more connected with one another and experience their voices being heard. 
            </body>
        </div>
)}

export default OurMission;