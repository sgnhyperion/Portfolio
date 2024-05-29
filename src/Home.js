// import Info from "./Info";
import Socials from "./Socials";
import './Home.css'
import Typewriter from "./Typewriter";

function Home(){


    return(
        <section id="Home">
            <img id="homeImg" src="https://vaheedshaik.tech/images/ar-profile-transformed.png" alt="Image logo" width="250" height="250"></img>
            <br></br>
            <h2 id="hi">Hi, my name is </h2>
            <br></br>
            <h1 id="myname">HARSH KUMAR</h1>
            <br></br>
            <div>
            <Typewriter text={[
                "Awesome",
                "Software Developer",
                "Mern Stack Developer"
                ]}
                typingSpeed={100}
                deletingSpeed={50}
                duration={1000}
                />
                <br></br>
            </div>
            <br></br>
            <Socials />
        </section>    
    );
}

export default Home;
