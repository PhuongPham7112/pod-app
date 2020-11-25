import './App.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';

const AppImages = () => {
    return (
      <div className="container">
        <Grid container direction="row" justify="center" alignItems="center"> 
          <Grid item lg={4}>
            <img src="/images/Reddit.png" className="logo" alt="Reddit"/>
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

          <hr style={{color: "#d3d3d3", width: "90%", marginTop: "5vh"}}></hr>
  
          <Grid container direction="row" justify="center" alignItems="center" style={{width: "100%"}}> 
            <Grid item lg={4}>
              <img  src="/images/Pod-logo.png" className="pod-logo" alt="Pod"/>
            </Grid>
            <Grid item lg={3}>
              <h2> Pod </h2>
              <ul className="description" style={{textAlign: "left"}}>
                <li>Community centered around certain topics</li>
                <li>Community-based podcasts</li>
                <li>Audio-based -- more authentic conversations</li>
                <li>Wide-variety of topics</li>
                <li>Podcasts organized by topic</li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }

  export default AppImages;