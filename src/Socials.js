import Social from "./Social";
import './Socials.css';

function Socials(){
    return(
        <div className="Socials">
            <Social link="https://github.com/sgnhyperion" imglink="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU=s48-rw" text="Github" />

            <Social link="https://www.instagram.com/_h_arshhh/" imglink="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/6a/69/6d/6a696d01-3046-ff05-dd32-4671840c4072/Prod-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp" text="Instagram" />

            <Social link="https://www.linkedin.com/in/harsh-kumar-125b09242/" imglink="https://pbs.twimg.com/profile_images/1661161645857710081/6WtDIesg_400x400.png" text="LinkedIn" />

            <Social link="#" imglink="https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0-1.jpg" text="Twitter" />

            <Social link="https://hashnode.com/@Bersek" imglink="https://avatars.githubusercontent.com/u/16342708?s=200&v=4" text="HashNode" />
        </div>
    );
}

export default Socials;