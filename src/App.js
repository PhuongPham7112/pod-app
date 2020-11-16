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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div stye={{margin: "5px"}}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <PodLanding />
            </Grid>
            <Grid item xs={6}>
              <Login />
            </Grid>
            <Grid item xs={12}>
              <WhyPod />
            </Grid>
          </Grid>
        </div>
        <Footer />
      </header>
    </div>
  );
}

export default App;
