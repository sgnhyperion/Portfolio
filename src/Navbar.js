import Section from "./Section";
import './Navbar.css';

function Navbar(){
    return(
        <div className="navbar">
            <span id="name"> Harsh Kumar &lt;/&gt;</span>
            <nav className="sections" >
                <Section sec="/" text = "Home" />
                <Section sec="/About" text = "About" />
                <Section sec="/Skills" text = "Skills" />
                <Section sec="/Projects" text = "Projects" />
                <Section sec="/contacts" text = "Contact" />
                <a href= "https://drive.google.com/file/d/1RbtDvWRnpNbOeUhtnpfb3OeZJMhwgUCf/view?usp=sharing" target="_blank" rel="noreferrer" id="resume">Resume</a>
            </nav>
        </div>
    );
}

export default Navbar;