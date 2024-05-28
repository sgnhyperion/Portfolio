function Project({text,projectLink,link}){  
    return(
        <div>
            <h3>{text}</h3>
            <a href={projectLink}><img src = {link} alt="text" /></a>
        </div>
    )
}

export default Project;