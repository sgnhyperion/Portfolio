import Section from "./Section";

function Navbar(){
    return(
        <div>
            <span>Harsh Kumar</span>
            <Section sec="#Home" text = "Home" />
            <Section sec="#About" text = "About" />
            <Section sec="#Skills" text = "Skills" />
            <Section sec="#Projects" text = "Projects" />
            <Section sec="#Contacts" text = "Contact" />
            <Section sec="#Resume" text = "Resume" />
        </div>
    );
}

export default Navbar;