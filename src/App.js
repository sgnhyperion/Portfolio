import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects.js';
import Contacts from './Contacts.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import ParticlesBackground from './ParticlesBackground.js';

function App() {
  return (


    <Router>
    <div className="App">
        <div class="Container">
        <Navbar />
        <br></br>
        {/* <Home />
        <br></br>
        <About />
        <br></br>
        <Skills />
        <br></br>
        <Projects />
        <br></br>
        <Contacts /> */}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Skills" element={<Skills />} />
                <Route path="/Projects" element={<Projects />}/>
                <Route path="/Contacts" element={<Contacts />}/>
            </Routes>
      </div>
    </div>
        </Router>
  );
}

export default App;
