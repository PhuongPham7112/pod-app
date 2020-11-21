import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import search from './images/search-discussions.JPG';
import respond from './images/respond-to.JPG';
import record from './images/record-and-upload.JPG';
import follow from './images/follow-others.JPG';
import { GridList } from '@material-ui/core';
import './App.css';

const Features = () =>
{
    return(
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs><img className="feature" src={search} /></Grid>
            <Grid item xs><img className="feature" src={respond} /></Grid>
            <Grid item xs><img className="feature" src={record} /></Grid>
            <Grid item xs><img className="feature" src={follow} /></Grid>
        </Grid>
    )
}

export default Features;