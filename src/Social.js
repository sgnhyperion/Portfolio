function Social({imglink,link,text}){
    return(
        <span>
            <a href={link}><img src={imglink} height="50" width="50" alt="text"/></a>
        </span>
    );
}

export default Social;