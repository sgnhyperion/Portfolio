import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects.js';
import Contacts from './Contacts.js';

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
        <br></br>
        <Projects />
        <br></br>
        <Contacts />
      </div>
    </div>
  );
}

export default App;
