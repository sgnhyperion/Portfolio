import Social from "./Social";
import './Socials.css';

function Socials(){
    return(
        <div className="Socials">
            <Social link="https://github.com/sgnhyperion" imglink="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU=s48-rw" text="Github" />

            <Social link="https://www.instagram.com/_h_arshhh/" imglink="https://s.widget-club.com/samples/eMvtWKTf1EUN3i25YRxRL1RpzDl1/mIHY4USntVKPIvulZxV4/4BA0CA01-39B5-4F9D-9F4E-2B1BB57F9493.jpg?q=70" text="Instagram" />

            <Social link="https://www.linkedin.com/in/harsh-kumar-125b09242/" imglink="https://i.pinimg.com/564x/78/8e/7e/788e7ea4b78068d5419c07a6e3df3053.jpg" text="LinkedIn" />

            <Social link="#" imglink="https://img.freepik.com/free-vector/new-twitter-logo-x-icon-black-background_1017-45427.jpg?t=st=1716928040~exp=1716931640~hmac=5a51ce5a77223ddd994f33c842c952c054b5f845a2081e838a72b29e2d5e6063&w=740" text="Twitter" />

            <Social link="https://hashnode.com/@Bersek" imglink="https://cdn.hashnode.com/res/hashnode/image/upload/v1673967878227/HM38JeFGm.jpg?w=500&h=500&fit=crop&crop=faces&auto=compress,format&format=webp" text="HashNode" />
        </div>
    );
}

export default Socials;