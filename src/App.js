import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';

function App() {
  return (
    <div className="App">
      <div class="Container">
        <Navbar />
        <br></br>
        <Home />
        <br></br>
        <About />
        <br></br>
        <Skills />
      </div>
    </div>
  );
}

export default App;
