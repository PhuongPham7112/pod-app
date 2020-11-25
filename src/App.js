import './App.css';
import React from 'react';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import AppImages from './AppImages.js';

const Title = (props) => {
  return (
    <div style={{backgroundColor: "#c9aae8", color: "black", margin: "5vh", width: "100%", fontSize: "2rem"}}> 
      <h1> {props.title} </h1>
    </div>
  )
}

const Links = () => {
  return (
    <ul className="link-list">
      <li className="link"><a href="https://www.youtube.com/watch?v=olRi5-AOn1A"> Features </a></li>
      <li className="link"><a href="https://www.youtube.com/watch?v=g2mLOVHZ2u4"> Subscribe </a></li>
      <li className="link"><a href="https://www.youtube.com/watch?v=xuCn8ux2gbs"> Contacts </a></li>
      <li className="link" style={{color: "black"}}>© 2020 Pod Co. All rights reserved</li>
    </ul>
  )
}

const useStyles = makeStyles({
  root: {
    background: '#c9aae8',
    border: 0,
    color: 'black',
    height: 48,
    padding: '0 30px',
  },
  label: {
    textTransform: 'capitalize',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <Title title="How Does Pod Differ From Other Platforms? "/>
        <AppImages/>
        <Button className="button" classes={{
        root: classes.root, 
        label: classes.label,}}> 
          Subscribe to our mail list! 
        </Button>
        <Title title="Meet the Team"/>
        <img src="/images/team.png" className="team-image" alt=""/>
        <Box marginTop={5} marginBottom={5}>
          <Button className="button" classes={{
          root: classes.root, 
          label: classes.label,}}> 
            Request pitch deck from us 
          </Button>
        </Box>
        <Links/>
      </header>
    </div>
  );
}

export default App;
