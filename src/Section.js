import './Section.css'

function Section({text,sec}){
    return (
        <span class="section">
            <a href={sec}>{text}</a>
        </span>
    );
}

export default Section;