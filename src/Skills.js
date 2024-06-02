import Skill from "./Skill";
import "./Skills.css";

function Skills(){
    return(
        <section className="Skills">
            <h1>Skills</h1>
            <div className="skills-container">
                <Skill text="Java" />
                <Skill text="Springboot" />
                <Skill text="DSA" />
                <Skill text="MySQL" />
                <Skill text="JavaScript" />
                <Skill text="Python" />
                <Skill text="HTML" />
                <Skill text="CSS" />
                <Skill text="React" />
                <Skill text="Data Analysis" />
                <Skill text="Shell Scripting" />
                <Skill text="Web Development" />
                <Skill text="OOPS" />
            </div>
        </section>
    );
}

export default Skills;