import logo from './logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import Navbar from './Navbar.js';
import PodLanding from './PodLanding.js';
import Login from './Login.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          This is my testing text!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Navbar />
        <Container>
          <PodLanding />
          <Login />
        </Container>
        
      </header>
    </div>
  );
}

export default App;
