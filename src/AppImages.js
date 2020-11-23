import './App.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';

const AppImages = () => {
    return (
      <div className="container">
        <Grid container spacing={4} direction="row" justify="center" alignItems="center"> 
          <Grid item lg={4}>
            <img src="/images/reddit.webp" className="logo" alt="Reddit"/>
            <h2> Reddit </h2>
            <p className="description"> Pros: Communities centered around certain topics </p>
            <p className="description"> Cons: Text based -- barrier to authentic conversations </p>
          </Grid>
  
          <Grid item lg={4}>
            <img src="/images/Spoon_Logo.png" className="logo" alt="Spoon"/>
            <h2> Spoon </h2>
            <p className="description"> Pros: Community-based podcasts </p>
            <p className="description"> Cons: Difficult to find relevant podcasts </p>
          </Grid>
  
          <Grid item lg={4}>
            <img src="/images/twitch.jpg" className="logo" alt="Twitch"/>
            <h2> Twitch </h2>
            <p className="description"> Pros: Live-streaming content </p>
            <p className="description"> Cons: Few topics outside of gaming </p>
          </Grid>
  
          <Grid container spacing={10} direction="row" justify="center" alignItems="center"> 
            <Grid item lg={3}>
              <img  src="/images/Pod-logo.png" className="pod-logo" alt="Pod"/>
            </Grid>
            <Grid item lg={3}>
              <h2> Pod </h2>
              <p className="description"> 
              Community centered around certain topics. Community-based podcasts. Audio-based -- more authentic conversations. Wide-variety of topics. Podcasts organized by topic
              </p>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }

  export default AppImages;