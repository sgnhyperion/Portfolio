import './Section.css'
import { Link } from "react-router-dom";

function Section({text,sec}){
    return (
        <span class="section">
            <Link to={sec} id='link'>{text}</Link>
        </span>
    );
}

export default Section;