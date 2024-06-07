// import Info from "./Info";
import Socials from "./Socials";
import './Home.css'
import Typewriter from "./Typewriter";

function Home(){


    return(
        <section id="Home">
            <img id="homeImg" src="https://pics.craiyon.com/2023-10-28/22528cc76e05479c8a48718f47a2de23.webp" alt="Image logo" width="250" height="250" loading="priority "></img>
            <h2 id="hi">Hi, my name is </h2>
            <h1 id="myname">HARSH KUMAR SINGH</h1>
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
            </div>
            <Socials />
        </section>    
    );
}

export default Home;
