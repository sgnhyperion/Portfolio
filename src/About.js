// import Info from "./Info";
import Interest from "./Interest";
import './About.css'

function About(){
    return(
        <section id="About">
            {/* <h1>About</h1> */}
            <div className="about1">
                

            <span><img src="https://images.immediate.co.uk/production/volatile/sites/3/2020/09/the-batman-robert-pattinson-1-ac6949e-e1646825975650.jpg?quality=90&webp=true&resize=618,412" alt="my photo" height="250px" width="250px"></img></span>
            
            <div id="bio">
            <p>Hey there</p>
            <p>Enthusiastic and dedicated Computer Science student with a passion for software development and problem-solving. Currently pursuing a Bachelor's degree in ComputerScience.foundationand contributeeffectively Eager hands-on in to leverage project the field academic experience of to software engineering or related areas.</p> 
            
            </div>
            </div>
            <br></br>
            <p>Interests</p>
            <Interest text="Software Engineering" />
            <Interest text="Science" />
            <Interest text="Astronomy" />
            <Interest text="Cricket" />
            <Interest text="Martial Arts" />
            <Interest text="Movies & Web Series" />
        </section>
    );
}

export default About;