function Social({imglink},{link}){
    return(
        <span>
            <a href={link}><img src={imglink} height="50" width="50" /></a>
        </span>
    );
}

export default Social;