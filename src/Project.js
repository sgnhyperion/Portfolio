import './Project.css';
import { useRef, useState, useEffect } from 'react';

function Project({text,projectLink,link}){  
    // const [isActive, setIsActive] = useState(false); // State to manage class condition
    const divRef = useRef(null); // Reference to the DOM element
  
    // let showDetails = () => {
    //     let detail = document.createElement("div");
    //     detail.className = "project-details";
    //     detail.innerHTML = "Click to view project";
    //     divRef.current.appendChild(detail);
    //     setIsActive(true);
    // }

    // let removeDetails = () => {
    //     if(isActive){
    //         document.querySelector(".project-details").remove();
    //         setIsActive(false);
    //     }
    // }

    return(
        <div className="project-container" /*ref={divRef} onMouseOver={showDetails} onMouseLeave={removeDetails}*/>
            <h3>{text}</h3>
            <a href={projectLink} target="_blank"><img src = {link} alt="text"/></a>
        </div>
    )
}

export default Project;