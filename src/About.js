// import Info from "./Info";
import Interest from "./Interest";
import "./About.css";
import { TbBracketsAngleOff } from "react-icons/tb";
import { GiMaterialsScience } from "react-icons/gi";
import { GiSpaceSuit } from "react-icons/gi";
import { BiCricketBall } from "react-icons/bi";
import { PiBoxingGloveDuotone } from "react-icons/pi";
import { PiTelevisionFill } from "react-icons/pi";

function About() {
  return (
    <section id="About">
      {/* <h1>About</h1> */}
      <div className="about1">
        <div id="bio">
          <h2> 👋 Hey there </h2>
          <p>
            I'm Harsh, a passionate software developer. I specialize in Web
            Development, crafting seamless user experiences and robust backend
            solutions. With a knack for problem-solving, I thrive on creating
            elegant code that makes an impact. I'm always exploring new tools
            and techniques to stay at the forefront of the ever-evolving tech
            landscape.
            <br></br>
            <br></br>
            📫 Open to collaborations and exciting projects, I'm eager to
            connect with fellow developers and tech enthusiasts. Let's build
            something amazing together! Happy coding! 🖥️
          </p>
        </div>
      </div>

      <h2 id="interests-heading">Interests</h2>

      <div className="interests">
        <div id="interest-container">
          <TbBracketsAngleOff id="icon" />
          <Interest text="Software Engineering" />
        </div>
        <div id="interest-container">
          <GiMaterialsScience id="icon" /> <Interest text=" Science" />
        </div>
        <div id="interest-container">
          <GiSpaceSuit id="icon" /> <Interest text="Astronomy" />
        </div>
        <div id="interest-container">
          <BiCricketBall id="icon" />
          <Interest text="Cricket" />
        </div>
        <div id="interest-container">
          <PiBoxingGloveDuotone id="icon" /> <Interest text="Martial Arts" />
        </div>
        <div id="interest-container">
          <PiTelevisionFill id="icon" /> <Interest text="Movies & Web Series" />
        </div>
      </div>
    </section>
  );
}

export default About;
