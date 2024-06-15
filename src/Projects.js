import Project from "./Project";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
    let projects = [
        {
            projectLink:"https://github.com/sgnhyperion/ImageEditorproject",
            text:"Image Editor",
            link:"https://t3.ftcdn.net/jpg/06/06/79/70/360_F_606797008_rGPPk6bFWDQydnX7g7w1w9dVVZ4mD22J.jpg"
        },
        {
            projectLink:"https://sgnhyperion.github.io/MineSweeper/",
            text:"Mine Sweeper",
            link:"https://cdn.dribbble.com/userupload/12488481/file/original-caa3cce133f087293f8673eec3753f3f.jpeg?crop=0x347-1216x1259&resize=400x300&vertical=center"
        },
        {
            projectLink:"https://sgnhyperion.github.io/Scaler_social/",
            text:"Social App",
            link:"https://media.licdn.com/dms/image/D5612AQGWFgfL-CAOPQ/article-cover_image-shrink_720_1280/0/1713469794627?e=2147483647&v=beta&t=3U6uc7SAzRatjUZvCVt3n4mSFnyvriY5AsrPUE3EOX0"
        },
        {
            projectLink:"https://github.com/sgnhyperion/TicTacToe",
            text:"Tic Tac Toe",
            link:"https://codewithfaraz.com/img/build%20your%20own%20tic%20tac%20toe%20game%20with%20html,%20css,%20and%20javascript.jpg"
        },
        {
            projectLink:"https://github.com/sgnhyperion/LBMS",
            text:"Library Management System",
            link:"https://miro.medium.com/v2/resize:fit:720/format:webp/1*6Jp3vJWe7VFlFHZ9WhSJng.jpeg"
        },
        {
            projectLink:"https://github.com/sgnhyperion/Spring_ProductService",
            text:"Product Service",
            link:"https://corporatevisions.com/wp-content/uploads/2020/08/Products-vs.-Services-blog-image.jpg"
        },
        {
            projectLink:"https://github.com/sgnhyperion/QuizApp",
            text:"Quiz App",
            link:"https://viralsolutions.net/wp-content/uploads/2019/06/shutterstock_749036344.jpg"
        },
        {
            projectLink:"https://portfolio-ruddy-gamma-10.vercel.app/",
            text:"Portfolio",
            link:"https://media.darkstar-digital.com/wp-content/uploads/2017/03/18161012/portfolio.jpg.webp"
        }
    ]


  return (
    <section className="Projects">
        <ProjectCard />
        <p id="projects-heading">Recent Projects</p>
      <div className="projects-parent">
        {projects.map((project)=>{
                return <Project text={project.text} projectLink={project.projectLink} link={project.link} />
        })}
      </div>
    </section>
  );
}

export default Projects;
