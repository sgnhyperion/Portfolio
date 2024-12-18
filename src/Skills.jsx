import Skill from "./Skill";
import "./Skills.css";
import { FaJava } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";
import { TbBulb } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import { BsClipboardDataFill } from "react-icons/bs";
import { ImTerminal } from "react-icons/im";
import { TbBrandVscode } from "react-icons/tb";
import { FaFistRaised } from "react-icons/fa";
import { GiSpiderWeb } from "react-icons/gi";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";

function Skills() {
  return (
    <section className="Skills">
      <h1>Skills</h1>
      <div className="skills-container">
        <div className="skill-board">
            <FaJava id="skill-icon"/>
          <Skill text="Java" />
        </div>

        <div className="skill-board">
        <BiLogoSpringBoot id="skill-icon"/>
          <Skill text="Springboot" />
        </div>

        <div className="skill-board">
        <TbBulb id="skill-icon"/>
          <Skill text="DSA" />
        </div>

        <div className="skill-board">
        <SiMysql id="skill-icon"/>
          <Skill text="MySQL" />
        </div>

        <div className="skill-board">
        <TbBrandJavascript id="skill-icon"/>
          <Skill text="JavaScript" />
        </div>

        <div className="skill-board">
        <FaPython id="skill-icon"/>
          <Skill text="Python" />
        </div>

        <div className="skill-board">
        <FaHtml5 id="skill-icon"/>
          <Skill text="HTML" />
        </div>

        <div className="skill-board">
        <IoLogoCss3 id="skill-icon"/>
          <Skill text="CSS" />
        </div>

        <div className="skill-board">
        <GrReactjs id="skill-icon"/>
          <Skill text="React" />
        </div>

        <div className="skill-board">
        <BsClipboardDataFill id="skill-icon"/>
          <Skill text="Data Analysis" />
        </div>

        <div className="skill-board">
        <ImTerminal id="skill-icon"/>
          <Skill text="Shell Scripting" />
        </div>

        <div className="skill-board">
        <TbBrandVscode id="skill-icon"/>
          <Skill text="Web Development" />
        </div>

        <div className="skill-board">
        <GiSpiderWeb id="skill-icon"/>
          <Skill text="Web Scraping" />
        </div>

        <div className="skill-board">
        <SiExpress id="skill-icon"/>
          <Skill text="ExpressJs" />
        </div>

        <div className="skill-board">
        <FaNodeJs id="skill-icon"/>
          <Skill text="NodeJs" />
        </div>

        <div className="skill-board">
        <SiMongodb id="skill-icon"/>
          <Skill text="MongoDB" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
