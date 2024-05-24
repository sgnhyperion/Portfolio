import Info from "./Info";
import Interest from "./Interest";

function About(){
    return(
        <section id="About">
            <h1>About</h1>
            <span><img src="#" alt="my photo"></img></span>
            <div>
            <Info text="Hey there" />
            <br></br>
            <br></br>
            <Info text="Enthusiastic and dedicated Computer Science student with a passion for software development and problem-solving. Currently pursuing a Bachelor's degree in ComputerScience.foundationand contributeeffectively Eager hands-on in to leverage project the field academic experience of to software engineering or related areas." />
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