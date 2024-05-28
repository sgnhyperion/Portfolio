import Section from "./Section";
import './Navbar.css';

function Navbar(){
    return(
        <div className="navbar">
            <span id="name">Harsh Kumar &lt;/&gt;</span>
            <div className="sections" >
                <Section sec="#Home" text = "Home" />
                <Section sec="#About" text = "About" />
                <Section sec="#Skills" text = "Skills" />
                <Section sec="#Projects" text = "Projects" />
                <Section sec="#contacts" text = "Contact" />
                <Section sec="#Resume" text = "Resume" />
            </div>
        </div>
    );
}

export default Navbar;