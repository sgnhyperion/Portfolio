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
      title: "IMF_Phoenix",
      description: "A secure REST API for managing gadgets",
      image: "https://contentstatic.timesjobs.com/img/70139153/Master.jpg",
      link: "https://github.com/sgnhyperion/IMF_Phoenix",
    },
    {
      title: "TalkSpace",
      description: "A real-time chatting application using Socket.IO. Built in React and Express.js.",
      image: "https://media.licdn.com/dms/image/D5612AQGWFgfL-CAOPQ/article-cover_image-shrink_720_1280/0/1713469794627?e=2147483647&v=beta&t=3U6uc7SAzRatjUZvCVt3n4mSFnyvriY5AsrPUE3EOX0",
      link: "https://talkspace-zjuw.onrender.com/",
    },
    {
      title: "Library Management System",
      description: "A system for managing library resources efficiently.",
      image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*6Jp3vJWe7VFlFHZ9WhSJng.jpeg",
      link: "https://github.com/sgnhyperion/LBMS",
    },
    {
      title: "Product_Data_Enhancer",
      description: "A project that scrapes product data from Myntra and enhances the scraped data using AI",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7vYIZBbTOtWdQIf8ldTwVuh1EIXlkcmr-pQ&s",
      link: "https://github.com/sgnhyperion/Product_Data_Enhancer",
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
