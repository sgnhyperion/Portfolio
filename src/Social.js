import './Social.css';

function Social({imglink,link,text}){
    return(
        <span>
            <a href={link}><img src={imglink} height="50" width="50" alt="text"  id="socialImage"/></a>
        </span>
    );
}

export default Social;