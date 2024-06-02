import './Project.css';

function Project({text,projectLink,link}){  
    return(
        <div className="project-container">
            <h3>{text}</h3>
            <a href={projectLink}><img src = {link} alt="text"/></a>
        </div>
    )
}

export default Project;