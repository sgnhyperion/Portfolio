import Info from "./Info";
import Socials from "./Socials";

function Home(){
    return(
        <section id="Home">
            <h1>Home</h1>
            <img id="homeImg" src="https://vaheedshaik.tech/images/ar-profile-transformed.png" alt="Image logo" width="300" height="300"></img>
            <br></br>
            <Info text="Hi,my name is" />
            <br></br>
            <Info text="HARSH KUMAR" />
            <br></br>
            <Info text="I am Awesome" />
            <br></br>
            <Socials />
        </section>    
    );
}

export default Home;
