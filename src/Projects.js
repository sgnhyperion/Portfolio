import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Image Editor",
      description: "A project for editing and enhancing images.",
      image: "https://t3.ftcdn.net/jpg/06/06/79/70/360_F_606797008_rGPPk6bFWDQydnX7g7w1w9dVVZ4mD22J.jpg",
      link: "https://github.com/sgnhyperion/ImageEditorproject",
    },
    {
      title: "Mine Sweeper",
      description: "A fun implementation of the classic Minesweeper game.",
      image: "https://cdn.dribbble.com/userupload/12488481/file/original-caa3cce133f087293f8673eec3753f3f.jpeg?crop=0x347-1216x1259&resize=400x300&vertical=center",
      link: "https://sgnhyperion.github.io/MineSweeper/",
    },
    {
      title: "Social App",
      description: "A social app for connecting with people.",
      image: "https://media.licdn.com/dms/image/D5612AQGWFgfL-CAOPQ/article-cover_image-shrink_720_1280/0/1713469794627?e=2147483647&v=beta&t=3U6uc7SAzRatjUZvCVt3n4mSFnyvriY5AsrPUE3EOX0",
      link: "https://sgnhyperion.github.io/Scaler_social/",
    },
    {
      title: "Library Management System",
      description: "A system for managing library resources efficiently.",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*6Jp3vJWe7VFlFHZ9WhSJng.jpeg",
      link: "https://github.com/sgnhyperion/LBMS",
    },
    {
      title: "Map Tales",
      description: "A map that tells stories where we can pin places and add notes, built in MERN.",
      image: "https://imageio.forbes.com/blogs-images/trevornace/files/2015/11/beautiful-places-world-1200x900.jpg?format=jpg&height=900&width=1600&fit=bounds",
      link: "https://map-tales-frontend.vercel.app/",
    },
  ];

  return (
    <section className="Projects">
      <p id="projects-heading">Recent Projects</p>
      <div className="projects-parent">
        {projects.map((project, index) => (
          <ProjectCard
            key={index} 
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
