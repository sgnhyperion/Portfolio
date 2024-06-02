import Project from "./Project";
import "./Projects.css";

function Projects() {
    let projects = [
        {
            projectLink:"https://github.com/sgnhyperion/ImageEditorproject",
            text:"Image Editor",
            link:"https://cdn.shopify.com/s/files/1/0070/7032/files/Pixlr_ef222ae9-970b-4bc7-a1fb-1fbfdcb6dffe.jpg?v=1596191878"
        },
        {
            projectLink:"https://sgnhyperion.github.io/MineSweeper/",
            text:"Mine Sweeper",
            link:"https://store-images.s-microsoft.com/image/apps.17472.9007199266246757.db625ec8-a024-470e-a413-924515c64b2c.316a1f72-e9d9-447b-8f0d-80b37c07d480?mode=scale&q=90&h=1080&w=1920"
        },
        {
            projectLink:"https://sgnhyperion.github.io/Scaler_social/",
            text:"Social App",
            link:"https://www.searchenginejournal.com/wp-content/uploads/2021/09/16-reasons-why-social-media-is-important-to-your-company-616d3200e6dc6-sej.png"
        },
        {
            projectLink:"https://github.com/sgnhyperion/TicTacToe",
            text:"Tic Tac Toe",
            link:"https://play-lh.googleusercontent.com/zPxLgj5nvl20ahJV7aFC6S5mD8kii5CEEDj25j1P9CYAfXL9sdDuO-8eES0r4DhJHrU=w240-h480-rw"
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
            link:"https://www.swic.edu/wp-content/uploads/2021/05/portfolio-2048x1224.png"
        }
    ]


  return (
    <section className="Projects">
      <div className="projects-parent">
        {projects.map((project)=>{
                return <Project text={project.text} projectLink={project.projectLink} link={project.link} />
        })}
      </div>
    </section>
  );
}

export default Projects;
