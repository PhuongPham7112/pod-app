import logo from './logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import Navbar from './Navbar.js';
import PodLanding from './PodLanding.js';
import Login from './Login.js';
import Grid from '@material-ui/core/Grid';
import Footer from './Footer.js';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div style={{display:"inline-block"}}>
        <Grid container direction="row" justify="space-evenly" alignItems="center">
          <div>
            <PodLanding />
          </div>
          <div>
            <Login />
          </div>
        </Grid>
        </div>
        <Footer />
      </header>
    </div>
  );
}

export default App;
