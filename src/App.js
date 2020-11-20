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
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <div>
            <PodLanding />
        </div>
        <div>
          <WhyPod />
        </div>
        <div>
            <OurMission />
        </div>
        <Footer />
      </header>
    </div>
  );
}

export default App;
