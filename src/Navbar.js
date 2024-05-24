import Section from "./Section";

function Navbar(){
    return(
        <div>
            <span>Harsh Kumar</span>
            <Section Sectionlink="#Home" text = "Home" />
            <Section Sectionlink="#About" text = "About" />
            <Section Sectionlink="#Skills" text = "Skills" />
            <Section Sectionlink="#Projects" text = "Projects" />
            <Section Sectionlink="#Contacts" text = "Contact" />
            <Section Sectionlink="#Resume" text = "Resume" />
        </div>
    );
}

export default Navbar;