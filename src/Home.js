// import Info from "./Info";
import Socials from "./Socials";
import './Home.css'

function Home(){
    return(
        <section id="Home">
            <img id="homeImg" src="https://vaheedshaik.tech/images/ar-profile-transformed.png" alt="Image logo" width="250" height="250"></img>
            <br></br>
            <h2 id="hi">Hi, my name is </h2>
            <br></br>
            <h1 id="myname">HARSH KUMAR</h1>
            <br></br>
            <div id="iamawesome"><span id="iam">I am</span> <span id="awesome">Awesome</span></div>
            <br></br>
            <Socials />
        </section>    
    );
}

export default Home;
