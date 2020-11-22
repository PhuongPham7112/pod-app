import logo from './logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import Navbar from './Navbar.js';
import PodLanding from './PodLanding.js';
import Login from './Login.js';
import Grid from '@material-ui/core/Grid';
import Footer from './Footer.js';
import './index.css';
import WhyPod from './WhyPod.js';
import OurMission from './OurMission.js';


function App() {
  return (
    <div className="App" style={{scrollBehavior: "smooth"}}>
      <header className="App-header">
        <Grid style={{backgroundColor: "#5d49ab", color:"white", width:"100%",  position:"fixed",top:"0"}}>
          <ul style={{listStyleType: "none", fontSize:"18px", display:"flex", whiteSpace:"nowrap", justifyContent:"space-evenly", height: "10px", padding: "0px"}}>
            <li> <a href="#whatIsPod">PodCo</a></li>
            <li> <a href="#whyPod">Why Pod?</a> </li>
            <li> <a href="#ourMission">Our Mission</a> </li>
          </ul>
        </Grid>
        <div>
            <a name="whatIsPod" style={{visibility: "hidden"}}></a>
            <PodLanding />
        </div>
        <div>
          <a name="whyPod" style={{visibility: "hidden"}}></a>
          <WhyPod />
        </div>
        <div>
            <a name="ourMission" style={{visibility: "hidden"}}></a>
            <OurMission />
        </div>
        <Footer />
      </header>
    </div>
  );
}

export default App;
