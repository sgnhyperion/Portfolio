import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects.js";
import Contacts from "./Contacts.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import FireflyEffect from "./FireflyEffect.jsx";
// import { motion } from "framer-motion"


function App() {
  
 
  return (
    <Router>
      <div className="App">
      <FireflyEffect />
        <div class="Container">
          <Navbar />
          <br></br>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contacts" element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
